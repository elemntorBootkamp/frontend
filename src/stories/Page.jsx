import { useState } from 'react';
import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [user, setUser] = useState();
  
  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'user in' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'user' })}
      />

      <section className="storybook-page">
        <div className="tip-wrapper">
         באתר זה תוכלו לרכוש ולנהל את סביבת הענן של האתר שלכם
        </div>
         </section>
    </article>
  );
};
