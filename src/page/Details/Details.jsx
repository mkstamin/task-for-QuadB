import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoverImg from '../../components/CoverImg/CoverImg';
import Loding from '../../components/Loding/Loding';
import { AppContext } from '../../context/context';
import ShowContainer from './Details.styles';

const Details = () => {
    const { singleShowLoding, fatcSinglehShow } = useContext(AppContext);
    const { slug } = useParams();

    useEffect(() => {
        fatcSinglehShow(slug);
    }, [fatcSinglehShow, slug]);

    if (singleShowLoding) return <Loding />;

    return (
        <ShowContainer>
            <CoverImg />
        </ShowContainer>
    );
};

export default Details;
