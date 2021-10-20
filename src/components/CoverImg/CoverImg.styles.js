import Styled from 'styled-components';

const CoverImgContainer = Styled.div`
    position: relative;

    & img {
       width: 100%;
       height: 100vh;
    }

    @media only screen and (max-width: 667px) {
       & img {
          height: 100vh;
       } 
    }    
`;

export default CoverImgContainer;
