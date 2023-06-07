import React from 'react';
//import { useState } from 'react';
import { Header } from '../components/Header';
import { Login } from './Login';
import { Signup } from './Signup';
import {Dashboard} from './Dashboard';
import './page.css';

export const Page = () => {
  //const [user, setUser] = useState();
  const [componnent, setcomponent] =React.useState('')

  return (
    <>
      <Header
        component={componnent}
        onLogin={() => setcomponent('login')}
        onLogout={() => setcomponent('logout')}
        ondashbord={() => setcomponent('dashboard')}
        onsignup={() => setcomponent('signup')}
      />

      <section className="storybook-page">
        <div className="tip-wrapper">
        </div>
        <div>
          {
            componnent == 'login' ?
              <Login component='login'></Login> :
              componnent == 'logout' ?
                <Login component='logout'></Login> :
                componnent == 'signup' ?
                  <Signup ></Signup> :
                componnent == 'dashboard' ?
                  <Dashboard></Dashboard>:
                  <></>
          }
        </div>
      </section>
   </> 
  );
};
