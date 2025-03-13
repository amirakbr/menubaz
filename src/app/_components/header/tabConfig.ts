import { IIConProps } from '@/app/commonComponents/commonInterface';
import HomeIcon from '@/app/public/icons/homeIcon';
import { ReactNode } from 'react';

export interface ITabConfigProps {
  label: string;
  smallScreenOnly?: boolean;
  subMenu?: { label: string; icon?: ({ height, width }: IIConProps) => ReactNode }[];
  icon?: ({ height, width }: IIConProps) => ReactNode;
}

const tabConfig: ITabConfigProps[] = [
  {
    label: 'صفحه اصلی',
    smallScreenOnly: true,
    icon: HomeIcon,
  },
  {
    label: 'سفارش ها',
    subMenu: [
      {
        label: 'سفارش بر روی میز',
        icon: HomeIcon,
      },
      {
        label: 'سفارش تحویل حضوری',
        icon: HomeIcon,
      },
      {
        label: 'سفارش ارسال با پیک',
        icon: HomeIcon,
      },
    ],
  },
  {
    label: 'منو دیجیتال',
    smallScreenOnly: true,
    icon: HomeIcon,
  },
  {
    label: 'بیشتر',
    subMenu: [
      {
        label: 'راهنمای محصول',
        icon: HomeIcon,
      },
      {
        label: 'بلاگ',
        icon: HomeIcon,
      },
      {
        label: 'قوانین و شرایط استفاده',
        icon: HomeIcon,
      },
      {
        label: 'حریم خصوصی',
        icon: HomeIcon,
      },
    ],
  },
  {
    label: 'تعرفه ها',
    icon: HomeIcon,
  },
  {
    label: 'تماس با ما',
    icon: HomeIcon,
  },
];

export default tabConfig;
