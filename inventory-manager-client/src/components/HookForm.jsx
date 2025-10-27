// components/HookForm
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(0.01, "Price must be positive"),
  category: z.enum(["TV", "PHONE", "FRIDGE"], {
    message: "Please select a valid category",
  }),
  shippingMethod: z.enum(["Standard", "Express"], {
    message: "Select a shipping method",
  }),
  inStock: z.boolean(),
  tags: z.array(z.string()).nonempty("Please select at least one tag"),
});

const HookForm = () => {
  const options = [
    { name: "TV", value: "TV" },
    { name: "PHONE", value: "PHONE" },
    { name: "FRIDGE", value: "FRIDGE" },
  ];
  const shippingOptions = ["Standard", "Express"];
  const tagOptions = ["New", "Featured", "On Sale", "Clearance"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      category: "TV",
      inStock: true,
      shippingMethod: "Standard",
      tags: [],
    },
    resolver: zodResolver(productSchema),
  });
  const onFormSubmit = (data) => {
    console.log(data, "on submit data");
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-xl">Hook Form Used</h1>
      {/* p name */}
      <div>
        <label for="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          id="name"
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
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
          id="description"
          {...register("description")}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>
      {/* p price */}
      <div>
        <label for="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          {...register("price", { valueAsNumber: true })}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
        )}
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
          id="category"
          {...register("category")}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>
      <div>
        <label for="tags" className="block text-sm font-medium text-gray-700">
          Category
        </label>
      </div>

      <div>
        <label
          for="shippingMethod"
          className="block text-sm font-medium text-gray-700"
        >
          Shipping Method
        </label>
        <div className="flex items-center mt-2 space-x-4">
          {shippingOptions.map((method) => (
            <label key={method} className="flex items-center">
              <input
                type="radio"
                {...register("shippingMethod")}
                value={method}
              />
              <span className="ml-2 text-sm text-gray-700">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700"
        >
          Tags (Hold Ctrl/Cmd to select multiple)
        </label>
        <select
          id="tags"
          // Add the `multiple` attribute
          multiple
          {...register("tags")}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-24"
        >
          {tagOptions.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {errors.tags && (
          <p className="mt-1 text-sm text-red-600">{errors.tags.message}</p>
        )}
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
          {...register("inStock")}
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

export default HookForm;
