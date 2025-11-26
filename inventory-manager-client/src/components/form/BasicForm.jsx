import React, { useState } from "react";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Electronics");
  const [inStock, setInStock] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price,
      category,
      inStock,
    };
    console.log("Submitted to DB", productData);
  };
  const options = [
    { name: "TV", value: "TV" },
    { name: "PHONE", value: "PHONE" },
    { name: "FRIDGE", value: "FRIDGE" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-xl">Basic Form</h1>
      {/* p name */}
      <div>
        <label for="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      {/* p description */}
      <div>
        <label
          for="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="description"
          value={description}
          id="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
      {/* p price */}
      <div>
        <label for="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {/* p category */}
      <div>
        <label
          for="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {/* p stock */}
      <div>
        <label for="stock" className="block text-sm font-medium text-gray-700">
          Stock
        </label>
        <input
          type="checkbox"
          id="stock"
          name="stock"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
