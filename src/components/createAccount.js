import React, {useState} from "react";
import {auth, db} from "./Firebase";
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {updateProfile} from "firebase/auth";

export async function createNewUser(uid, googleName, googleEmail) {
    let username = "";
    let registerEmail = "";
    if (googleName) {
        // if new user with google
        await setDoc(doc(db, "users", uid), {
            displayName: googleName,
            email: googleEmail,
            account_created: new Date().toUTCString(),
            uid: uid,
        });
        if (auth) updateProfile(auth.currentUser, {displayName: googleName}).catch((err) => console.log(err));
        window.location.replace(`/profile/${googleName}`);
    } else {
        await setDoc(doc(db, "users", uid), {
            displayName: username,
            email: registerEmail,
            account_created: new Date().toUTCString(),
            uid: uid,
        });

        window.location.replace(`/profile/${username}`);
    }
    console.log("new user created");
}