import { GetStaticProps, NextPage } from 'next';
import Layout from '../../components/layout/Layout';
import { BlogService, IBlogContent } from '../../helper/blog';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

const BlogDetail: NextPage<{ blog: IBlogContent }> = ({ blog }) => {
  console.log('blog', blog);
  return (
    <Layout>
      <h1 className="text-white font-black text-center mt-12 mb-2 md:mt-24 md:mb-10 text-3xl md:text-5xl">
        {blog?.title}
      </h1>
      <MDXRemote {...blog?.content} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const blogService = new BlogService();
  const data = await blogService.getBlogs();
  const paths = data
    .map((blog) =>
      blog?.name
        ? {
            params: { blogName: blog?.name },
          }
        : undefined,
    )
    .filter(Boolean);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogService = new BlogService();
  if (!params?.blogName) {
    return {
      notFound: true,
    };
  }
  const blogName = params.blogName as string;
  const blog = await blogService.getBlogContent(blogName);

  return {
    props: {
      blog: { ...blog, date: '' + blog?.date },
    },
  };
};

export default BlogDetail;
