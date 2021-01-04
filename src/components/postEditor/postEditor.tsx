/* eslint-disable react/jsx-curly-newline */
import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Form from '../../commonComponents/form/form';
import Image from '../../commonComponents/image/image';
import Input from '../../commonComponents/Input/input';
import Textarea from '../../commonComponents/textarea/textarea';
import Label from '../../commonComponents/label/label';
import { RootState } from '../../store/store';
import Button from '../../commonComponents/button/button';
import Datalist from '../../commonComponents/datalist/datalist';

type Props = {
  SavePostHandler: (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    body: string,
    image: string,
    category1: string,
    category2: string
  ) => void;
  handleCancel: () => void
};

const categories: string[] = [];

const PostEditor: FC<Props> = ({ SavePostHandler, handleCancel }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('https://picsum.photos/200/300');
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const posts = useSelector((state: RootState) => state.blogPosts);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    const post = posts.find((onePost) => onePost.postId === postId);
    if (post) {
      setTitle(post?.title);
      setBody(post?.body);
      setImage(post?.image);
      setCategory1(post?.category[0]);
      setCategory2(post?.category[1]);
    }
  }, []);

  posts.forEach((post) =>
    post.category.forEach((cat) => {
      if (!categories.includes(cat)) {
        categories.push(cat);
      }
    })
  );

  return (
    <div>
      <div className="row center-xs">
        <div className="col-xs-10">
          <Form
            handleSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              SavePostHandler(e, title, body, image, category1, category2)
            }
          >
            <div className="row center-xs">
              <div className="col-xs-11">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={title}
                  required
                  onChangeHandler={(value) => setTitle(value)}
                  focus
                />
              </div>
              <div className="col-xs-3">
                <Image src={image} alt="add image" />
              </div>
              <div className="col-xs-8">
                <Label htmlFor="image">Image</Label>
                <Input
                  type="text"
                  id="image"
                  placeholder="Image link"
                  value={image}
                  required
                  onChangeHandler={(value) => setImage(value)}
                />
                <div className="row">
                  <div className="col-xs-6">
                    <Label htmlFor="category1">First category</Label>
                    <Input
                      value={category1}
                      type="text"
                      list="data1"
                      id="category1"
                      required
                      onChangeHandler={(value) => setCategory1(value)}
                    />
                    <Datalist data={categories} id="data1" />
                  </div>
                  <div className="col-xs-6">
                    <Label htmlFor="category2">Second category</Label>
                    <Input
                      value={category2}
                      type="text"
                      list="data2"
                      id="category2"
                      required
                      onChangeHandler={(value) => setCategory2(value)}
                    />
                    <Datalist data={categories} id="data2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-11">
                <Label htmlFor="textarea">Body</Label>
                <Textarea
                  required
                  id="textarea"
                  placeholder="My story starts here..."
                  value={body}
                  onChangeHandler={(value) => setBody(value)}
                >
                  {body}
                </Textarea>
              </div>
            </div>

            <Button size='large' color='success' type="submit">
              Save{' '}
            </Button>
            <Button size='large' color='success' handleClick={handleCancel}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
