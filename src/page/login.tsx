import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../store/user/action';
import { UserType } from '../data/users';
import MainBody from '../commonComponents/mainBody/mainBody';
import Form from '../commonComponents/form/form';
import Label from '../commonComponents/label/label';
import Input from '../commonComponents/Input/input';
import Button from '../commonComponents/button/button';
import { H1 } from '../components/typography/typography';

const LoginPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>, name: string, pw: string) => {
    const localUsers: UserType[] = JSON.parse(localStorage.usersBlog || '[]');
    if (localUsers.length === 0) {
      alert('wrong username or password');
      return;
    }
    e.preventDefault();
    const loggedUser = localUsers.find((user) => user.username === name && user.password === pw);
    if (loggedUser) {
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
                      <Input
                        placeholder="Enter Password"
                        value={passwordValue}
                        onChangeHandler={(value) => setPasswordValue(value)}
                        id="password"
                        required
                        type="password"
                        propsClass='margin-bottom--32'
                      />

                      <Button type="submit" size='large' color='success'>
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
