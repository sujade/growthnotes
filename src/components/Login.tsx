import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import Button from 'react-bootstrap/Button';

interface Profile {
    picture: string,
    name: string,
    email: string
}

function Login() {
    const [ accessToken, setAccessToken ] = useState<string>();
    const [ profile, setProfile ] = useState<Profile | null>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (accessToken) {
                fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((response) => response.json())
                    .then((res: Profile) => {
                        setProfile(res);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ accessToken ]
    );

    // log out function to log the user out of Google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <Button className="fw-bold" variant='outline-success' onClick={() => login()}>Sign in with Google <FcGoogle/></Button>
            )}
        </div>
    );
}
export default Login