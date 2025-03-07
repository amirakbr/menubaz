import HighlightText from '@/app/commonComponents/highliter';
import Title from './title';

const collectedInfoData = [
  {
    label: 'اطلاعات شما از روشهای زیر به دست می‌آیند:',
    contents: [
      { content: 'وارد کردن اطلاعات شخصی توسط شما (مانند جزئیات تماس و مکاتبات )', keyword: '' },

      { content: 'اجازه دسترسی به اطلاعات شما (مانند داده های دستگاه و فعالیت سایت)', keyword: '' },

      {
        content:
          'لازم به ذکر است که تنها اطلاعات شخصی را جمع آوری و ذخیره می‌نماییم که به آن نیاز داریم و یا با اهدافی که قصد استفاده از آنها را داریم مرتبط است.',
        keyword: '',
      },
    ],
  },
  {
    label: 'اطلاعات شخصی که شما به ما می‌دهید',
    contents: [
      {
        content:
          'این اطلاعات از طریق بازدید از سایت ما، مکاتبه با ما از طریق ایمیل/شماره تماس یا وسایل دیگر، به ما داده می‌شود. این اطلاعات توسط شما کاملاً داوطلبانه ارائه می‌گردند. اطلاعاتی که به ما می‌دهید می‌تواند شامل نام، جزئیات تماس شما (مانند شماره تلفن و آدرس ایمیل) و هر گونه اطلاعات شخصی باشد که هنگام مکاتبه با ما وارد می‌کنید.',
        keyword: '',
      },
    ],
  },
  {
    label: 'اطلاعاتی که در مورد شما از منابع دیگر ذخیره می‌کنیم',
    contents: [
      {
        content:
          'ممکن است اطلاعات خاصی در مورد شما به دست آوریم که به صورت عمومی در دسترس است. این اطلاعات ممکن است مستقیماً از وب‌سایت‌هایی که به صورت آنلاین منتشر نموده‌اند یا از واسطه‌های داده شخص ثالث (Third Parties) که خودشان اطلاعات شخصی شما را از منابع در دسترس عموم به‌دست آورده‌اند، دریافت شود. خاطر نشان می‌کنیم از این اطلاعات در چارچوب قانون حفاظت از داده‌ها استفاده خواهیم شد.',
        keyword: '(Third Parties)',
      },
    ],
  },
];
const CollectedInfo = () => {
  return (
    <div className="flex flex-col gap-3">
      <Title title="اطلاعاتی که از شما می‌گیریم" />
      <div className="flex flex-col gap-8">
        {collectedInfoData?.map(({ contents, label }, index) => (
          <div className="flex flex-col" key={`collected info ${index}`}>
            <p className="text-title font-medium">{label}</p>
            <div className="flex flex-col">
              {contents?.map(({ content, keyword }, index) => (
                <p key={`sub collected info ${index}`}>{keyword ? <HighlightText keyword={keyword} text={content} /> : content}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CollectedInfo;
