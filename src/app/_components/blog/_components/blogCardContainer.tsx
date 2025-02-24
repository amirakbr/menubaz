import BlogCard from './blogCard';
import blogData from './blogData';

const BlogCardContainer = () => {
  return (
    <>
      {blogData?.map(({ image, summary, title }, index) => (
        <BlogCard image={image} summary={summary} title={title} key={`blog post ${index}`} />
      ))}
    </>
  );
};

export default BlogCardContainer;
