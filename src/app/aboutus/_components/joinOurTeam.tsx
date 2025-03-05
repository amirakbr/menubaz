import Button from '@/app/commonComponents/button';

const JoinOurTeam = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[431px] m-auto md:items-center">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-title text-3xl font-bold">ما مشتاق آشنایی با شما هستیم!</p>
        <p className="text-subtitle text-base">
          اگر به دنبال فضایی برای رشد، یادگیری و همکاری در کنار تیمی خلاق و متعهد هستید، منوباز منتظر شماست.اگر ارزش‌های ما با باورها و اهداف شما همسو
          است، همین امروز به تیم ما بپیوندید!
        </p>
      </div>
      <Button variant="secondary" size="medium">
        رزومه خود را برای ما ارسال کنید
      </Button>
    </div>
  );
};

export default JoinOurTeam;
