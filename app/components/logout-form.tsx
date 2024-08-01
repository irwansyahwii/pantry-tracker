'use client';
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../db/firebase";

export const LogoutForm = ()=>{

  const logout = ()=>{
    signOut(auth);
  }

  return (
    <div>

      <Button onClick={logout}>Logout</Button>

    </div>
  )
}