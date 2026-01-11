import React from "react";
const DeleteBook = () => {
  return (
    <div className="max-w-md mx-auto mt-10">    
        <h2 className="text-2xl font-bold mb-5">Delete Book</h2>
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Book ID</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete Book</button>
        </form>
    </div>
  );
}
export default DeleteBook;
