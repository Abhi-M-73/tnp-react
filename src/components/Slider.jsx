import React, { useState } from 'react'

const Slider = () => {
    const [index, setIndex] = useState(0);

    const image = [
        "https://i.pinimg.com/474x/22/8c/00/228c001a984043fe71ae898865af1bdf.jpg",
        "https://i.pinimg.com/474x/5e/29/17/5e2917ca0381d1a31f0543edcac4951e.jpg",
        "https://i.pinimg.com/474x/e8/9d/8e/e89d8e59b5165a2e0183b3455b577050.jpg"
    ]

    return (
        <div className='w-full p-10'>
            <img src={image[index]} alt="img" className='h-52 w-52 object-cover mx-auto' />
            <div className='flex items-center justify-center gap-10'>
                <button disabled={index == 0} onClick={() => setIndex(index - 1)}>{"<"}</button>
                <button disabled={index >= image.length-1} onClick={() => setIndex(index + 1)}>{">"}</button>
            </div>
        </div>
    )
}

export default Slider
