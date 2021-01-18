import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faLink, faDog } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

import { H3, H5, P1, P2 } from '../typography/typography';
import style from './footer.module.scss';

interface Contacts {
  name: string;
  link: string;
}
const icons = [FaFacebookSquare, FaLinkedin, FaGithub];
const contacts: Contacts[] = [
  {
    name: 'GITHUB',
    link: 'https://github.com/mikusmikus',
  },
  {
    name: 'LINKEDIN',
    link: 'https://www.linkedin.com/in/mikus-meikulis/',
  },
  {
    name: 'FACEBOOK',
    link: 'https://www.facebook.com/mikus.meikulis',
  },
];

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-xs-12">
          <div className={style.footer}>
            <div className="row middle-xs center-xs">
              <div className="col-xs-8">
                <H5>MIKUS RIGA, LATVIA @2021</H5>
              </div>
              <div className="col-xs-3">
                <div className={style.linkWrapper}>
                  {contacts.map((contact, i) => (
                    <a key={contact.name} className={style.link} href={contact.link}>
                      <FaFacebookSquare />
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
