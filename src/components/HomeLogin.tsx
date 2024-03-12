import Login from "./Login.tsx";
import {GoogleOAuthProvider} from "@react-oauth/google";

const HomeLogin = () => {
    return (
        <GoogleOAuthProvider clientId="12318472371-j2t13uug1t2lbgg25il8498d4m1d1buh.apps.googleusercontent.com">
            <div className='text-center pb-4 mb-5'>
            <h2>Ready to start?</h2>
                <p className='text-muted mb-3' >Just login with you Google account and <br/>
               start taking notes on your personal page!</p>
                <Login/>
            </div>
        </GoogleOAuthProvider>
    );
};

export default HomeLogin;