import React, {useEffect} from 'react';
import {auth, provider} from './Firebase';
import {signInWithGoogle} from "./Firebase.js";
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {updateProfile} from "firebase/auth";
import {collection, getDocs} from "firebase/firestore";

import {useState} from "react";

import {db} from "./Firebase";


export function GoogleSignIn(users, userInfo, role) {
    console.log('hi')

    console.log(userInfo);
    console.log("users hi", users)

    // CHECK IF USER EXISTS AS A MEMBER/FOUNDER, CANT OVERWRITE !!!


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
                    role: role,
                    uid: uid,
                });
                if (auth) updateProfile(auth.currentUser, {displayName: name}).catch((err) => console.log(err));
            } else {
                // prob need to update profile here if user already exists
            }


            console.log("name", userExists)
            console.log("email", email)
            console.log("uid", uid)

        }
    )


}


