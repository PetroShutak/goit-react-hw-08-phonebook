import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валідація форми
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await dispatch(signUp({ name, email, password }));

      // Очищення полів форми після успішної реєстрації
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Register</h1>

      {error && (
        <Box sx={{ marginBottom: '1rem', color: 'red' }}>{error}</Box>
      )}

      <form onSubmit={handleSubmit} autoComplete="on">
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          placeholder="Enter name"
          required
          fullWidth
          margin="normal"
        />

        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
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
          onChange={handleChange}
          label="Password"
          placeholder="Enter password"
          required
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
