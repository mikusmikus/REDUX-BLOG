import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserSecret, faDog, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { capitalize } from 'lodash';
import type { RootState } from '../../store/store';
import { LogOutUser } from '../../store/user/action';
import type { UserType } from '../../data/users';
import style from './header.module.scss';
import { H5, P2 } from '../typography/typography';

export const Header: FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState): UserType => state.user);

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className={style.header}>
              <div className="row center-xs">
                <div className="col-md-2 col-xs-4">
                  <FontAwesomeIcon icon={faDog} size="6x" />
                </div>
                <div className="col-md-3 col-xs-4">
                  <div className={style.blog}>
                    <NavLink className={style.navLink} exact activeClassName={style.active} to="/">
                      blog
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-5 col-xs-12 last-xs">
                  <div className={style.user}>
                    {user.username ? (
                      <H5>
                        Hello, {capitalize(user.username)}!{' '}
                        {user.status === 'user' ? (
                          <FontAwesomeIcon icon={faUser} />
                        ) : (
                          <FontAwesomeIcon icon={faUserCog} />
                        )}{' '}
                      </H5>
                    ) : (
                      <>
                        <H5>
                          Hello, Guest! <FontAwesomeIcon icon={faUserSecret} />
                        </H5>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-md-2 col-xs-4 last-md">
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
                          {user.status}{' '}
                          {user.status === 'user' ? (
                            <FontAwesomeIcon icon={faUser} />
                          ) : (
                            <FontAwesomeIcon icon={faUserCog} />
                          )}
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
