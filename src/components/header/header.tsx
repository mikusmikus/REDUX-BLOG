import React, { FC } from 'react';
import capitalize from 'lodash/capitalize';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserSecret, faDog, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../store/user/types';
import { LogOutUser } from '../../store/user/action';
import type { RootState } from '../../store';
import { P2 } from '../typography/typography';
import style from './header.module.scss';

export const Header: FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState): UserType => state.user);

  return (
    <header className="fixed">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 col-xs-12">
            <div className={style.header}>
              <div className="row center-xs">
                <div className=" col-xs-2">
                  <FontAwesomeIcon icon={faDog} size="6x" />
                </div>
                <div className=" col-xs-8">
                  <div className={style.blog}>
                    <NavLink className={style.navLink} exact activeClassName={style.active} to="/">
                      Blog
                    </NavLink>
                    <NavLink
                      className={style.navLink}
                      exact
                      activeClassName={style.active}
                      to="/about"
                    >
                      About
                    </NavLink>
                  </div>
                </div>
                <div className=" col-xs-2">
                  <div className={style.LinkWraper}>
                    {!user.username ? (
                      <>
                        <NavLink
                          className={style.navLink}
                          exact
                          activeClassName={style.active}
                          to="/login"
                        >
                          login
                        </NavLink>
                        <NavLink
                          className={style.navLink}
                          exact
                          activeClassName={style.active}
                          to="/register"
                        >
                          register
                        </NavLink>
                        <P2 propsClass="padding--0">
                          <FontAwesomeIcon icon={faUserSecret} /> Guest
                        </P2>
                      </>
                    ) : (
                      <>
                        <NavLink
                          className={style.navLink}
                          exact
                          activeClassName={style.active}
                          to="/login"
                          onClick={() => {
                            dispatch(LogOutUser());
                            localStorage.usersBlogUser = JSON.stringify({});
                          }}
                        >
                          logout
                        </NavLink>
                        <P2 propsClass="padding--0">
                          <FontAwesomeIcon icon={user.status === 'user' ? faUser : faUserCog} />{' '}
                          {capitalize(user.username).substring(0, 15)}{' '}
                        </P2>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
