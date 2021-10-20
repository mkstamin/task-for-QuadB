import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';
import noimg from '../../img/onimg.png';
import HomeBodyContent from './HomeBody.styles';

const HomeBody = () => {
    const { shows } = useContext(AppContext);

    return (
        <HomeBodyContent>
            {shows.map((singleShow) => {
                const { show } = singleShow;
                const img = show.image.medium;
                return (
                    <Link key={show.id} to={`/details/${show.name}`}>
                        <img src={img || noimg} alt={show.name} />
                        <div className="view-details">
                            <h3>show more</h3>
                        </div>
                    </Link>
                );
            })}
        </HomeBodyContent>
    );
};

export default HomeBody;
