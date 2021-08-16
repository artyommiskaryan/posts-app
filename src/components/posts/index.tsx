import { PostDetails } from './../index';
import { IPost } from '../post-form';
import { PostContainer, PostMessage, HeadText } from '../shared/styled';

export interface PostsProps {
  handleRemovePost: (id: string) => void;
  data: IPost[];
}

export const Posts = ({ data, handleRemovePost }: PostsProps) => {
  return (
    <>
      <HeadText>POSTS</HeadText>
      {data &&
        data.map((post) => {
          return (
            <PostContainer onClick={() => handleRemovePost(post.id)}>
              <PostMessage>
                <p>{post.message}</p>
              </PostMessage>
              <PostDetails name={post.name} date={post.date} />
            </PostContainer>
          );
        })}
    </>
  );
};
