import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/card';
import BasicTextFields from '../../components/input';
import BasicButtons from '../../components/button'
import './style.css'
import app from '../../config/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';

function Login() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const history = useHistory();
   const login = () => {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid)
            alert('Login Successful')

            history.push('/profile')
            
            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
         });


   }

   return (
      <div>
         <MenuAppBar title="Login" />
         ِ<Container>
            <Grid container justifyContent="center">
               <Grid item xs={12} lg={6} md={12}>
                  <MyCard>
                     <h1>Login</h1>
                     <div className="mt-20">
                        <BasicTextFields label="Email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
                     </div>
                     <div className="mt-20">
                        <BasicTextFields label="Password" onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
                     </div>
                     <div className="mt-20">
                        <BasicButtons onClick={login} title="LOGIN " />
                     </div>
                     <div className="mt-20" style={{ textAlign: 'center' }}>
                        <Link to="/signup">Register now</Link>
                     </div>
                  </MyCard>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Login;