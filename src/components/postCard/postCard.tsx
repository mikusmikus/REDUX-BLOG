/* eslint-disable max-len */
import React, { FC } from 'react';
import { formatTime } from '../../helpers/formatTime';
import { PostType } from '../../store/blog/types';
import { H3, P1, P2 } from '../typography/typography';
import Button from '../../commonComponents/button/button';
import style from './postCard.module.scss';
import Image from '../../commonComponents/image/image';
import { UserType } from '../../data/users';

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

  const highlightsText = () => {
    const splitted = title.split(searchValue);
    let outPutString = '';

    splitted.forEach((item) => {
      outPutString += `<span>${item}</span><span class='apricot'>${searchValue}</span>`;
    });
    const realOutput = outPutString.slice(0, outPutString.length - 30 - searchValue.length);
    return { __html: realOutput };
  };

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
            <h3 className="heading3" dangerouslySetInnerHTML={highlightsText()} />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-3">
          <Image src={image} alt={title} />
        </div>
        <div className="col-xs-9">
          <P1 propsClass="margin-bottom--16">
            {body.substring(0, 200)}
            {'... '}
            <Button type="button" handleClick={handleReadMore} propsClass="ReadMore">
              Read more...
            </Button>
          </P1>

          <P2>
            category:{' '}
            {category.map((cat) => (
              <em key={cat} className={`${chosenCategory === cat && 'apricot'}`}>
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
