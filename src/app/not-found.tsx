import Link from "next/link";
import Button from "./commonComponents/button/index";
import NotFoundIcon from "./public/icons/404";
import LeftChevronicon from "./public/icons/leftChevronIcon";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full my-20">
      <h1>صفحه ای که دنبال آن بودید یافت نشد!!!</h1>
      <NotFoundIcon height={200} />
      <Button variant="secondary" size="small">
        <Link className="flex items-center gap-4" href="/">
          صفحه اصلی
          <LeftChevronicon />
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
