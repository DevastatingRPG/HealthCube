// components/BackToHome.js
import Link from 'next/link';
import styled from 'styled-components';

const StyledBackToHome = styled.div`
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 999; /* Adjust the z-index as needed */
`;

const BackToHome = () => {
  return (
    <StyledBackToHome>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </StyledBackToHome>
  );
};

export default BackToHome;
