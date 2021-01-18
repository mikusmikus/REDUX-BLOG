import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MainBody } from '../commonComponents';
import { H1, H2, H5 } from '../components/typography/typography';
import { CONTACTS } from '../data/contacts';

const icons: JSX.Element[] = [
  <FaGithub key="FaGithub" />,
  <FaLinkedin key="FaLinkedin" />,
  <FaFacebookSquare key="FaFacebookSquare" />,
];

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-xs-12">
          <MainBody>
            <H1>This is About Page</H1>
            <H5> in progress...</H5>
            {CONTACTS.map((contact, i) => (
              <a key={contact.name} href={contact.link}>
                <H2>
                  {icons[i]} {contact.name}
                </H2>
              </a>
            ))}
          </MainBody>
        </div>
      </div>
    </div>
  );
};

export default About;
