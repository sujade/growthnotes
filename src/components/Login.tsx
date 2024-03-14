import {useState} from 'react';
import {useGoogleLogin} from '@react-oauth/google';
import {FcGoogle} from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import {Navigate} from "react-router-dom";

function Login() {
    const [accessToken, setAccessToken] = useState<string>();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <div>
            {accessToken
                ? (<Navigate to='/mynotes'></Navigate>)
                : (
                    <Button className="fw-bold" variant='outline-success' onClick={() => login()}>Sign in with
                        Google <FcGoogle/></Button>
                )}
        </div>
    );
}

export default Login