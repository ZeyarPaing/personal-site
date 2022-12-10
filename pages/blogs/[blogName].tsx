import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/layout/Layout';
import { blogService, IBlogContent } from 'helper/blog';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import styles from 'styles/Blogs.module.css';
import Image from 'next/image';

const BlogDetail: NextPage<{ blog: IBlogContent }> = ({ blog }) => {
  return (
    <Layout title={blog.title} description={blog.description}>
      <picture className="block w-full h-56 mt-20">
        <Image
          src={blog.image}
          alt={blog.title}
          className={'w-full h-full object-cover rounded-xl'}
          width={3000}
          height={1000}
          loading="eager"
        />
      </picture>
      <article className={`${styles.blogDetail} prose lg:prose-xl`}>
        <MDXRemote {...blog?.content} />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await blogService.getBlogs();
  const paths = data.map((blog) => ({
    params: { blogName: blog?.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.blogName) {
    return {
      notFound: true,
    };
  }
  const blogName = params.blogName as string;
  const blog = await blogService.getBlogContent(blogName);

  return {
    props: {
      blog,
    },
  };
};

export default BlogDetail;
