'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector('[data-active="true"]');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [pathname]);

  return (
    <nav className="bg-black bg-opacity-80 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">BishalPachhai</div>

        {/* Combine nav links and auth buttons into one flex container */}
        <div className="flex items-center space-x-8">
          <div className="relative flex items-center space-x-6" ref={navRef}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-active={pathname === link.href}
                className={`pb-1 transition duration-300 ease-in-out ${
                  pathname === link.href ? 'text-purple-400' : 'hover:text-purple-300'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div
              className="absolute bottom-0 h-[2px] bg-purple-500 transition-all duration-300"
              style={{ left: underlineStyle.left, width: underlineStyle.width }}
            />
          </div>

          <div className="flex items-center space-x-4">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="focus:outline-none"
                title="Logout"
              >
                <img
                  src={session.user.image ?? '/default.png'}
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover hover:opacity-80 transition"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </button>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition duration-300">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md font-semibold transition duration-300">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
