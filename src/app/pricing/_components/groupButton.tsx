import Button from '@/app/commonComponents/button';
import { IGroupButtonProps } from '../interface';

const GroupButton = ({ selectedButton, setSelectedButton }: IGroupButtonProps) => {
  return (
    <div className="p-1 rounded-xl bg-white-200 flex gap-1">
      <Button
        onClick={() => {
          setSelectedButton('monthly');
        }}
        variant={selectedButton === 'monthly' ? 'contained' : 'text'}
      >
        <p className={`${selectedButton === 'monthly' ? 'text-title' : 'text-title-400'}`}>ماهانه</p>
      </Button>
      <Button
        onClick={() => {
          setSelectedButton('yearly');
        }}
        variant={selectedButton === 'yearly' ? 'contained' : 'text'}
      >
        <p className={`${selectedButton === 'yearly' ? 'text-title' : 'text-title-400'}`}>سالانه</p>
      </Button>
    </div>
  );
};

export default GroupButton;
