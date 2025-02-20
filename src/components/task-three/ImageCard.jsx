import React from 'react';

const ImageCard = ({ data }) => {

    return (
        <div className="rounded overflow-hidden shadow-lg m-4 bg-gray-900 text-white">
            <img className="h-46 w-72" src={data.download_url} alt={data.author} />
            <div className="p-5">
                <div className="font-bold text-xl mb-2">{data.author}</div>
                <p className="text-gray-300 text-base">ID: {data.id}</p>
                <p className="text-gray-300 text-base">Dimensions: {data.width} x {data.height}</p>
                <a href={data.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    View on Unsplash
                </a>
            </div>
        </div>
    );
};

export default ImageCard;