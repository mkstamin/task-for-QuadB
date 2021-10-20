import styled from 'styled-components';

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: calc(100vh - 10rem);

    h1 {
        font-size: 10rem;
        color: #954812;
    }

    h3 {
        text-transform: none;
        margin-bottom: 2rem;
    }

    .btn {
        text-transform: uppercase;
        text-decoration: none;
        background: #954812de;
        color: #dae2ec;
        padding: 0.375rem 0.75rem;
        letter-spacing: 0.1rem;
        display: inline-block;
        font-weight: 400;
        transition: all 0.3s linear;
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        border-color: transparent;
    }
    .btn:hover {
        color: #ffffff;
        background: #954812;
    }
`;

export default Wrapper;
