import Button from '@/app/commonComponents/button';
import MenuIcon from '@/app/public/icons/menu';
import Logo from '@/app/public/logo/logo';

const Header = () => {
  return (
    <header className="p-4 flex items-center gap-4 container mx-auto">
      <MenuIcon />
      <div className="flex items-center justify-between gap-4 w-full">
        <Button size="small" variant='secondary'>
          ثبت نام
        </Button>
        <Logo height={24} width={64} />
      </div>
    </header>
  );
};

export default Header;
