'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="./images/me.jpg"
            alt="Francesco Giuseppe Minisini"
            width={200}
            height={200}
            priority
          />
        </Link>
        <header>
          <h2>Francesco Giuseppe Minisini</h2>
          <p>
            <a href="mailto:fg.minisini@gmail.com">fg.minisini@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Francesco. I am a{' '}
          <a href="https://www.unimi.it/it">UNIMI</a> undergraduate
          alumnus, Researcher at {' '}
          <a href="https://www.uio.no/english/">University Of Oslo</a>. 
          Previously, I was a Dark Matter Researcher at <a href="">UIS Research Center</a>,
          developer at startup <a href="http://techisland.it/">Techisland</a>, and for
           <a href="https://www.3ai.co/"> 3AI (Progetto 2000)</a>.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Francesco Giuseppe Minisini <Link href="/">@gmail.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
