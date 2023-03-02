import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginButton from "./LoginButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import EmailIcon from "@material-ui/icons/Email";
import FormInput from "./FormInput";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/userSlice";
const axios = require("axios");
function Login() {
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const [spotifyData, setSpotifyData] = useState([]);
    const backendRequest = async () => {
        console.log("hello world");

        axios.get("/greet").then((data) => {
            console.log(data.data);
        });

        console.log("hello again");
    };
    useEffect(() => {
        console.log(spotifyData);
    }, [spotifyData]);
    const GreenCheckbox = withStyles({
        root: {
            color: green[400],
            "&$checked": {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);
    return (
        <div className="login">
            <div className="login__title">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png" />
                <h1>Spotify</h1>
            </div>
            <>
                <hr />
            </>
            <h3>Για να συνεχίσεις συνδέσου στο Spotify</h3>
            <LoginButton Icon={FacebookIcon} app="Facebook" />
            <LoginButton Icon={AppleIcon} app="Apple" />
            <LoginButton Icon={EmailIcon} app="Google" />
            <div className="line">
                <div className="hr__line"></div>
                <div className="hr__or">'Η</div>
                <div className="hr__line"></div>
            </div>
            <form className="login__form" action="/users/signup" method="POST">
                <FormInput
                    labeltext="Διεύθυνση email ή όνομα χρήστη"
                    inputname="email"
                    placeholder="Διεύθυνση email"
                />
                <FormInput
                    labeltext="όνομα χρήστη"
                    inputname="username"
                    placeholder="Ονομα χρηστη"
                />
                <FormInput
                    labeltext="Κωδικός πρόσβασης"
                    inputname="password"
                    placeholder="Κωδικός Πρόσβασης"
                />
                {/* <label for="username">Διεύθυνση email ή όνομα χρήστη</label>
        <input id="username" name="username" placeholder="'Ονομα χρηστη" /> */}
                <p>
                    <a>Ξέχασες τον κωδικό πρόσβασής σου;</a>
                </p>
                <div className="login__form__submit">
                    <GreenCheckbox
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        name="checkedG"
                    />
                    <p>
                        Απομνημόνευση<br></br> των στοιχείων μου
                    </p>
                    <button type="submit">Σύνδεση</button>
                </div>
            </form>
            <hr style={{ width: "var(--loginbutton-width)" }} />
            <h2
                style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}
            >
                Δεν έχεις λογαριασμό;
            </h2>
            <div className="loginButton">
                <button onClick={backendRequest}>
                    <p>Εγγράψου στο spotify</p>
                </button>
            </div>
        </div>
    );
}

export default Login;
