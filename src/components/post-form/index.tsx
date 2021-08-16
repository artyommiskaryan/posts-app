import { useState, ChangeEventHandler, FormEventHandler } from 'react';
import { HeadText, Form, Input, Textarea, Button } from '../shared/styled';
import * as uuid from 'uuid';

export interface IPost {
  name: string;
  message: string;
  date: Date;
  id: string;
}

export interface PostFormProps {
  onSave: (post: IPost) => void;
}

const initialState: IPost = {
  name: '',
  message: '',
  date: new Date(),
  id: '',
};

export const PostForm = ({ onSave }: PostFormProps) => {
  const [postData, setPostData] = useState(initialState);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e,
  ) => {
    setPostData((postData) => {
      const data = { ...postData };
      data[e.target.name as 'name' | 'message'] = e.target.value;
      data.date = new Date();
      data.id = uuid.v4();
      return data;
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setPostData(initialState);
    onSave(postData);
  };
  
  return (
    <>
      <HeadText>NEW POSTS</HeadText>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={postData.name}
          placeholder="Name"
          type="text"
          onChange={onChange}
        />
        <Textarea
          name="message"
          value={postData.message}
          placeholder="Type something..."
          onChange={onChange}
        />
        <Button>
          <button
            disabled={!postData.date || !postData.name || !postData.message}
          >
            SAVE
          </button>
        </Button>
      </Form>
    </>
  );
};
