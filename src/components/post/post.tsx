import React, { FC } from 'react';
import Button from '../../commonComponents/button/button';
import Image from '../../commonComponents/image/image';
import { formatTime } from '../../helpers/formatTime';
import { H2, P1, P2 } from '../typography/typography';
import style from './post.module.scss';
import { PostType } from '../../store/blog/types';
import { UserType } from '../../data/users';

type Props = {
  user: UserType;
  post: PostType;
  handlePostEdit: () => void;
  handleToHomePage: () => void;
  deletePostHandler: () => void;
};

const Post: FC<Props> = ({ post, user, handlePostEdit, handleToHomePage, deletePostHandler }) => {
  const { title, image, category, body, author, updated } = post;

  return (
    <div className={style.post}>
      <div className="row">
        <div className="col-xs-12">
          <Button handleClick={handleToHomePage} color="success">
            Back to Blogs
          </Button>
        </div>
        <div className="col-xs-12">
          <H2>{title}</H2>
        </div>
        <div className="col-xs-6">
          <Image src={image} alt={title} />
        </div>
        <div className="col-xs-6">
          <div className="row end-xs">
            <div className="col-xs-12">
              {(user.username?.toLowerCase() === author.toLowerCase() || user.status==='admin') && (
                <Button handleClick={handlePostEdit} color="success">
                  Edit post
                </Button>
              )}
            </div>
            <div className="col-xs-12">
              {user.status === 'admin' && (
                <Button handleClick={deletePostHandler} size="small" color="warning">Delete post</Button>
              )}
            </div>
          </div>
          <P2>
            Author :{' '}
            <em>
              {author}
              {'  '}
            </em>
          </P2>
          <P2>
            category:{' '}
            {category.map((cat) => (
              <em key={cat}>#{cat} </em>
            ))}
          </P2>
          <P2>
            Updated :{' '}
            <em>
              {formatTime(updated)}
              {',  '}
            </em>
          </P2>
        </div>
        <div className="col-xs-12">
          <P1>{body}</P1>
        </div>
      </div>
    </div>
  );
};

export default Post;
