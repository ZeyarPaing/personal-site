import { GetServerSideProps, NextPage } from 'next';
import Layout from 'components/layout/Layout';
import React from 'react';
import { BlogService, IRepoContent } from '../../helper/blog';
import Image from 'next/image';
import Link from 'next/link';

const Blogs: NextPage<{ blogs: IRepoContent[] }> = ({ blogs }) => {
  console.log('blogs', blogs);
  return (
    <Layout
      title="Blogs by Zeyar Paing"
      description="Articles and blogs related to software development, web development and frontend development"
    >
      <h1 className="text-white font-black text-center mt-12 mb-2 md:mt-24 md:mb-10 text-3xl md:text-5xl">
        Blogs
      </h1>
      <div className="prose lg:prose-xl">{/*<MDXRemote {...source} />*/}</div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {blogs.map((blog, idx) => (
          <Link href={`/blogs/${blog.name}`} key={idx}>
            <Image src={blog.image} width={100} height={100} alt={blog.name} />
            <h2>{blog.title}</h2>
          </Link>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const blogService = new BlogService();
  const data = await blogService.getBlogs();
  console.log('GETSTA', data);
  return {
    props: {
      blogs: data
        .filter(Boolean)
        .map((blog) => ({ ...blog, date: '' + blog?.date })),
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
// console.log('data', data);

// console.log('GH_TOKEN ', process.env.GH_TOKEN);
// const mdxSource = await serialize('# Hello World');
//   return { props: { blogs: data } };
// };

export default Blogs;
