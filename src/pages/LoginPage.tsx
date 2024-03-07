import {GoogleOAuthProvider} from "@react-oauth/google";
import LoginForm from "../components/LoginForm.tsx";
import Login from "../components/Login.tsx";
import Footer from "../components/Footer.tsx";

const LoginPage = () => {
    return (
        <GoogleOAuthProvider clientId="12318472371-j2t13uug1t2lbgg25il8498d4m1d1buh.apps.googleusercontent.com">
            <LoginForm>
                <Login/>
            </LoginForm>
            <Footer/>
        </GoogleOAuthProvider>
    );
};

export default LoginPage;