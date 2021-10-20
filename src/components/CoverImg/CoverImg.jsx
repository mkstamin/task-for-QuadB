import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import nobanar from '../../img/nobanar.jpg';
import ShowDetails from '../ShowDetails/ShowDetails';
import CoverImgContainer from './CoverImg.styles';

const CoverImg = () => {
    const { show } = useContext(AppContext);

    const { image, name } = show;

    return (
        <CoverImgContainer>
            <img src={image.original ? image.original : nobanar} alt={name} />

            <ShowDetails />
        </CoverImgContainer>
    );
};

export default CoverImg;
