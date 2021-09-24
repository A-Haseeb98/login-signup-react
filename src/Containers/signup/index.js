import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/card';
import BasicTextFields from '../../components/input';
import BasicButtons from '../../components/button'
import './style.css'
import { Link,useHistory } from 'react-router-dom'
import { useState } from 'react'
import app from '../../config/firebase'
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth'

function Signup() {
    const history = useHistory();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = () => {
        console.log(fullName, email, password)
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.uid, auth)
                alert('Signup Successful')
                history.push('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
    return (
        <div>
            <MenuAppBar title="Signup" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard>
                            <h1>Signup</h1>
                            <div className="mt-20">
                                <BasicTextFields onChange={(e) => setFullName(e.target.value)} value={fullName} label="Full Name" type="text" />
                            </div>
                            <div className="mt-20">
                                <BasicTextFields onChange={(e) => setEmail(e.target.value)} value={email} label="Email" type="email" />
                            </div>
                            <div className="mt-20">
                                <BasicTextFields onChange={(e) => setPassword(e.target.value)} value={password} label="Password" type="password" />
                            </div>
                            <div className="mt-20">
                                <BasicButtons onClick={register} title="SIGnUP " />
                            </div>
                            <div className="mt-20" style={{ textAlign: 'center' }}>
                                <Link to="/">Login now</Link>
                            </div>
                        </MyCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Signup;