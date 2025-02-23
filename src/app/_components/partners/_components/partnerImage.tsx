import Image from 'next/image';
import { IPartnersData } from '../interface';

const PartnerImage = ({ link, logo }: IPartnersData) => {
  return (
    <div>
      <Image width={80} height={80} src={logo} alt={`${logo} logo`} />
    </div>
  );
};

export default PartnerImage;
