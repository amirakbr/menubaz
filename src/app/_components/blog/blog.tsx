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
        <div className="w-full relative">
          <div className="flex item-center justify-between whitespace-nowrap gap-8 overflow-auto p-4 relative">
            <BlogCardContainer />
          </div>
          <div className="block sm:hidden absolute z-5 bottom-0 left-0 h-full w-16 bg-gradient-to-r from-[white] to-transparent"></div>
        </div>

        <div className="w-full flex justify-center">
          <Button size="small" variant="contained" color="secondary">
            پست های بیشتر
          </Button>
        </div>
      </div>
    </>
  );
};

export default Blog;
