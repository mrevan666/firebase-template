import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function Home(){
    const [user,isLoading] = useAuthState(auth);

    const handleSignOut = useCallback(()=>{
        signOut(auth);
    },[])

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return(
        <div className="max-w-md py-12 mx-auto">
            <div className="flex items-center justify-between">
                <div>
                <p className="font-bold text-4xl">{user.displayName}</p>
                <p className="text-gray-500">{user.email}</p>
                </div>
            <button onClick={handleSignOut} className="bg-red-600 text-white p-4 rounded-md">Sign out</button>
            </div>
        </div>
    )
}

export default Home;