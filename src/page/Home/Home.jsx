import React, { useContext } from 'react';
import HomeBody from '../../components/HomeBody/HomeBody';
import Loding from '../../components/Loding/Loding';
import Nav from '../../components/Nav/Nav';
import { AppContext } from '../../context/context';
import HomeContainer from './Home.styles';

const Home = () => {
    const { loding, changeThem } = useContext(AppContext);

    if (loding) return <Loding />;

    return (
        <HomeContainer changeThem={changeThem}>
            <Nav />
            <div className="shows">
                <h1 className="heading">All Shows</h1>
            </div>
            <HomeBody />
        </HomeContainer>
    );
};

export default Home;
