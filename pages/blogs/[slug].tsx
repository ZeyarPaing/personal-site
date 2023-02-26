import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/layout/Layout';
import { BlogService, IBlogContent } from 'helper/blog';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import styles from 'styles/Blogs.module.css';
import Image from 'next/image';

const BlogDetail: NextPage<{ blog: IBlogContent }> = ({ blog }) => {
  return (
    <Layout
      image={blog.image}
      keywords={blog.tags?.join(',')}
      title={blog.title}
      description={blog.description}
    >
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>
        <MDXRemote {...blog?.content} />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await BlogService.getBlogs();
  const paths = data.map((blog) => ({
    params: { slug: blog?.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }
  const slug = params.slug as string;
  const blog = await BlogService.getBlogContent(slug);

  return {
    props: {
      blog,
    },
  };
};

export default BlogDetail;
