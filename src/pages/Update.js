import { useState } from "react";
import { Link } from "react-router-dom";
import {auth} from "../firebase"



const Update = () =>{

    const user = auth.currentUser;

    return (
        <div className="container mx-auto p-8">
            <div>
                <Link to="/" className="flex flex-row gap-2 items-center ">
                    <i class="fa-solid fa-angle-left"></i>
                    <p>Back to home</p>
                </Link>
                <h1 className="font-bold text-5xl mb-12 text-center">Update your profile</h1>
                <form className="flex flex-col gap-4">
                    <div className="p-4 bg-gray-200 rounded-md">
                        <label className="font-bold text-2xl ">Name: </label>
                        <input value={user.displayName} type="text" className="font-bold text-2xl bg-transparent focus:outline-none"/>
                    </div>
                    <div className=" p-4 bg-gray-200 rounded-md">
                        <label className="font-bold text-2xl ">Email: </label>
                        <input value={user.email} type="email" disabled  className="font-bold text-2xl bg-transparent focus:outline-none" />
                    </div>
                    <div className="p-4 bg-gray-200 rounded-md">
                        <label className="font-bold text-2xl ">Password: </label>
                        <input value="123456" type="password"  className="font-bold text-2xl bg-transparent focus:outline-none"/>
                    </div>
                    <div className="p-4 bg-gray-200 rounded-md">
                        <label className="font-bold text-2xl ">Image: </label>
                        <input value="" type="file" placeholder="Select your profile photo" className="rounded-md p-2 font-semibold bg-transparent"/>
                    </div>
                    <button type="submit" className="bg-black text-white rounded-md p-4 text-3xl">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;