import React from 'react'
import { FaDownload } from "react-icons/fa";

const Card = () => {
  return (
    <>
    

<div class="w-[12%]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHNvMtTQzchWJ34vRZTns8xfERAmttvCsERNKKo2utg&s" alt="" />
    </a>
    <div class="p-2">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Boy 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Download<FaDownload className='mx-2' />
        </a>
    </div>
</div>

    </>
  )
}

export default Card