import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";

const Header = () => {
    return (
        <header style= {{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            borderBottom: '1px solid black',           
        }}>
        <Navigation />
        <UserMenu />
        </header>
    );
    }

    export default Header;