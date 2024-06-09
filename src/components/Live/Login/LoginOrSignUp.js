import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
function LoginOrSignUp() {
    const [ifLogin, setIfLogin] = useState(true);
    return (
        <div>
            {ifLogin ? <Login setIfLogin={setIfLogin} /> : <Register setIfLogin={setIfLogin} />}
        </div>
    );
}

export default LoginOrSignUp;
