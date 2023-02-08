import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState,useCallback } from "react";
import {doc, deleteDoc} from 'firebase/firestore'

const ref = collection(db,'post')

const Posts =()=>{
    const [deletedPost,setDeletedPost] = useState('');
    const [data,isLoading] =useCollectionData(ref);


    console.log(deletedPost);
     const handleDelete = useCallback((e)=>{
        e.preventDefault();
        const refDelete = doc(db,"post",) 
        deleteDoc(refDelete).then(()=>{
            console.log("Silindi qaqa")
        }).catch((e)=>{
            console.log(e);
        })
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="flex flex-col gap-4 mt-8">
            {data.map((post)=>(
                <div className="p-4 rounded-md bg-gray-200 flex flex-row justify-between items-center" key={post.id}>
                    <p className="font-bold text-2xl text-black" >{post.body}</p>
                    <button onClick={()=>{
                        setDeletedPost(post.id)
                    }}     
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Posts;