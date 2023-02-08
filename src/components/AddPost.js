import { useState,useCallback } from "react";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../firebase";

const ref = collection(db,"post");

const AddPost = () =>{
    const [body,setBody] = useState("");

    

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        addDoc(ref,{
            body:body,
        })
    },[body])

    return (
        <div className="mt-8 p-4 bg-gray-200 rounded-md">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="What are you thinking?" 
                    className="bg-transparent focus:outline-none text-lg rounded-md"
                    value={body}
                    onChange={(e)=>setBody(e.currentTarget.value)}
                    />
                <input type="submit" className="bg-green-600 text-white rounded-md p-4"/>
            </form>
        </div>
    )
}

export default AddPost;