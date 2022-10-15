import React, { Component } from 'react';
import { useState } from 'react';
import Card from '../../Card';
import Gallery from '../../Gallery';

function SwipePage () {
    const [userStyles, setStyles] = useState([])
    return (
        <div className='flex flex-col items-center justify-evenly h-150px overflow-auto text-justify p-5'>
            <h1 className='text-cafe-noir font-bold text-3xl'>Possible Styles You will Like</h1>
            <div>

            </div>
            <div className="bg-cultured w-2/6 h-30 overflow-auto m-5 text-justify p-5 rounded-3xl">
                <Gallery userStyles={userStyles} setStyles={setStyles} />
            </div>
            <button className="w-1/4 bg-camel text-white font-serif text-xl rounded-3xl p-2">Continue</button>
        </div>
    );
}

export default SwipePage;