import CommentCard from './commentCard';
import commentData from './commentData';

const FeedbacksSection = () => {
  const firstColumn = commentData.filter((_, index) => index % 4 === 0);
  const secondColumn = commentData.filter((_, index) => index % 4 === 1);
  const thirdColumn = commentData.filter((_, index) => index % 4 === 2);
  const fourthColumn = commentData.filter((_, index) => index % 4 === 3);

  return (
    <>
      <div className="flex flex-no-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[822px] relative overflow-scroll sm:overflow-hidden p-7">
        <div className="flex flex-no-wrap sm:grid gap-3 h-max">
          {firstColumn?.map(({ avatar, comment, owner, shopName }, index) => (
            <CommentCard avatar={avatar} comment={comment} owner={owner} shopName={shopName} key={`comment card ${index}`} />
          ))}
        </div>
        <div className="flex flex-no-wrap sm:grid gap-3 h-max">
          {secondColumn?.map(({ avatar, comment, owner, shopName }, index) => (
            <CommentCard avatar={avatar} comment={comment} owner={owner} shopName={shopName} key={`comment card ${index}`} />
          ))}
        </div>
        <div className="flex flex-no-wrap sm:grid gap-3 h-max">
          {thirdColumn?.map(({ avatar, comment, owner, shopName }, index) => (
            <CommentCard avatar={avatar} comment={comment} owner={owner} shopName={shopName} key={`comment card ${index}`} />
          ))}
        </div>
        <div className="flex flex-no-wrap sm:grid gap-3 h-max">
          {fourthColumn?.map(({ avatar, comment, owner, shopName }, index) => (
            <CommentCard avatar={avatar} comment={comment} owner={owner} shopName={shopName} key={`comment card ${index}`} />
          ))}
        </div>
        <div className="hidden sm:block absolute z-5 bottom-0 left-0 w-full h-72 bg-gradient-to-t from-[white] to-transparent"></div>
      </div>
    </>
  );
};

export default FeedbacksSection;
