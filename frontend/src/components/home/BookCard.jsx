import React from "react";
const BookCard = ({ book }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md">       
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
            <p className="text-gray-700"><strong>Genre:</strong> {book.genre}</p>
        </div>
    );
}   ;
export default BookCard;
