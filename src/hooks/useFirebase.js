import { useEffect, useState } from "react";
import initilizeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


// initialize firebase app
initilizeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setAuthError('');

                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to the database
                saveUser(email, name);

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        setAuthError('');

                    })
                    .catch((error) => {

                        setAuthError(error.message);
                    });

                history.replace('/');

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;
                setAuthError('');

            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInWithGoogle = (location, history) => {

        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));


    }

    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user);
            }
            else {
                setUser({})

            }
            setIsLoading(false);
        });
        return () => unsubscribe;

    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName) => {

    }

    return {
        user,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle
    }

}

export default useFirebase;