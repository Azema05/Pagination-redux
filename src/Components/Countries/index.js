import React from 'react';
import Spinner from '../Spinner';

const Countries = ({ countries, loading }) => {
    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <ul style={{ padding: 0, width: '90%', margin: 'auto' }}>
                {
                    countries.map((country, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '2px solid gray', marginBottom: '20px', padding: '5px 9px 5px 9px' }}>
                            <h2 style={{ color: 'white' }}>{country.name}</h2>
                            <img src={country.flag} width='100px' alt="" />
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Countries;