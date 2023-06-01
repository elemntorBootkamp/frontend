import React from 'react';
import cloud from '../assets/clouds.png'

import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <div className="tip-wrapper">
       באתר זה תוכלו לרכוש ולנהל את סביבת הענן של האתר שלכם
        </div>
        <img src={cloud}></img>
      </section>
    </article>
  );
};
