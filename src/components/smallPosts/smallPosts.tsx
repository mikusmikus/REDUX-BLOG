import React, { FC, useState, useEffect } from 'react';
import sampleSize  from 'lodash/sampleSize';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from '../../commonComponents/image/image';
import Button from '../../commonComponents/button/button';
import { PostType } from '../../store/blog/types';
import { H2, H3, H5, P2 } from '../typography/typography';
import { RootState } from '../../store/store';
import style from './smallPosts.module.scss';

type Props = {
  post: PostType;
  id: string;
};

const SmallPosts: FC<Props> = ({ post, id }) => {
  const [threePosts, setThreePosts] = useState<PostType[]>([]);
  const history = useHistory();

  const sameCategoryPosts = useSelector((state: RootState) =>
    state.blogPosts.filter((eachPost) =>
      eachPost.category.some(
        (category: string) => category === post?.category[0] || category === post?.category[1]
      )
    )
  );

  useEffect(() => {
    setThreePosts(sampleSize(sameCategoryPosts, 3));
  }, [id]);

  return (
    <div className={style.smallPosts}>
      <H2>Similar category posts</H2>
      <div className="row center-xs">
        {threePosts.length === 1 ? (
          <H3>No similar posts...</H3>
        ) : (
          <>
            {threePosts.map(({ postId, image, title, author, category }) => (
              <div className="col-xs-4" key={postId}>
                <div className={style.smallPostCard} key={postId}>
                  <Image src={image} alt={title} />
                  <H5>{title.substring(0, 50)}</H5>
                  <P2>
                    category:{' '}
                    {category.map((cat: string) => (
                      <em key={cat}>{cat} </em>
                    ))}
                  </P2>
                  <P2>author:<em> {author}</em></P2>
                  <Button type="button" handleClick={() => history.push(`/blog/${postId}`)}>
                    Read more...
                  </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SmallPosts;
