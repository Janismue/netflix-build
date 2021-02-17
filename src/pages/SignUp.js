import React, {useRef} from 'react';
import "./SignUp.css";
import {auth} from "../firebase";

function SignUp() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUp = (e) => {

        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" ref={emailRef}/>
                <input placeholder="Password" type="password" ref={passwordRef}/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signUp__gray"> New to Netflix?</span>
                    <span className="signUp__link" onClick={signUp}> Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUp;