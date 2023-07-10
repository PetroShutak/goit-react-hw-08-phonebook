import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        gap: 20,
      }}
    >
      <StyledLink to="/register">Register</StyledLink>

      <StyledLink to="/login">Login</StyledLink>
    </nav>
  );
};

export default Navigation;
