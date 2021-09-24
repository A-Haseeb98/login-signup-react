import app from '../../config/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { useHistory} from 'react-router-dom'




function Profile() {
    const history = useHistory();
    const checkAuth = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log(uid)
                // ...
            } else {
                history.push('/')
                // User is signed out
                // ...
            }
        });
    }

    useEffect(() => {
        checkAuth()
    })

    return (
        <h1>Profile </h1>
    )
}
export default Profile;