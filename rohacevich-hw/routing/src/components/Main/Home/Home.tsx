import React, { FC, useEffect } from 'react';

interface Props {
    updateOne: any,
    updateTwo: any
}

const Home: FC<Props> = ({ updateOne, updateTwo }) => {
    useEffect(() => {
        updateOne();
    }, [updateOne]);

    useEffect(() => {
        updateTwo();
    }, [updateTwo]);
    return <h2>Home</h2>;
};

export default Home;
