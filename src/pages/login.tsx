import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserType } from '../store/user/types';
import { addUser } from '../store/user/action';
import { H1 } from '../components/typography/typography';
import { Button, Form, Input, Label, MainBody } from '../commonComponents';

const LoginPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>, name: string, pw: string) => {
    e.preventDefault();

    const localUsers: UserType[] = JSON.parse(localStorage.usersBlog || '[]');
    if (localUsers.length === 0) {
      alert('wrong username or password');
      return;
    }
    const loggedUser = localUsers.find((user) => user.username === name && user.password === pw);
    if (loggedUser) {
      localStorage.usersBlogUser = JSON.stringify(loggedUser);
      dispatch(addUser(loggedUser));
      setNameValue('');
      setPasswordValue('');
      history.push('./');
    } else {
      alert('wrong username or password');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <MainBody>
            <H1>This is LOGIN Page</H1>
            <div className="row center-xs">
              <div className="col-xs-8">
                <Form handleSubmit={(e) => handleLogin(e, nameValue, passwordValue)}>
                  <FontAwesomeIcon icon={faUserCircle} size="3x" spin />
                  <div className="row center-xs">
                    <div className="col-sm-8 col-xs-12">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        placeholder="Enter username"
                        value={nameValue}
                        onChangeHandler={(value) => setNameValue(value)}
                        id="username"
                        required
                        focus
                      />

                      <Label htmlFor="password">password</Label>
                      <div className="margin-bottom--32">
                        <Input
                          placeholder="Enter Password"
                          value={passwordValue}
                          onChangeHandler={(value) => setPasswordValue(value)}
                          id="password"
                          required
                          type="password"
                        />
                      </div>

                      <Button type="submit" size="large" color="success">
                        Login
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </MainBody>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
