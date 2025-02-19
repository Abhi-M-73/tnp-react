import React, { useEffect, useState } from 'react'
import FilterCard from './FilterCard'
import db from '../../../utils/db.json';

const FilterNav = () => {
    const data = db.data.items;
    const [filterData, setFilterData] = useState(data);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    const uniqueCategory = [...new Set(data.map((item) => item.category))]
    // console.log(uniqueCategory)

    const filteration = () => {
        const filteredData = data.filter((item, i) => (
            (search ? item.name.toLowerCase().includes(search.toLowerCase()) : true) &&
            (category ? item.category === category : true))
        );

        if (price === "low-to-high") {
            filteredData.sort((a, b) => a.price - b.price);
        } else if (price === "high-to-low") {
            filteredData.sort((a, b) => b.price - a.price);
        }
        setFilterData(filteredData);
    }

    useEffect(() => {
        filteration();
    }, [search, category, price])

    return (
        <div className='min-h-screen bg-gray-700'>
            <nav className='w-[80%] shadow mx-auto bg-gray-800 text-white flex items-center justify-between py-5 px-10'>
                <h1 className='text-xl font-bold'>Filter Products</h1>
                <div className='text-white flex gap-2'>
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" name='search' placeholder='Enter Product Name' className='px-4 py-2 bg-gray-900 text-white placeholder:text-gray-200 outline-none rounded-md' />
                    <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-40 p-2 bg-gray-900 text-white outline-none rounded-md'>
                        <option value="">Select Category</option>
                        {
                            uniqueCategory.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))
                        }
                    </select>
                    <select onChange={(e) => setPrice(e.target.value)} value={price} className='w-40 p-2 bg-gray-900 text-white outline-none rounded-md'>
                        <option value="">Select Price</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High to Low</option>
                    </select>
                </div>
            </nav>
            <main className='py-10 px-22 flex flex-wrap gap-5'>
                {
                    filterData.map((item) => (
                        <FilterCard key={item.id} data={item} />
                    ))
                }
            </main>
        </div>
    )
}

export default FilterNav
