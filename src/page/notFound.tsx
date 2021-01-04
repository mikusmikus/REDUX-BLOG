import React from 'react';
import Image from '../commonComponents/image/image';
import MainBody from '../commonComponents/mainBody/mainBody';
import { H1 } from '../components/typography/typography';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
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
