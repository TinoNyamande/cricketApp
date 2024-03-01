import LockIcon from '@mui/icons-material/Lock';
import { Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css"
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from "react";
import Cookies from "js-cookie"
import "./../styles/auth.css"
import { Link } from 'react-router-dom';





export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState<{
        email: string,
        password: string

    }>({
        email: "",
        password: ""
    })

    const [inputs, setInputs] = useState<{
        email: string,
        password: string

    }>({
        email: "",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }))
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))

    }
    // function delay(ms: any) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setErrors((prevErrors)=>({...prevErrors,email:""}))
        setErrors((prevErrors)=>({...prevErrors,password:""}))
        if (!inputs.email && !inputs.password) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Email cannot be empty" }))
            setErrors((prevErrors) => ({ ...prevErrors, password: "Password cannot be empty" }))
            return
        }
        if (!inputs.email) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Email cannot be empty" }))
            return
        }
        const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(inputs.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email address" }))
            return
        }

        if (!inputs.password) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "Password cannot be empty" }))
            return
        }
        if (inputs.password.length < 6) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "Invalid password" }))
            return
        }
        try {
              setIsLoading(true)


            const response = await fetch(import.meta.env.VITE_BACKEND_URI + "auth/login", {
                method: "POST",
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            if (response.ok) {
                Cookies.set('token', json.token)
                setIsLoading(false)
 
            }
            if (!response.ok) {
                if (json.errors.email) {
                    setErrors((prevErrors)=>({...prevErrors,email:json.errors.email}));
                    setIsLoading(false)
                    return;

                }
                if (json.errors.password) {
                    setErrors((prevErrors)=>({...prevErrors,password:json.errors.password}));
                    setIsLoading(false);
                    return;
                }
  
                setIsLoading(false)
            }
        } catch (error) {

        }
      
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "5%" }} >

                            <EmailIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField  name="email" value={inputs.email} onChange={handleChange} sx={{ input: { color: "blue" }, label: { color: "blue" } }} required fullWidth variant="standard" label="Email" />
                        </Box>
                        {errors.email.length > 0 &&
                            <Box sx={{ textAlign: "center", color: "red" }} >
                                <p>{errors.email}</p>
                            </Box>
                        }

                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "5%" }}>
                            <LockIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField type="password" name="password" value={inputs.password} onChange={handleChange} sx={{ input: { color: "blue" }, label: { color: "blue" } }}

                                required fullWidth variant="standard" label="Password" />
                        </Box>
                        {errors.password.length > 0 &&
                            <Box sx={{ textAlign: "center", color: "red" }} >
                                <p>{errors.password}</p>
                            </Box>
                        }
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <Button onClick={handleSubmit} variant="contained" fullWidth>Login</Button>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <Button sx={{ backgroundColor: "red" }} variant="contained" fullWidth>Cancel</Button>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <Button variant="outlined" fullWidth>Forgot Password</Button>
                        </Box>
                        <hr />
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <Button fullWidth variant="outlined" style={{ color: 'blue', textTransform: 'none' }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.64 9.172c0-.608-.054-1.192-.155-1.764H9v3.34h4.656a3.962 3.962 0 0 1-1.72 2.6v2.16h2.784c1.632-1.5 2.576-3.696 2.576-6.336z" fill="#FFC107" />
                                    <path d="M9 18c2.34 0 4.29-.78 5.736-2.116l-2.784-2.16c-.772.52-1.752.82-2.952.82-2.264 0-4.176-1.524-4.848-3.572H1.224v2.244A8.994 8.994 0 0 0 9 18z" fill="#FF3D00" />
                                    <path d="M4.152 10.712A5.41 5.41 0 0 1 4 9c0-.712.136-1.392.376-2.032V4.716H1.224A8.982 8.982 0 0 0 0 9c0 1.452.352 2.828.952 4.056l3.2-2.544z" fill="#4CAF50" />
                                    <path d="M9 3.384c1.272 0 2.424.44 3.336 1.304l2.496-2.496C13.296.756 11.34 0 9 0A8.994 8.994 0 0 0 1.224 4.716L4.152 7.26C4.88 5.212 6.776 3.384 9 3.384z" fill="#1976D2" />
                                    <path fill="none" d="M0 0h18v18H0z" />
                                </svg>
                                <span style={{ marginLeft: '8px' }}>Login with Google</span>
                            </Button>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end", margin: "3%" }}>
                            <Button fullWidth variant="outlined" style={{ color: 'blue', textTransform: 'none' }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8029 2H5.19714C3.51857 2 2.13715 3.38143 2.13715 5.06V12.6657C2.13715 14.3443 3.51857 15.7257 5.19714 15.7257H9.17571V11.3643H7.28343V9.13143H9.17571V7.48743C9.17571 5.32571 10.8457 4.36 12.0943 4.36C12.6777 4.36 13.2189 4.42857 13.75 4.57714V6.72914H12.1909C10.9017 6.72914 10.5457 7.50286 10.5457 8.41029V9.13143H12.672L12.3017 11.3643H10.5457V15.7257H12.8029C14.4814 15.7257 15.8629 14.3443 15.8629 12.6657V5.06C15.8629 3.38143 14.4814 2 12.8029 2Z" fill="#1877F2" />
                                </svg>
                                <span style={{ marginLeft: '8px' }}>Login Facebook</span>
                            </Button>

                        </Box>
                        <Box sx={{margin:"3%",textAlign:"center"}}>
                            <Typography sx={{fontWeight:"bold"}}>Dont have an account</Typography>
                            <Typography>Dont miss out on the action</Typography>
                            <Link to="/signup">Sign up now</Link>
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
                    <Typography sx={{ fontSize: "2em", color: "blue" }} variant="body1">Signing in...</Typography>
                </Box>
            )}


        </div>
    )
}