import ArrowLeftIcon from '@/app/public/icons/arrowLeft';
import DocumentText from '@/app/public/icons/documentText';
import Link from 'next/link';

const linkData = [
  'الزامی بودن ورود جهت مشاهده منو',
  'تعیین موجودی محصول',
  'آیتم های اضافی / سفارشی سازی محصول',
  'اضافه کردن آیکن دلخواه به دسته محصولات',
  'مشاهده و دانلود Qr کد',
  'ایجاد دسته جدید و نحوه نمایش آن',
  'تغییر نام منوها',
  'گروه و آیتم های انتخابی',
  'ایجاد محصول در منوباز',
  'ایجاد زیر دسته جدید و نحوه نمایش آن',
  'ویرایش و حذف محصول',
  'ایجاد زمان بندی برای نمایش دسته',
];

const LinkList = () => {
  return (
    <div className="w-full flex flex-col">
      {linkData?.map((link, index) => (
        <Link href={'#'} key={`link ${index}`} className="py-4 border-b border-b-gray-100 group hover:border-b-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 group-hover:text-gray-600 transition-all">
                <DocumentText primaryColor="currentColor" />
              </span>
              <span className="text-base md:text-2xl text-whiteBlack-400 font-semibold group-hover:font-bold group-hover:text-title transition-all">{link}</span>
            </div>
            <div className="translate-x-0 relative group-hover:-translate-x-4 transition-all text-gray-400 group-hover:text-gray-600">
              <ArrowLeftIcon primaryColor="currentColor" width={24} height={24} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
