import react from 'react';
import { GoogleOutlined, FacebookOutlined, LoginOutlined } from '@ant-design/icons';

const login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Unichat!</h2>
                <div
                    className = "login-button google">
                        <GoogleOutlined /> Sign in with Google 
                </div>
                <br /> <br />
                <div
                    className = "login-button facebook">
                        <FacebookOutlined /> Sign in with Facebook
                </div>
            </div>
        </div>

    );
}

export default Login;
