import { useState } from 'react';
import { Header } from './Header';
import { Login,Signup } from './main_page';
import '../stories/page.css';

export const Page = () => {
  //const [user, setUser] = useState();
  const [componnent, setcomponent] = useState('')

  return (
    <article>
      <Header
        component={componnent}
        onLogin={() => setcomponent('login')}
        onLogout={() => setcomponent('logout')}
        ondashbord={() => setcomponent('dashboard')}
        onsignup={() => setcomponent('signup')}
      />

      <section className="storybook-page">
        <div className="tip-wrapper">
          באתר זה תוכלו לרכוש ולנהל את סביבת הענן של האתר שלכם
        </div>
        <div>
          {
            componnent == 'login' ?
              <Login component='login'></Login> :
              componnent == 'logout' ?
                <Login component='logout'></Login> :
                componnent == 'signup' ?
                  <Signup component='signup'></Signup> :
                componnent == 'dashboard' ?
                  <Signup component='dashboard'></Signup>:
                  <></>
          }
        </div>
      </section>
    </article>
  );
};
