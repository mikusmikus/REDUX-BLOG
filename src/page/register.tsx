import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import Button from '../commonComponents/button/button';
import Form from '../commonComponents/form/form';
import Input from '../commonComponents/Input/input';
import Label from '../commonComponents/label/label';
import MainBody from '../commonComponents/mainBody/mainBody';
import { H1 } from '../components/typography/typography';
import { UserType } from '../data/users';
import { addUser } from '../store/user/action';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localUsers: UserType[] = JSON.parse(localStorage.usersBlog || '[]');
    if (localUsers.some((user) => user.username === username)) {
      alert('username already exists, try other!');
      return;
    }
    if (password !== password2) {
      alert('passwords do not match');
      return;
    }
    const newUser: UserType = {
      id: uuidv4(),
      username,
      email,
      password,
    };
    localUsers.push(newUser);
    localStorage.usersBlog = JSON.stringify(localUsers);
    dispatch(addUser(newUser));
    history.push('./');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <MainBody>
            <H1>This is Register Page</H1>
            <div className="row center-xs">
              <div className="col-xs-8">
                <Form handleSubmit={handleRegister}>
                  <FontAwesomeIcon icon={faRegistered} size="3x" spin />
                  <div className="row center-xs">
                    <div className="col-sm-8 col-xs-12">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        placeholder="Enter email"
                        type="email"
                        value={email}
                        onChangeHandler={(value) => setEmail(value)}
                        id="email"
                        required
                        focus
                      />
                      <Label htmlFor="username">Username</Label>
                      <Input
                        placeholder="Enter username"
                        value={username}
                        onChangeHandler={(value) => setUsername(value)}
                        id="username"
                        required
                      />
                      <Label htmlFor="password">Password</Label>
                      <Input
                        placeholder="Enter password"
                        type="password"
                        value={password}
                        onChangeHandler={(value) => setPassword(value)}
                        id="password"
                        required
                      />
                      <Label propsClass="commentLabel" htmlFor="password2">
                        Password
                      </Label>
                      <Input
                        placeholder="Enter password again"
                        type="password"
                        value={password2}
                        onChangeHandler={(value) => setPassword2(value)}
                        id="password2"
                        required
                      />

                      <Button type="submit" propsClass="apricotBig">
                        Register
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

export default RegisterPage;
