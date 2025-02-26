import Button from '@/app/commonComponents/button';

const ContactForm = () => {
  return (
    <div className="xl:max-w-[636px] max-h-[580px] rounded-lg bg-white-200 p-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-bse font-semibold xl:text-xl text-title">مشاوره رایگان</p>
          <p className="text-xs xl:text-sm text-subtitle-400">
            انتخاب یک نرم‌افزار جدید همیشه چالش‌برانگیز بوده؛ ما با افتخار اینجا هستیم تا به شما کمک کنیم بهترین را انتخاب کنید.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="name">
            <p className="text-title-400">نام و نام خانوادگی *</p>
            <input type="text" id="name" />
          </label>
          <label htmlFor="phoneNumber">
            <p className="text-title-400">شماره تلفن همراه *</p>
            <input type="text" id="phoneNumber" />
          </label>
          <label htmlFor="businessName">
            <p className="text-title-400">نام مجموعه *</p>
            <input type="text" id="businessName" />
          </label>
          <label htmlFor="businessName">
            <p className="text-title-400">نوع کسب و کار *</p>
            <select name="businessName" id="businessName">
              <option value="coffeeShop">کافی شاپ</option>
            </select>
          </label>
        </div>
        <Button variant="secondary" className="w-max" size="small">
          ثبت درخواست
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
