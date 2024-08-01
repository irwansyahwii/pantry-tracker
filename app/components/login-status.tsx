'use client';
import { observer } from "mobx-react-lite";
import { AuthStore } from "../store/auth-store";
import { useStores } from "../store";

export const LoginStatus = observer(({authStore}: {authStore: AuthStore})=>{
  return (<div>
    <span>{authStore.isLoggedIn ? "LOGGED IN": "NOT LOGGED IN"}</span>
  </div>)
});

export const LoginStatusClientSide = ()=>{
  const {authStore} = useStores();
  const login = ()=>{
    authStore.loggedIn();
  }
  return (
    <>
      <LoginStatus authStore={authStore}/>
      <button onClick={login}>Login</button>
    </>
  )
}