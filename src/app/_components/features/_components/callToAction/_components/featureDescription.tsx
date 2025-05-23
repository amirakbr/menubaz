import Bell from "./icons/bell";
import Lines from "./icons/lines";

const FeatureDescription = () => {
  return (
    <div className="relative text-center flex flex-col justify-center gap-14 bg-white-200 rounded-lg py-8 px-4">
      <div className="relative max-w-80 mx-auto">
        <h4 className="text-xl text-title font-semibold">
          وقتی که امکانات دقیقا با نیازهای{" "}
          <span className="relative">
            شما <Lines />
          </span>{" "}
          هماهنگ می‌شوند!
        </h4>
      </div>
      <div className="relative">
        <p className="text-subtitle-700 ruby">
          <span className="relative">
            منوباز
            <Bell />
          </span>{" "}
          با در نظر گرفتن نیازهای متنوع رستوران‌ها طراحی شده و تمامی ابزارهای
          موردنیاز برای مدیریت و بهبود عملکرد را در اختیار شما قرار می‌دهد. نکته
          جذاب این است که بدون نیاز به طراح یا دانش تخصصی، می‌توانید به‌سادگی و
          تنها با انتخاب ویژگی‌های مناسب، آن را برای{" "}
          <span className="relative">
            کسب‌وکارتان
            <span className="absolute top-full -right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="20"
                fill="none"
                viewBox="0 0 99 20"
              >
                <path
                  stroke="#FFDE21"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M2 10.293c13.798-1.97 27.767-2.574 41.618-4.146C60.191 4.265 76.708 2 93.414 2c7.144 0 2.784-.06-1.267 1.306-7.622 2.57-15.26 5.92-22.728 8.907-3.185 1.274 6.859.154 10.289.154 1.131 0 12.5-.863 12.785.422.544 2.449-.161 3.701-2.035 5.106"
                ></path>
              </svg>
            </span>
          </span>{" "}
          راه‌اندازی کنید.
        </p>
      </div>
    </div>
  );
};

export default FeatureDescription;
