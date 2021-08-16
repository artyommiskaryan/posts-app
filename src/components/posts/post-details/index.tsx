import Jdenticon from 'react-jdenticon';
import { DetailsContainer, Info } from '../../shared/styled';

export interface PostDetailsProps {
  name: string;
  date: Date;
}

export const PostDetails = ({ name, date }: PostDetailsProps) => {
  return (
    <DetailsContainer>
      <Jdenticon size="32" />
      <Info>
        <span>{name}</span>
        <p>{date.toLocaleString()}</p>
      </Info>
    </DetailsContainer>
  );
};
