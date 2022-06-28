import React from 'react';

const Film = ({ name, children }) => {
    return (
        <>
            <h4>{name}</h4>
            <button>{children}</button>
        </>
    )
}

export default Film;