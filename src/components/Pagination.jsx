import React from 'react'
import ArrowDownIcon from '../icons/ArrowDownIcon'

const Pagination = ({ totalItems, itemPerPage, currentPage, onPageChange }) => {

    const totalPages = Math.ceil(totalItems / itemPerPage)
    const maxPagesToShow = 10
    const pagesToShowBeforeAfter = 3

    let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter)
    let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter)

    if (endPage - startPage + 1 < maxPagesToShow) {
        if (startPage > 1) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1)
        }
        endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)
    }

    const pageNumbers = []
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='flex justify-center items-center'>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className='py-1 px-0.5 rounded-sm cursor-pointer hover:bg-gray-300 bg-gray-200 mx-2'><ArrowDownIcon width='32' height='32' rotate='90deg' /></button>
            {pageNumbers.map((pageNumber, index) => (
                <button key={index} onClick={() => onPageChange(pageNumber)} className='py-1 px-3 rounded-sm bg-gray-200 hover:bg-gray-300 mx-2 font-poppins font-semibold text-xl leading-7.5 text-secondary cursor-pointer' >{pageNumber}</button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className='py-1 px-0.5 rounded-sm cursor-pointer hover:bg-gray-300 bg-gray-200 mx-2'><ArrowDownIcon width='32' height='32' rotate='270deg' /></button>
        </div>
    )
}

export default Pagination