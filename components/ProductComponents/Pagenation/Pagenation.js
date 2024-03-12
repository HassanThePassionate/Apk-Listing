"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagenation.module.css";
const Pagenation = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  return (
    <div className={style.pagination}>
      <ReactPaginate
        pageCount={10} // Set the total number of pages
        pageRangeDisplayed={3} // Set the number of page links to display
        marginPagesDisplayed={1} // Set the number of pages to display on the edges
        onPageChange={handlePageClick} // Handle page change event
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousLabel={"Previous"}
        nextLabel={"Next"}
      />
    </div>
  );
};

export default Pagenation;
