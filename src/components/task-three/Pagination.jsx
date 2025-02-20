import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {

    const handleNext = () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    };

    // Function to display limited page numbers
    const renderPageNumbers = () => {
        const pages = [];
        const maxPageButtons = 5;

        // Always show first page
        if (currentPage > 2) pages.push(1);

        // Show '...' if there's a gap after first page
        if (currentPage > 3) pages.push('...');

        // Show current, previous, and next pages
        for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
            pages.push(i);
        }

        // Show '...' if there's a gap before last page
        if (currentPage < totalPages - 2) pages.push('...');

        // Always show last page
        if (currentPage < totalPages - 1) pages.push(totalPages);

        return pages.map((page, index) => (
            <button
                key={index}
                onClick={() => typeof page === 'number' && handlePageChange(page)}
                className={`px-4 py-2 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"} text-gray-700 hover:bg-blue-300`}
                disabled={page === '...'}
            >
                {page}
            </button>
        ));
    };

    return (
        <div className="flex flex-wrap justify-center items-center space-x-2 py-4">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded font-bold ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"} text-gray-700`}
            >
                {"<"}
            </button>

            {renderPageNumbers()}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded font-bold ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"} text-gray-700`}
            >
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
