import Link from "next/link";
import Button from "./commonComponents/button/index";
import NotFoundIcon from "./public/icons/404";
import LeftChevronicon from "./public/icons/leftChevronIcon";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full my-20 px-4">
      <h1>صفحه ای که دنبال آن بودید یافت نشد!!!</h1>
      <NotFoundIcon height={200} />
      <Link href="/">
        <Button
          className="flex items-center gap-4"
          variant="secondary"
          size="small"
        >
          صفحه اصلی
          <LeftChevronicon />
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
