import HighlightText from '@/app/commonComponents/highliter';
import TeamMemberCard from './teamMemberCard';

const teamMember = [
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
  {
    name: 'آیلار پورحسن',
    role: 'طراحUI/UX',
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <p className="text-3xl font-bold text-title">تیم ما</p>
      <p className="text-subtitle text-base">
        <HighlightText keyword="به تمام معنا" text="ما وقف ایجاد یک تیم متنوع هستیم - به تمام معنا" />
      </p>
      <div className="w-full relative">
        <div className="w-full py-7 overflow-auto relative">
          <div className="flex gap-8 whitespace-nowrap flex-nowrap">
            {teamMember?.map(({ name, role }, index) => (
              <TeamMemberCard name={name} role={role} key={`team member ${index}`} />
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-20 xl:w-52 bg-gradient-to-r from-[#ffffffcc] from-[60%] to-[rgba(255, 255, 255, 0.8)]"></div>
      </div>
    </div>
  );
};

export default OurTeam;
