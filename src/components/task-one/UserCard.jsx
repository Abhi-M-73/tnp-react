import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const UserCard = ({ users, setUsers, setInputData, setEditingId }) => {
    const handleEdit = (id) => {
        const editableUser = users.find((_, i) => i === id);
        setInputData(editableUser);
        setEditingId(id);
    };

    const handleDelete = (id) => {
        const updatedUsers = users.filter((_, i) => i !== id);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const handleLike = (id) => {
        const updatedUsers = users.map((user, i) =>
            i === id ? { ...user, isLiked: !user.isLiked } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
        <div className="flex flex-wrap gap-5 p-10 ">
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-60 bg-gray-900 text-white p-5 rounded-lg space-y-2 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-lg font-bold">{user.name}</h1>
                            {user.isLiked ? (
                                <IoMdHeart
                                    onClick={() => handleLike(index)}
                                    className="text-xl text-red-600 cursor-pointer"
                                />
                            ) : (
                                <IoIosHeartEmpty
                                    onClick={() => handleLike(index)}
                                    className="text-xl cursor-pointer"
                                />
                            )}
                        </div>
                        <h2 className="text-gray-300">
                            <strong className="text-white">Email:</strong> {user.email}
                        </h2>
                        <h2 className="text-gray-300">
                            <strong className="text-white">Contact:</strong> {user.contact}
                        </h2>
                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => handleEdit(index)}
                                className="px-6 py-1 bg-yellow-600 hover:bg-yellow-700 font-bold rounded mt-3 outline-none"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(index)}
                                className="px-4 py-1 bg-red-600 hover:bg-red-700 font-bold rounded mt-3 outline-none"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-lg text-white font-medium text-center">
                    No user available for now...
                </p>
            )}
        </div>
    );
};

export default UserCard;
