import React from "react";

const CreateBook = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-5">Create a New Book</h2>
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
export default CreateBook;
           