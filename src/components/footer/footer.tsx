import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { CONTACTS } from '../../data/contacts';
import { H3, H5 } from '../typography/typography';
import style from './footer.module.scss';

const icons: JSX.Element[] = [
  <FaGithub key="FaGithub" />,
  <FaLinkedin key="FaLinkedin" />,
  <FaFacebookSquare key="FaFacebookSquare" />,
];

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-xs-12">
          <div className={style.footer}>
            <div className="row middle-xs center-xs">
              <div className="col-sm-9 col-xs-8">
                <H3>Mikus</H3>
                <H5>RIGA, LATVIA @2021</H5>
              </div>
              <div className="col-sm-3 col-xs-4">
                <div className={style.linkWrapper}>
                  {CONTACTS.map((contact, i) => (
                    <a key={contact.name} className={style.link} href={contact.link}>
                      {icons[i]}
                      {contact.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
