export interface IPartnersData {
  logo: string;
  link: string;
}

export interface IPartnerCategoryBarProps {
  setSelectedTab: (value: IPartnerCategoryCardProps['selectedTab']) => void;
  selectedTab: string;
}

export interface IPartnerCategoryCardProps {
  selectedTab: 'restaurant' | 'coffeeShop' | 'fastFood' | 'foodCourt' | 'catering';
}

export interface IPartnerCategoryBarData {
  label: string;
  name: IPartnerCategoryCardProps['selectedTab'];
}
