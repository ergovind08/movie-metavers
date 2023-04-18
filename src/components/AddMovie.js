// import   React from 'react'
import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import {addDocs} from "firebase/firestore";
import { moviesRef } from '../firebase/firebase';


const MoviesAdd = () => {
    const [form, setForm] = useState({
        title: "",
        year: "",
        description: "",
        image: ""
    });

    const [loading, setLoading] = useState(false);

    // const addMovie =async ()=>{
    //     await addDocs(moviesRef,form);
        
    // }


    return (
        <div>

            <section className="text-gray-400 bg-black body-font relative">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-400">Add Movies</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                    </div>

                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-md text-gray-400">Title</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>


                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-md text-gray-400">Email</label>
                                    <input type="email" id="email" name="email"
                                        value={form.year}
                                        onChange={(e) => setForm({ ...form, year: e.target.value })}
                                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            {/* imgae link */}
                            <div className="p-1 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-md text-gray-400">Image Link</label>
                                    <input id="message" name="message"
                                        value={form.image}
                                        onChange={(e) => setForm({ ...form, image: e.target.value })}
                                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 
                       focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 
                       h-16 text-base outline-none text-gray-100 py-0.5 px-3 resize-none 
                       leading-6 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>



                            {/* description */}


                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-md text-gray-400">Message</label>
                                    <textarea id="message" name="message"
                                        value={form.description}
                                        onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div className="p-1 w-full">
                                <button className="flex mx-auto text-white bg-yellow-500 border-0 py-3 px-10 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                    {loading ? <TailSpin height={24} width={24} color="white" /> : 'Submit'}
                                </button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <a className="text-yellow-400">jhagovind348@gmail.com</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default MoviesAdd