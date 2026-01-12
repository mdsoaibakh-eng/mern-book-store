import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { PiBookOpenLight } from "react-icons/pi";
import { MdMenuBook } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import {MdOutLightDElete} from "react-icons/md";

const BookSingleCard = ({ book }) => {
    return (    
        <div className="border border-gray-300 rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
            <p className="text-gray-700"><strong>Genre:</strong> {book.genre}</p>
        </div>
    );
};
export default BookSingleCard;
