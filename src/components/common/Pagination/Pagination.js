import React, { useState } from 'react';
import styles from './Pagination.module.css';

const Paginator = ({portionSize = 10,...props}) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [portionNumber, setPortionNumber] = useState(1);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const firstPosition = (portionNumber - 1) * portionSize + 1;
    const lastPosition = portionNumber * portionSize;
    return (
        <div>
            {portionNumber > 1 && 
                <button 
                    onClick={() => setPortionNumber(p => p - 1)}
                >prev</button>}
            {pages
                .filter(p => p >= firstPosition && p <= lastPosition)
                .map((p, index) => <span
                    key={index}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}
                    className={props.currentPage === p ? styles.selectedPage : styles.commonPaginItems}>
                    {p}
                </span>)
            }
            {portionCount > portionNumber && 
                <button
                    onClick={() => setPortionNumber(p => p + 1)}
                >next</button>
            }
        </div>
    )
}

export default Paginator;
