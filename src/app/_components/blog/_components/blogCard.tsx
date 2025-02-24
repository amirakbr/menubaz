import Image from 'next/image';
import { IBlogData } from '../interface';
import ArrowLeftIcon from '@/app/public/icons/arrowLeft';

const BlogCard = ({ image, summary, title }: IBlogData) => {
  return (
    <>
      <div className="flex flex-col gap-4 max-w-[405px] min-w-[300px]">
        <Image width={408} height={233} src={image} alt={`${image} blog post image`} className="rounded-lg" />
        <p className="text-xl text-title tracking-wide text-wrap">{title}</p>
        <p className="text-sm text-wrap">{summary}</p>
        <div className="flex items-end justify-end gap-2">
          <p className="text-sm text-complementary">ادامه مطلب</p>
          <ArrowLeftIcon />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
