import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      <Link to="/contacts">...</Link>
    } else {
      alert('Спочатку потрібно увійти в систему'); // Показати сповіщення про вхід в систему
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
