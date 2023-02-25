import { Octokit } from '@octokit/core';
import { OctokitResponse } from '@octokit/types';
import axios from 'axios';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

export interface IBlogMeta {
  title: string;
  date: string;
  tags?: string[];
  description: string;
}

export interface IRepoContent extends IBlogMeta {
  type: string;
  encoding: string;
  size: number;
  name: string;
  image: string;
  path: string;
  sha: string;
  url: string;
  git_url: string;
  html_url: string;
  download_url: string;
  _links: {
    git: string;
    self: string;
    html: string;
  };
}
export interface IBlogContent extends IBlogMeta {
  name: string;
  image: string;
  content: any;
}
const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

export const ghRawUrl =
  'https://raw.githubusercontent.com/ZeyarPaing/blogs/main';

export class BlogService {
  static getBlogUrl(blogName: string) {
    return `${ghRawUrl}/${blogName}/index.md`;
  }

  static getBlogContent(blogName: string): Promise<IBlogContent> {
    return axios.get(BlogService.getBlogUrl(blogName)).then(async (res) => {
      const rawMd = res.data as string;
      const { data, content } = matter(rawMd);
      const metaData = data as IBlogMeta;
      const mdxSource = await serialize(
        content.replace(/!\[([^\]]*)]\(([^)]*)\)/g, (match, p1, p2) => {
          return `![${p1}](${ghRawUrl}/${encodeURI(blogName)}/${p2})`;
        }),
      );
      console.log({
        content,
        data,
        metaData,
        mdxSource,
      });
      return {
        ...metaData,
        date: metaData.date + '',
        name: blogName,
        image: `${ghRawUrl}/_cover-images/${blogName}.jpg`,
        content: mdxSource,
      };
    });
  }

  static async getBlogs() {
    let ghRequest: Promise<OctokitResponse<IRepoContent[]>> = octokit.request(
      'GET /repos/{owner}/{repo}/contents/',
      {
        owner: 'ZeyarPaing',
        repo: 'blogs',
      },
    );
    return ghRequest.then(async (response) => {
      let data = response.data.map((blog) => {
        if (blog.name[0] === '_') return;
        return axios.get(`${ghRawUrl}/${blog.name}/index.md`).then((res) => {
          const rawMd = res.data as string;
          const { data: metaData } = matter(rawMd);
          return {
            ...blog,
            ...metaData,
            date: '' + metaData.date,
            image: `${ghRawUrl}/_cover-images/${blog.name}.jpg`,
          };
        });
      });
      try {
        let dataList = await Promise.all(data);
        return Promise.resolve(dataList.filter(Boolean));
      } catch (e) {
        return Promise.reject(e);
      }
    });
  }
}
