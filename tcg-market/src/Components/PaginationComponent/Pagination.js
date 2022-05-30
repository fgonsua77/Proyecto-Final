import React from 'react';

const Pagination = ({ elementsPerPage, totalelements, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalelements / elementsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav class="d-flex justify-content-center p-3">
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