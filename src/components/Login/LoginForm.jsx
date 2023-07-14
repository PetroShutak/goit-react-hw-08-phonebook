import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Валідація форми
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await dispatch(logIn({ email, password }));

      // Очищення полів форми після успішного входу
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>

      {error && <Box sx={{ marginBottom: '1rem', color: 'red' }}>{error}</Box>}

      <form onSubmit={handleSubmit} autoComplete="on">
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          label="Email"
          placeholder="Enter email"
          required
          fullWidth
          margin="normal"
        />

        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          label="Password"
          placeholder="Enter password"
          required
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
