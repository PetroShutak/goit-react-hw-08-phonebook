import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        {error && (
          <Box sx={{ marginBottom: '1rem', color: 'red' }}>{error}</Box>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="on"
          sx={{ width: '100%', maxWidth: '400px' }}
        >
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

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
