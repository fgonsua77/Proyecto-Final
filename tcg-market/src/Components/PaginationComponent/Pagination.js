import React from 'react';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav class="d-flex justify-content-center">
            <ul className='pagination' >
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <div onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;