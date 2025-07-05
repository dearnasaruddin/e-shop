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
    // for (let i = startPage; i <= endPage; i++) {
    //     pageNumbers.push(i)
    // }



    if (currentPage > 3 && currentPage < totalPages - 3) {

        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pageNumbers.push(i)
        }

        if (currentPage > 3) {
            pageNumbers.unshift('...')
        }
        if (currentPage < totalPages - 3) {
            pageNumbers.push('...')
        }
    } else if (currentPage > 3) {
        for (let i = currentPage - 2; i <endPage; i++) {
            pageNumbers.push(i)
        }
        pageNumbers.unshift('...')
    } else if (currentPage < totalPages - 3) {
        if (currentPage == 1) {
            for (let i = 1 + 1; i <= currentPage + 3; i++) {
                pageNumbers.push(i)
            }
        } else if (currentPage == 2) {
            for (let i = 1 + 1; i <= currentPage + 2; i++) {
                pageNumbers.push(i)
            }
        } else {
            for (let i = 1 + 1; i <= currentPage + 1; i++) {
                pageNumbers.push(i)
            }

        }
        pageNumbers.push('...')
    }



    return (
        <div className='flex justify-center items-center gap-x-9'>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className='size-12 flex justify-center items-center rounded-sm cursor-pointer hover:bg-gray-200 mx-2 disabled:hover:bg-transparent disabled:opacity-20 disabled:cursor-not-allowed'><ArrowDownIcon width='32' height='32' rotate='90deg' /></button>
            <div className='flex justify-center items-center gap-x-7.5'>
                <button onClick={() => onPageChange(1)} className={`size-12 flex justify-center items-center rounded-sm font-poppins font-semibold text-xl leading-7.5 text-secondary cursor-pointer ${currentPage == 1 ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}>1</button>
                {pageNumbers.map((pageNumber, index) => (
                    <button key={index} onClick={() => onPageChange(pageNumber)} className={`size-12 flex justify-center items-center rounded-sm font-poppins font-semibold text-xl leading-7.5 text-secondary cursor-pointer ${currentPage == pageNumber ? 'bg-primary text-white' : 'hover:bg-gray-200'}`} >{pageNumber}</button>
                ))}
                <button onClick={() => onPageChange(totalPages)} className={`size-12 flex justify-center items-center rounded-sm font-poppins font-semibold text-xl leading-7.5 text-secondary cursor-pointer ${currentPage == totalPages ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}>{totalPages}</button>
            </div>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className='size-12 flex justify-center items-center rounded-sm cursor-pointer hover:bg-gray-200 mx-2 disabled:hover:bg-transparent disabled:opacity-20 disabled:cursor-not-allowed'><ArrowDownIcon width='32' height='32' rotate='270deg' /></button>
        </div>
    )
}

export default Pagination