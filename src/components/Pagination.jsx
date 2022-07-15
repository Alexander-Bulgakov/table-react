import React, {useState} from 'react';
import './Pagination.css';

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <div>
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <li 
              className="page-item" 
              key={number}
              onClick={() => paginate(number)}
              >
              <a 
                href="#" 
                className="page-link"
                >
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )  
}

export default Pagination;