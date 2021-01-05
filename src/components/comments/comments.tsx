import React, { FC } from 'react';
import Button from '../../commonComponents/button/button';
import { H2, H3, P2 } from '../typography/typography';
import { PostType } from '../../store/blog/types';
import style from './comments.module.scss';
import Textarea from '../../commonComponents/textarea/textarea';
import { UserType } from '../../data/users';

type Props = {
  post: PostType;
  user: UserType;
  inputCommentValue: string;
  deleteCommentHandler: (commentId: string) => void;
  commentHandler: () => void;
  commentValueHandler: (e: string) => void;
};

const Comments: FC<Props> = ({
  post,
  user,
  deleteCommentHandler,
  inputCommentValue,
  commentHandler,
  commentValueHandler,
}) => {
  const { comments } = post;

  return (
    <div className={style.comments}>
      <H2>Comments</H2>
      <div className="row">
        <div className="col-xs-12">
          {comments.map(({ commentId, email, body }) => (
            <div className={style.commentCard} key={commentId}>
              <div className="col-xs-4">
                <P2>{email}</P2>
                {user.status === 'admin' && (
                  <Button handleClick={() => deleteCommentHandler(commentId)} size="small" color="warning">Delete comment</Button>
                )}
              </div>
              <div className="col-xs-8">
                <P2>{body}</P2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row center-xs">
        {user.email ? (
          <div className="col-xs-12">
            <Textarea
              required
              id="textarea"
              placeholder="Add comment here..."
              value={inputCommentValue}
              rows={3}
              onChangeHandler={commentValueHandler}
            >
              {inputCommentValue}
            </Textarea>
            <Button handleClick={() => commentHandler()}>Save Comment</Button>
          </div>
        ) : (
          <H3> You need to login to comment...</H3>
        )}
      </div>
    </div>
  );
};

export default Comments;
