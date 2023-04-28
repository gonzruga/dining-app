import "./login.scss"
import { useState } from "react"
import {auth} from "../../firebase"


import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
const [error, setError] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate()

const loginUser = (e) =>{
e.preventDefault();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/home") ;
    console.log(user)
  })
  .catch((error) => {
    setError(true)
    // ..
  });

}

    return (
<div className="login">
    <form onSubmit={loginUser}>
        <p>g@gmail.com </p>
        <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <p>123456</p>
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        {error && <span>You have inserted a wrong email or password.</span>}

        <p>Don't have an account? Signup HERE</p>

    </form>
</div>
    )
}

export default Login