import React from "react";  

const BookTable = ({ books }) => {
    return (
        <table className="min-w-full bg-white border border-gray-200">          
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Title</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Author</th>                
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Genre</th>
                </tr>
            </thead>    
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td className="py-2 px-4 border-b border-gray-200">{book.title}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{book.author}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{book.genre}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default BookTable;