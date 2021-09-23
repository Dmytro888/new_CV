import React from 'react';
import Container from '../Container/Container';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
  return (
    <Container>
      <Link to='section1' smooth={true} duration={200}>
        Contact
      </Link>
      <Link to='section2' smooth={true} duration={400}>
        Skills
      </Link>
      <Link to='section3' smooth={true} duration={600}>
        Portfolio
      </Link>
    </Container>
  );
};

export default NavBar;
