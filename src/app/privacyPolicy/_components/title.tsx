import { ITitle } from '../interface';

const Title = ({ title }: ITitle) => {
  return <p className="text-2xl font-medium text-complementary">{title}</p>;
};

export default Title;
