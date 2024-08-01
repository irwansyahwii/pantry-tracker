'use client';

import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../db/firebase";

export const LoginForm = ()=>{
  const login = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
  return (
    <section>
      <Button onClick={login}>Continue with Google</Button>
    </section>
  )
}