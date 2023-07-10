import Button from '@mui/material/Button';
const Home = () => {
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
        <Button variant="contained">Get started</Button>
        </div>
    );
    }

export default Home;
