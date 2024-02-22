import { AccountCircle } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button, TextField, CircularProgress, Typography, Alert, AlertTitle } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css"
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import React from "react";
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess,setIsSuccess] = useState(false);
    const [isError,setIsError] = useState(false);
    const navigate = useNavigate();
    const {login} = useAuth();

    const [errors, setErrors] = useState<{
        email: string,
        password: string,
        confirmPassword: string,
        firstname: string,
        lastname: string
    }>({
        email: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: ""

    });
    const [inputs, setInputs] = useState<{
        email: string,
        firstname: string,
        lastname: string
        password: string,
        confirmPassword: string,

    }>({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }))
    }
    async function delay(): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
    }
    

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        for (let input in inputs) {
            if (inputs[input as keyof typeof inputs].length < 3) {
                setErrors((prevErrors) => ({ ...prevErrors, [input]: "Field cannot be empty" }));
                return
            }
        }
        const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(inputs.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email address" }))
            return
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(inputs.password)) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "Password must contain at least one uppercase and one numeric character" }))
            return;
        }
        if (!(inputs.password === inputs.confirmPassword)) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "Passwords must match" }))
            return;
        }
        try {
            setIsLoading(true)
            const response = await fetch(import.meta.env.VITE_BACKEND_URI + "auth/signup", {
                method: "POST",
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json();
            if (response.ok) {
                login();
                Cookies.set('token', json.token)
                setIsLoading(false)
                setIsSuccess(true);
               delay();          
               navigate("/")

            }
            if (!response.ok) {
                if (json.errors.firstname) {
                    setErrors((prevErrors) => ({ ...prevErrors, firstname: json.errors.firstname }));
                    setIsLoading(false)
                    return;

                }
                if (json.errors.password) {
                    setErrors((prevErrors) => ({ ...prevErrors, lastname: json.errors.lastname }));
                    setIsLoading(false);
                    return;
                }
                if (json.errors.email) {
                    setErrors((prevErrors) => ({ ...prevErrors, email: json.errors.email }));
                    setIsLoading(false)
                    return;

                }
                if (json.errors.password) {
                    setErrors((prevErrors) => ({ ...prevErrors, password: json.errors.password }));
                    setIsLoading(false);
                    return;
                }
                setIsLoading(false)
            }
        } catch (error) {

            setIsLoading(false)
        }


    }
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-12 register-container">
                    <form>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "1%" }}>
                            <Button fullWidth variant="outlined" style={{ color: 'blue', textTransform: 'none' }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.64 9.172c0-.608-.054-1.192-.155-1.764H9v3.34h4.656a3.962 3.962 0 0 1-1.72 2.6v2.16h2.784c1.632-1.5 2.576-3.696 2.576-6.336z" fill="#FFC107" />
                                    <path d="M9 18c2.34 0 4.29-.78 5.736-2.116l-2.784-2.16c-.772.52-1.752.82-2.952.82-2.264 0-4.176-1.524-4.848-3.572H1.224v2.244A8.994 8.994 0 0 0 9 18z" fill="#FF3D00" />
                                    <path d="M4.152 10.712A5.41 5.41 0 0 1 4 9c0-.712.136-1.392.376-2.032V4.716H1.224A8.982 8.982 0 0 0 0 9c0 1.452.352 2.828.952 4.056l3.2-2.544z" fill="#4CAF50" />
                                    <path d="M9 3.384c1.272 0 2.424.44 3.336 1.304l2.496-2.496C13.296.756 11.34 0 9 0A8.994 8.994 0 0 0 1.224 4.716L4.152 7.26C4.88 5.212 6.776 3.384 9 3.384z" fill="#1976D2" />
                                    <path fill="none" d="M0 0h18v18H0z" />
                                </svg>
                                <span style={{ marginLeft: '8px' }}>Continue with Google</span>
                            </Button>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "1%" }}>
                            <Button fullWidth variant="outlined" style={{ color: 'blue', textTransform: 'none' }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8029 2H5.19714C3.51857 2 2.13715 3.38143 2.13715 5.06V12.6657C2.13715 14.3443 3.51857 15.7257 5.19714 15.7257H9.17571V11.3643H7.28343V9.13143H9.17571V7.48743C9.17571 5.32571 10.8457 4.36 12.0943 4.36C12.6777 4.36 13.2189 4.42857 13.75 4.57714V6.72914H12.1909C10.9017 6.72914 10.5457 7.50286 10.5457 8.41029V9.13143H12.672L12.3017 11.3643H10.5457V15.7257H12.8029C14.4814 15.7257 15.8629 14.3443 15.8629 12.6657V5.06C15.8629 3.38143 14.4814 2 12.8029 2Z" fill="#1877F2" />
                                </svg>
                                <span style={{ marginLeft: '8px' }}>Continue with Facebook</span>
                            </Button>

                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }} >

                            <EmailIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField name="email" value={inputs.email} onChange={handleChange} sx={{ input: { color: "blue" }, label: { color: "blue" } }} required fullWidth variant="standard" label="Email" />
                        </Box>
                        {errors.email.length > 0 &&
                            <Box sx={{ textAlign: "center", color: "red" }} >
                                <p>{errors.email}</p>
                            </Box>
                        }
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <AccountCircle sx={{ mr: 1, my: 0.5 }} />
                            <TextField sx={{ input: { color: "blue" }, label: { color: "blue" } }}
                                name="firstname" value={inputs.firstname} onChange={handleChange}
                                required fullWidth variant="standard" label="Firstname" />
                        </Box>
                        {errors.firstname.length > 0 &&
                            <Box sx={{ textAlign: "center", color: "red" }} >
                                <p>{errors.firstname}</p>
                            </Box>
                        }
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <AccountCircle sx={{ mr: 1, my: 0.5 }} />
                            <TextField sx={{ input: { color: "blue" }, label: { color: "blue" } }}
                                name="lastname" value={inputs.lastname} onChange={handleChange}
                                required fullWidth variant="standard" label="Last name" />
                        </Box>
                        {errors.lastname.length > 0 &&
                            <Box sx={{ textAlign: "center", color: "red" }} >
                                <p>{errors.lastname}</p>
                            </Box>
                        }
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <LockIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField sx={{ input: { color: "blue" }, label: { color: "blue" } }} type="password"
                                name="password" value={inputs.password} onChange={handleChange}
                                required fullWidth variant="standard" label="Password" />
                        </Box>
                        {errors.password.length > 0 &&
                            <Box sx={{ textAlign: "center", color: "red" }} >
                                <p>{errors.password}</p>
                            </Box>
                        }
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <LockIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField sx={{ input: { color: "blue" }, label: { color: "blue" } }} type="password"
                                name="confirmPassword" value={inputs.confirmPassword} onChange={handleChange}
                                required fullWidth variant="standard" label="Confirm Password" />
                        </Box>
                        {errors.confirmPassword.length > 0 &&
                            <Box sx={{ textAlign: "center", color: "red" }} >
                                <p>{errors.confirmPassword}</p>
                            </Box>
                        }
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "1%" }}>
                            <Button variant="contained" fullWidth onClick={handleSubmit}>Sign up</Button>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "1%" }}>
                            <Button sx={{ backgroundColor: "red" }} variant="contained" fullWidth>
                                <Link to="/">Login</Link>
                            </Button>
                        </Box>

                    </form>
                </div>
            </div>
            {isLoading && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <CircularProgress size={68} />
                    <Typography sx={{ fontSize: "2em", color: "blue" }} variant="body1">Just a sec...</Typography>
                </Box>
            )}
            {isSuccess && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Alert>
                        <AlertTitle>Success</AlertTitle>
                        Account created successfully
                    </Alert>
                </Box>
            )}
            {isError && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Alert>
                        <AlertTitle>Error</AlertTitle>
                        An error occured. Please try again
                    </Alert>
                </Box>
            )}



        </div>
    )
}