import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import Pagination from './Pagination';

const ImageFeching = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=${productPerPage}`);
            setData(res.data);
            setTotalPages(Math.ceil(1000 / productPerPage));
        } catch (error) {
            console.error("Failed to fetch data:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage, productPerPage]);

    return (
        <div className='min-h-screen w-full bg-gray-800 text-white'>
            <nav className='w-[80%] mx-auto bg-gray-700 flex items-center justify-between p-5'>
                <h1 className='text-2xl font-bold'>Pagination Concept</h1>
                <div className='space-x-2'>
                    <input
                        type="number"
                        min="1"
                        value={currentPage}
                        onChange={(e) => setCurrentPage(Number(e.target.value))}
                        placeholder='Enter Page Number'
                        className='px-4 py-2 bg-gray-900 placeholder:text-gray-300 rounded-md outline-none'
                    />
                    <input
                        type="number"
                        min="1"
                        value={productPerPage}
                        onChange={(e) => setProductPerPage(Number(e.target.value))}
                        placeholder='Enter Product Quantity'
                        className='px-4 py-2 bg-gray-900 placeholder:text-gray-300 rounded-md outline-none'
                    />
                </div>
            </nav>

            <main className='flex items-center justify-center flex-wrap px-14 py-10'>
                {loading ? (
                    <p className='text-xl'>Loading images...</p>
                ) : (
                    data.map((item) => (
                        <ImageCard key={item.id} data={item} />
                    ))
                )}
            </main>

            <footer>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
            </footer>
        </div>
    );
};

export default ImageFeching;
