import Title from './title';

const FinancialInfoUsage = () => {
  return (
    <div className="flex flex-col gap-3">
      <Title title="استفاده از اطلاعات مالی" />
      <p>
        اگر از سایت‌ ما برای خرید یا سایر تراکنش‌های مالی (مانند پرداخت صورتحساب) استفاده می‌کنید، ممکن است اطلاعاتی درباره خرید یا تراکنش ذخیره کنیم.
        این داده ها شامل اطلاعات پرداخت، مانند شماره کارت بانکی(ذخیره شده به عنوان رمز ایمن)، جزئیات صورتحساب و سایر اطلاعات حساب و تماس
        می‌باشد.اطلاعات مالی شما صرفاً برای پردازش پرداخت‌های محصولات یا خدماتی که از طریق استفاده از سایت‌ ما درخواست یا خریداری می‌کنید، استفاده
        خواهد شد.لازم به ذکر است یادآوری شود که ممکن است از پلتفرم‌های شخص ثالث برای مدیریت پردازش پرداخت آنلاین استفاده گردد. در این صورت این
        نمایندگان مجاز به ذخیره، نگهداری یا استفاده از اطلاعات مالی شما یا سایر اطلاعات قابل شناسایی شخصی نیستند، مگر با هدف پردازش پرداخت از طرف ما.
        هر عامل شخص ثالثی که توسط ما استفاده می‌شود، مجاز به استفاده از اطلاعات مالی شما (به غیر از پردازش پرداخت‌ها) به هیچ وجه نیست و ملزم است هر
        گونه اطلاعات مالی را که استفاده یا ذخیره می‌کند نزد خود محرمانه نگه دارد.
      </p>
    </div>
  );
};

export default FinancialInfoUsage;
