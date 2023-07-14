import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from 'redux/auth/useAuth';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/contacts');
    } else {
      alert('Please login or register');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Phone Book. Final App. Creating...
      <br/>
      <br/>
      <Button variant="contained" onClick={handleButtonClick}>
        Get started
      </Button>
    </div>
  );
};

export default Home;
