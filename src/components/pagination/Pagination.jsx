import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import "./pagination.css"

function Pagination(props) {
    const { data } = props;

    const [currentItems, setCurrentItems] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className="paginated-articles">
                {currentItems.map((el, index) => {
                    return (
                        <div key={index}>
                            {/* Content goes here */}
                        </div>
                    )
                })}
            </div>
            {/* <Items currentItems={currentItems} /> */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeClassName="active"
            />
        </div>
    )
}

export default Pagination;
