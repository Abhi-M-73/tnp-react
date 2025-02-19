import React from 'react'

const FilterCard = ({ data }) => {
    // console.log(data)
    
    return (
        <div className='text-white '>
            <div className='w-80 h-52 bg-gray-900 p-6 rounded-md'>
                <h1 className='font-bold text-lg'>{data.name}</h1>
                <h1 className='text-gray-300 text-sm'>{data.description}</h1>
                <div className='flex mt-4 items-center justify-between'>
                    <span className='py-1 px-4 bg-gray-700 rounded-full font-semibold'>{data.category}</span>
                    <span className='py-1 px-4 bg-gray-700 rounded-full text-orange-600 font-bold'>${data.price}</span>
                </div>
            </div>

        </div>
    )
}

export default FilterCard
