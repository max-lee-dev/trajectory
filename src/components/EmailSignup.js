import {useState} from 'react';
import {auth, db} from './Firebase';
import {setDoc, doc, updateDoc} from 'firebase/firestore';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {updateProfile} from 'firebase/auth';

export async function EmailSignup(users, userInfo, role) {


    const email = userInfo.email;
    const password = userInfo.password;
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const uid = userCredential.user.uid;


        setDoc(doc(db, "users", uid), {
            displayName: null,
            email: email,
            account_created: new Date().toUTCString(),
            role: role,
            uid: uid,
        }).then(() => {
            console.log("Document successfully written!");
            window.location.href = "/ ";// change to transition to new modal later
        });
        // ...

    }).catch((error) => {
        console.log(error.message)

    });


}
