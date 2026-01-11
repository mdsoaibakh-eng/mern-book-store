import React,{useEffect, useState}  from "react";
import axios from "axios";
import Spinner from "../components/Sppiner.jsx";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/books")
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching books:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-10">
              <h1 className="text-4xl font-bold mb-6">Welcome to the Bookstore</h1>
              <p className="text-lg mb-4">Manage your book collection with ease. You can create, edit, and delete books from your inventory.</p>
              <ul className="list-disc list-inside space-y-2">
                    <li className="text-blue-600">Create new books to add to your collection.</li>
                    <li className="text-blue-600">Edit existing books in your collection.</li>
                    <li className="text-blue-600">Delete books that are no longer needed.</li>
              </ul>
        </div>
    );
}           
export default Home;



