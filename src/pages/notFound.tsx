import React from 'react';
import { Image, MainBody } from '../commonComponents';
import { H1 } from '../components/typography/typography';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-xs-12">
          <MainBody>
            <H1>This is Not Found Page</H1>
            <Image src="https://previews.123rf.com/images/abirvalg/abirvalg1301/abirvalg130100004/17628381-404-error-illustration-yellow-quot-wet-floor-quot-style-sign.jpg" />
          </MainBody>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
