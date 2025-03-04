import { ITeamMemberProps } from '../interface';

const TeamMemberCard = ({ name, role }: ITeamMemberProps) => {
  return (
    <div className="min-w-[281px] h-[321px] relative rounded-lg bg-white-200">
      <div className="flex flex-col text-right gap-2 absolute bg-[#FFFFFF] w-[90%] p-2 rounded-xl bottom-8 left-[5%]">
        <p className="text-sm font-semibold text-title">{name}</p>
        <p className="text-xs text-subtitle-300">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
