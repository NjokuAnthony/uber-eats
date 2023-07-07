import React from 'react'
import {data} from '../data/data.js';

const Food = () => {
    console.log(data);

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div>

            <div>
                <p>Filter Type</p>
                <div>
                    <button>All</button>
                    <button>Burgers</button>
                    <button>Pizza</button>
                    <button>Salads</button>
                    <button>Chickens</button>
                </div>
            </div>
            <div>
                <p>Filter Prices</p>
                <div>
                    <button>$</button>
                    <button>$$</button>
                    <button>$$$</button>
                    <button>$$$$</button>
                    <button>$$$$$</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Food