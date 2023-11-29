import React, {useEffect} from 'react';
import {auth, provider} from './Firebase';
import {signInWithGoogle} from "./Firebase.js";
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {updateProfile} from "firebase/auth";
import {collection, getDocs} from "firebase/firestore";

import {useState} from "react";

import {db} from "./Firebase";


export function GoogleSignIn(users, userInfo) {
    console.log('hi')

    console.log(userInfo);
    console.log("users hi", users)

    const login = signInWithGoogle().then((result) => {

            const name = result.user.displayName;
            const email = result.user.email;
            const uid = result.user.uid;

            const userExists = users.some((user) => user.uid === uid);

            console.log("aAA: " + userExists)


            if (!userExists) {
                console.log("user does not exist")
                setDoc(doc(db, "users", uid), {
                    displayName: name,
                    email: email,
                    account_created: new Date().toUTCString(),
                    uid: uid,
                });
                if (auth) updateProfile(auth.currentUser, {displayName: name}).catch((err) => console.log(err));
            } else {

            }


            console.log("name", userExists)
            console.log("email", email)
            console.log("uid", uid)

        }
    )


}


