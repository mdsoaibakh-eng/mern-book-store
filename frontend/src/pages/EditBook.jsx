import { useState } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Sppiner.jsx";


const EditBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const  [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handleGenreChange = (e) => setGenre(e.target.value);
      const data = {
         title,
         author,
         publishedDate:
         genre };

setLoading(true);
axios.post("http://localhost:5000/books", data)
    .then(() => {
        setLoading(false);  
        navigate("/");
    })
    .catch((error) => {
        console.error("Error creating book:", error);
        setLoading(false);
    }
);
         

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/books", { title, author, genre });
            navigate("/");
        } catch (error) {
            console.error("Error creating book:", error);
        }
    };

  return (
    <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-5">Edit Book</h2>
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>  
            <div>
                <label className="block text-sm font-medium text-gray-700">Genre</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />     
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Create Book</button>
        </form>
    </div>
  );
}
export default EditBook;
