import React from "react";
const Home = () => {
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



