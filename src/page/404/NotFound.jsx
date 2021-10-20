import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './NotFound.style';

const ErrorPage = () => (
    <Wrapper>
        <section>
            <h1>404</h1>
            <h3>Sorry, your are searching a wrong page!</h3>
            <Link to="/" className="btn">
                back to home
            </Link>
        </section>
    </Wrapper>
);

export default ErrorPage;
