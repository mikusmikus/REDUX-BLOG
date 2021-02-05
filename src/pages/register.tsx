import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { UserType } from '../store/user/types';
import { addUser } from '../store/user/action';
import { Button, Form, Input, Label, MainBody } from '../commonComponents';
import { H1 } from '../components/typography/typography';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const validateEmail = (text: string) => {
    const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    return emailRegex.test(text);
  };
  const validateUsername = (text: string) => {
    const usernameRegex = RegExp(/\b\w{5,}/);
    return usernameRegex.test(text);
  };

  const validatePassword = (text: string) => {
    const passwordRegex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    return passwordRegex.test(text);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localUsers: UserType[] = JSON.parse(localStorage.usersBlog || '[]');
    if (localUsers.some((user) => user.username === username)) {
      alert('username already exists, try other!');
      return;
    }

    if (!validateUsername(username)) {
      alert('at least 5 characters, no spaces');
      return;
    }
    if (!validateEmail(email)) {
      alert('wrong email. must be something like this: abc@gmail.com');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password must be minimum eight characters, at least one letter and one number:');
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
        <div className="col-xs-12">
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
                        focus
                        required
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
                      <Label htmlFor="password2">Password</Label>
                      <div className="margin-bottom--32">
                        <Input
                          placeholder="Enter password again"
                          type="password"
                          value={password2}
                          onChangeHandler={(value) => setPassword2(value)}
                          id="password2"
                          required
                        />
                      </div>

                      <Button type="submit" size="large" color="success">
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
