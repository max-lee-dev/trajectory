import {useState} from 'react';
import {auth, db} from './Firebase';
import {setDoc, doc, updateDoc} from 'firebase/firestore';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {updateProfile} from 'firebase/auth';

export async function EmailSignup(users, userInfo) {


    const email = userInfo.email;
    const password = userInfo.password;
    await createUserWithEmailAndPassword(auth, email, password);

    const name = auth.currentUser.displayName;
    const uid = auth.currentUser.uid;

    console.log("name", name)
    console.log("email", email)
    console.log("uid", uid)


    await setDoc(doc(db, "users", uid), {
        displayName: name,
        email: email,
        account_created: new Date().toUTCString(),
        uid: uid,
    });


}
