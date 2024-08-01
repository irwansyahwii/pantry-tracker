'use client';
import { observer } from "mobx-react-lite";
import { authStore, AuthStore } from "../store/auth-store";
import { useStores } from "../store";
import { Button, CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { onIdTokenChanged } from "firebase/auth";
import { auth } from "../db/firebase";
import { useRouter } from "next/navigation";

import { usePathname } from 'next/navigation'

export const LoginStatus = observer(({authStore}: {authStore: AuthStore})=>{
  const router = useRouter();
  const pathname = usePathname()

  const checkLogin = useCallback(()=>{
    onIdTokenChanged(auth, (user)=> {
      if(user){
        authStore.loggedIn();
        router.push('/dashboard');
      }else{    
        authStore.loggedOut();
        router.push('/login');
      }      
    })
  }, [router, authStore]);

  useEffect(()=>{
    checkLogin();
  }, [checkLogin])

  if(pathname != '/login' && !authStore.isLoggedIn){
    return (<><CircularProgress/> <span>Checking logged in...</span></>) 
  }

  return null;
  
});

export const LoginStatusClientSide = ()=>{

  return (
    <>
      
      <LoginStatus authStore={authStore}/>
      
    </>
  )
}