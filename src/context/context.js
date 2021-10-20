import React, { useCallback, useEffect, useState } from 'react';
import { ALL_SHOWS, SINGLE_SHOW } from '../API-config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [shows, setShows] = useState([]);
    const [show, setShow] = useState({});
    const [loding, setLoding] = useState(true);
    const [singleShowLoding, setSingleShowLoding] = useState(true);

    const fatchShows = useCallback(async () => {
        try {
            const response = await fetch(ALL_SHOWS);
            const data = await response.json();
            setLoding(false);
            setShows(data);
        } catch (err) {
            console.log('Error, To connection!');
        }
    }, []);

    const fatcSinglehShow = useCallback(async (slug) => {
        const response = await fetch(`${SINGLE_SHOW}${slug}`);
        try {
            const data = await response.json();
            const showData = await data;
            setShow(showData);
            setSingleShowLoding(false);
        } catch (err) {
            console.log('We Can Not Find Your Request!');
        }
    }, []);

    useEffect(() => {
        fatchShows();
    }, [fatchShows]);

    return (
        <AppContext.Provider
            value={{
                shows,
                loding,
                singleShowLoding,
                show,
                fatcSinglehShow,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
// eslint-disable-next-line prettier/prettier
