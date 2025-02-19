import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";

const Sidebar = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        contact: "",
    });
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem("users");
        return storedUsers ? JSON.parse(storedUsers) : [];
    });
    
    const [editingId, setEditingId] = useState(null);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Array.isArray(users)) {
            setUsers([]); 
            return;
        }
    

        if (editingId !== null) {
            const updatedUsers = users.map((user, i) => i === editingId ? { ...user, ...inputData } : user);
            setUsers(updatedUsers);
            setEditingId(null);
        } else {
            setUsers([...users, { ...inputData, isLiked: false }]);
        }

        setInputData({
            name: "",
            email: "",
            contact: "",
        });
    };


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-800 text-white p-6 md:min-h-screen">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={handleOnChange}
                        value={inputData.name}
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="px-4 py-2 bg-gray-950 placeholder-gray-300 rounded"
                        required
                    />
                    <input
                        onChange={handleOnChange}
                        value={inputData.email}
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="px-4 py-2 bg-gray-950 placeholder-gray-300 rounded"
                        required
                    />
                    <input
                        onChange={handleOnChange}
                        value={inputData.contact}
                        type="text"
                        name="contact"
                        placeholder="Enter Your Contact"
                        className="px-4 py-2 bg-gray-950 placeholder-gray-300 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gray-500 font-bold hover:bg-gray-600 rounded mt-3 outline-none"
                    >
                        {editingId !== null ? "Update" : "Submit"}
                    </button>
                </form>
            </div>

            {/* Card Section */}
            <div className="w-full md:w-3/4 bg-gray-700">
                <CardSection users={users} setUsers={setUsers} setInputData={setInputData} setEditingId={setEditingId} />
            </div>
        </div>
    );
};

export default Sidebar;
