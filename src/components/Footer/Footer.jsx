import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: '#f5f5f5',
  padding: '20px',
  position: 'sticky',
  bottom: 0,
  width: '100%',
  top: 'auto',
});

const FooterText = styled(Typography)({
  fontSize: '14px',
  textAlign: 'center',
});

const FooterLink = styled(Link)({
  textDecoration: 'none',
  color: '#1976d2',
  fontWeight: 'bold',
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 Phonebook. All rights reserved. Created by{' '}
        <FooterLink
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/petroshutak/"
        >
          Petro Shutak
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
