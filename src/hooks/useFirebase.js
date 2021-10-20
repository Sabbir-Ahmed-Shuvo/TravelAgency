import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase-init";

initializeAuthentication()
const useFirebase =()=>{
    const [user, setUser] = useState({});
    const [isLoad, setisLoad] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle =() =>{
      setisLoad(true)
      return  signInWithPopup(auth, googleProvider)
      .finally(() =>{
        setisLoad(false)
      })  
    }

    const logOut =() =>{
      setisLoad(true)
        signOut(auth)
        .then(() =>{
           setUser({})
        })
        .finally(() =>{
          setisLoad(false)
        }) 
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
            setisLoad(false)
          });
    },[])

    return{
        user,
        singInWithGoogle,
        logOut,
        isLoad
    }
}



export default useFirebase;