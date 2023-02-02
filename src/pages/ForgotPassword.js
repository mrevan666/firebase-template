import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail} from 'firebase/auth';
import { auth } from "../firebase";


 const ForgotPassword = () =>{
    const [email,setEmail] = useState('');
    const handleSubmit = useCallback((e)=>{
        e.preventDefault();

        if(!email){
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert("We have sent reset mail to your email. Please check your inbox!!!")
        })
        .catch((e)=>{
            console.log(e)
        })

    },[email])

    return(
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl font-semibold">Forgot password</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Type your email ... " 
                    className="bg-gray-100 p-6 rounded"
                    value={email}
                    onChange={e=> setEmail(e.target.value)} />
                <input type="submit" className="bg-black p-6 rounded text-white" />
                <Link to="/sign-in">Back to sign in</Link>
            </form>
        </div>
    )
}

export default ForgotPassword;