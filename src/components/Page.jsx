import React from 'react';
//import { useState } from 'react';
import { Header } from '../components/Header';
import { Login } from './login';
import { Signup } from './signup';
import { Dashboard } from './Dashboard';
import './page.css';
import { useNavigate } from 'react-router';

export const Page = () => {
  const [componnent, setcomponent] =React.useState('')
  let navigate=useNavigate()

  let login='login'
  let logout='logout'
  return (
    <>
      <Header
        component={componnent}
        onLogin={() => {
        navigate(`login/${login}`) 
        setcomponent('login')}}
        
        onLogout={() => {
        navigate(`login/${logout}`)
        setcomponent('')}}

        ondashbord={() => {
        navigate('/dashboard')
        setcomponent('dashboard')}}
        onsignup={() => {
        navigate('./signup')
       setcomponent('signup')}}
      />

      <section className="storybook-page">
        <div className="tip-wrapper">
        </div>
      </section>
   </> 
  );
};
