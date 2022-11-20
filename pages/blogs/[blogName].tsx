import { GetServerSideProps, NextPage } from 'next';
import Layout from '../../components/layout/Layout';
import { BlogService, IBlogContent } from '../../helper/blog';
import { MDXRemote } from 'next-mdx-remote';

const BlogDetail: NextPage<{ blog: IBlogContent }> = ({ blog }) => {
  return (
    <Layout>
      <h1>{blog.name}</h1>
      <MDXRemote {...blog.content} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const blogService = new BlogService();
  console.log('params');
  if (!params?.blogName) {
    return {
      notFound: true,
    };
  }
  const blogName = params.blogName as string;
  const parsedId = blogName.replace(/-/g, ' ');
  const blog = await blogService.getBlogContent(parsedId);

  return {
    props: {
      blog,
    },
  };
};

export default BlogDetail;
