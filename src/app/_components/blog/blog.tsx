import Button from '@/app/commonComponents/button';
import HighlightText from '@/app/commonComponents/highliter';
import BlogCardContainer from './_components/blogCardContainer';

const Blog = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-2xl xl:text-3xl font-bold text-center">
          <HighlightText keyword="منوباز" text="جدیدترین‌های منوباز را ببینید" />
        </p>

        <div className="flex item-center justify-between whitespace-nowrap gap-8 overflow-auto p-4">
          <BlogCardContainer />
        </div>

        <div className="w-full flex justify-center">
          <Button size="small" variant="secondary">
            پست های بیشتر
          </Button>
        </div>
      </div>
    </>
  );
};

export default Blog;
