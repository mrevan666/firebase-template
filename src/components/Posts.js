import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";

const ref = collection(db,'post')

const Posts =()=>{

    const [data,isLoading] =useCollectionData(ref);

    if(isLoading){
        return <h1>Loading...</h1>
    }


    return (
        <div className="flex flex-col gap-4 mt-8">
            {data.map((post)=>(
                <div className="p-4 rounded-md bg-gray-200" key={post.id}>
                    <p className="font-bold text-2xl text-black" >{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts;