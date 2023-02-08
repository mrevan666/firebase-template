import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Posts from "../components/Posts"
import AddPost from "../components/AddPost";
import { Link } from "react-router-dom";

function Home(){
    const [user,isLoading] = useAuthState(auth);

    const handleSignOut = useCallback(()=>{
        signOut(auth);
    },[])

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return(
        <div className="container px-8 py-12 mx-auto">
            
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="font-bold text-4xl">{user.displayName}</p>
                        <div>
                            <Link to="/update"><i class="fa-solid fa-pen-to-square"></i></Link>
                        </div>
                    </div>
                <p className="text-gray-500">{user.email}</p>
                </div>
            <button onClick={handleSignOut} className="bg-red-600 text-white p-4 rounded-md">Sign out</button>
            </div>
            <AddPost />
            <Posts />
        </div>
    )
}

export default Home;