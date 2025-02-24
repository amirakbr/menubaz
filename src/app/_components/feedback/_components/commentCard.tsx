import Image from 'next/image';
import { ICommentCardProps } from '../interface';
import HighlightText from '@/app/commonComponents/highliter';

const CommentCard = ({ avatar, comment, owner, shopName }: ICommentCardProps) => {
  return (
    <div className="min-w-[321px] sm:min-w-[unset] h-max flex flex-col gap-4 drop-shadow-100 bg-[#FFFFFF] p-5 rounded-2xl">
      <div className="flex items-center gap-2">
        <div className="overflow-hidden rounded-full">
          <Image width={31} height={31} src={`/partners/${avatar}`} alt={`partner ${avatar} logo`} />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-sm text-title">{shopName}</p>
          <p className="text-subtitle-300 text-xs">{owner}</p>
        </div>
      </div>
      <p className="text-title-400 text-base">
        <HighlightText keyword="منوباز" text={comment} />
      </p>
    </div>
  );
};

export default CommentCard;
