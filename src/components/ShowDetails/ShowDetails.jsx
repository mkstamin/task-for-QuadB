import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';
import ShowDetailsContainer from './ShowDetails.styles';

const ShowDetails = () => {
    const { show } = useContext(AppContext);
    const { name, summary, type, genres, weight } = show;

    const showSummary = summary.replace(/<[^>]*>/gi, '');

    return (
        <ShowDetailsContainer>
            <h2>Name: {name}</h2>
            <h4>Type: {type}</h4>
            <h5>Length: {weight} min</h5>
            <p>
                Genres:{' '}
                {genres.map((genre, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={index}>{genre}, </span>
                ))}
            </p>
            <p>{showSummary}</p>
            <br />
            <Link to="/">
                <button type="button">Back to Home</button>
            </Link>
        </ShowDetailsContainer>
    );
};

export default ShowDetails;
