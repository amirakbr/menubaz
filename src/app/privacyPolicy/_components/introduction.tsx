import HighlightText from '@/app/commonComponents/highliter';
import Title from './title';

const Introduction = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Title title="مقدمه" />
      <p>
        <HighlightText
          keyword="منوباز"
          text="به منوباز خوش آمدید. این نوشته توضیح می‌دهد اطلاعات شخصی شما در هنگام استفاده از این وب‌سایت چگونه مدیریت و به کار گرفته می‌شود و حقوق شما در این رابطه چگونه است."
          color='text-title font-medium'
        />
      </p>
      <p>
        حریم خصوصی کاربر از اولویت های کاری ما می باشد و ما متعهد هستیم که از داده‌های شخصی شما محافظت کنیم و تمام اقدامات منطقی را برای ایمن نگه
        داشتن اطلاعات شما و محافظت از آنها در برابر سوء استفاده، مطابق با قوانین حفظ حریم خصوصی و مقررات عمومی حفاظت از داده‌ها، انجام دهیم.
      </p>
      <p>
        این خط ‌مشی برای وب‌سایت ما <span className='text-complementary'>menobuzz.com</span> اعمال می‌شود که توضیح می‌دهد، چرا و چگونه اطلاعات شخصی شما را به دست آورده‌ایم، آن‌ها را
        با چه کسانی به اشتراک می‌گذاریم و شما در ارتباط با اطلاعاتی که ما از آن‌ها استفاده می‌کنیم، چه حقوقی را دارا خواهید بود.{' '}
        <span className='text-title font-medium'>لطفاً این متن را با دقت مطالعه کنید.</span>
      </p>
    </div>
  );
};

export default Introduction;
