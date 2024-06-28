import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

const CategoryList = () => {
  const brands = ["Jewelery", "Electronics"]
  const [jewelryActive, setJewelryActive] = useState(false)
  return (
    <div class="h2">
      Categories
    <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-black-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">{brands[0]}</label>
</div>
<div class="flex items-center">
<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-black-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">{brands[1]}</label>
</div>
</div>
  )
}
export default CategoryList;
