import { Octokit } from '@octokit/core';
import { OctokitResponse } from '@octokit/types';
import axios from 'axios';
import { serialize } from 'next-mdx-remote/serialize';

interface IRepoContent {
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
export interface IBlogContent {
  name: string;
  image: string;
  content: any;
}
const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

export const ghRawUrl =
  'https://raw.githubusercontent.com/ZeyarPaing/blogs/main';

// async function responseWrapper<T>(fn: () => Promise<T>): Promise<T> {
//      return fn().then((data) => )
// }

export class BlogService {
  getBlogUrl(blogName: string) {
    return `${ghRawUrl}/${blogName}/index.md`;
  }

  getBlogContent(blogName: string): Promise<IBlogContent> {
    return axios.get(this.getBlogUrl(blogName)).then(async (res) => {
      const content = await serialize(
        (res.data as string).replace(
          /!\[([^\]]*)]\(([^)]*)\)/g,
          (match, p1, p2) => {
            return `![${p1}](${ghRawUrl}/${encodeURI(blogName)}/${p2})`;
          },
        ),
      );
      return {
        name: blogName,
        image: `${ghRawUrl}/_cover-images/${blogName}.jpg`,
        content,
      };
    });
  }

  async getBlogs() {
    // return responseWrapper<IRepoContent>(
    //    () => {
    let a: Promise<OctokitResponse<IRepoContent[]>> = octokit.request(
      'GET /repos/{owner}/{repo}/contents/',
      {
        owner: 'ZeyarPaing',
        repo: 'blogs',
      },
    );
    return a.then((response) => {
      return response.data
        .map((blog) => {
          if (blog.name[0] === '_') return;
          return {
            ...blog,
            image: `${ghRawUrl}/_cover-images/${blog.name}.jpg`,
          };
        })
        .filter(Boolean);
    });
    //    },
    // );
  }
}
