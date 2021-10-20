import Styled from 'styled-components';

const ShowDetailsContainer = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    top: 50%;
    left: 50%;
    border: 2px solid chocolate;
    transform: translate(-50%, -50%);
    padding: 2% 5%;
    background-color: #000000a8;
    color: #d8d9d8;

    @media only screen and (max-width: 667px) {
        & {
            padding: 0px 5%;
            width: 90%;
            height: 100%;
            border: none;
        }
    }
`;

export default ShowDetailsContainer;
