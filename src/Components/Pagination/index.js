import React from 'react';
import './Pagination.css'

const Pagination = ({ countriesPerpage, totalCountries, setCurrentPage, currentPage }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerpage); i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers);
    return (
        <div className='pagination'>
            {
                pageNumbers.map(number => (
                    <button key={number} onClick={() => setCurrentPage(number)} className={number == currentPage ? 'active' : ''}>
                        {number}
                    </button>
                ))
            }
        </div>
    );
};

export default Pagination;