import React, { FC } from 'react';
import { PostType } from '../../store/blog/types';
import { UserType } from '../../store/user/types';
import { Button, Image } from '../../commonComponents';
import { H3, P1, P2 } from '../typography/typography';
import { formatTime, highlightsText } from '../../helperFunctions';
import style from './postCard.module.scss';

type Props = {
  user: UserType;
  post: PostType;
  chosenCategory: string;
  searchValue: string;
  deletePostHandler: () => void;
  handleReadMore: () => void;
};
const PostCard: FC<Props> = ({
  post,
  chosenCategory,
  user,
  searchValue,
  deletePostHandler,
  handleReadMore,
}) => {
  const { title, body, image, category, author, updated, comments } = post;

  return (
    <div className={style.postCard}>
      <div className="row end-xs">
        <div className="col-xs-12">
          {user.status === 'admin' && (
            <Button handleClick={deletePostHandler} color="warning" size="small">
              Delete Post
            </Button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {!searchValue ? (
            <H3>{title}</H3>
          ) : (
            <h3 className="heading3" dangerouslySetInnerHTML={highlightsText(title, searchValue)} />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-3">
          <Image src={image} alt={title} />
        </div>
        <div className="col-xs-9">
          <P1 propsClass="margin-bottom--16">
            {body.substring(0, 130)}
            {'... '}
            <Button type="button" handleClick={handleReadMore}>
              Read more...
            </Button>
          </P1>

          <P2>
            category:{' '}
            {category.map((cat) => (
              <em key={cat} className={`${chosenCategory === cat && 'success'}`}>
                #{cat}{' '}
              </em>
            ))}
          </P2>
          <P2>
            Author : <em>{author}</em>
            {',  '}
            Updated :{' '}
            <em>
              {formatTime(updated)}
              {',  '}
            </em>
            Comments :{' '}
            <em>
              {comments.length}
              {'  '}
            </em>
          </P2>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
