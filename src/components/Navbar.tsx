
"use client";
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="fixed top-0 w-full z-50">
      <div className="shadow-lg bg-blue-500 dark:bg-blue-900 font-poppins">
        <div className="px-4 mx-auto">
          <nav className="flex items-center justify-between py-4">
            <div className="lg:flex absolute top-0 right-0 mr-4 mt-4">
              <button
                className="flex items-center px-3 py-2 text-black border border-black rounded dark:text-gray-400 navbar-burger hover:text-blue-800 hover:border-blue-300"
                onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-3xl mr-2 border-2 border-green-500"
                src="/b1.jpeg"
                alt="Lion Shopping Logo"
              />
              <h1 className="text-xl font-serif mr-auto">CRAZY CHAT</h1>
            </div>
          </nav>

          {/* Mobile Sidebar */}
          <div
            className={`fixed inset-y-0 right-0 z-50 h-screen p-3 text-gray-400 duration-500 transform bg-blue-50 dark:bg-gray-800 w-80 lg:w-96 lg:block transition-transform ${open ? 'ease-in-opacity translate-x-0' : 'ease-out opacity-0 translate-x-full'}`}>
            <div className="px-4">
              <div className="flex justify-between ">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-3xl mr-2 border-2 border-green-500"
                    src="/b1.jpeg"
                    alt="Logo"
                  />

                  <Link href="/">
                    <span className="text-xl font-serif mr-auto text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-500">CRAZY CHAT</span>
                  </Link>
                </div>

                <button className="p-2 text-gray-700 rounded-md hover:text-blue-500 lg:block" onClick={() => setOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>

              <div className="sidebar-header flex  items-center py-4 px-6">
              </div>
              <ul className="chat-menu">
                <li className="chat-menu-item">
                  <Link href="/" passHref>
                    <span className="flex items-center px-4 py-2 hover:bg-gray-900">
                      <span className="menu-icon text-xl">🏠</span>
                      <span className="menu-label font-serif ml-2">Home</span>
                    </span>
                  </Link>
                </li>
                <li className="chat-menu-item">
                  <Link href="/general" passHref>
                    <span className="flex items-center px-4 py-2 hover:bg-gray-900">
                      <span className="menu-icon text-xl">💬</span>
                      <span className="menu-label font-serif ml-2">General Chat</span>
                    </span>
                  </Link>
                </li>
                <li className="chat-menu-item">
                  <Link href="/friends" passHref>
                    <span className="flex items-center px-4 py-2 hover:bg-gray-900">
                      <span className="menu-icon text-xl">👫</span>
                      <span className="menu-label font-serif ml-2">Friends Chat</span>
                    </span>
                  </Link>
                </li>
                <li className="chat-menu-item">
                  <Link href="/privates" passHref>
                    <span className="flex items-center px-4 py-2 hover:bg-gray-900">
                      <span className="menu-icon text-xl">🔒</span>
                      <span className="menu-label font-serif ml-2">Private Chat</span>
                    </span>
                  </Link>
                </li>
                <li className="chat-menu-item">
                  <Link href="/settings" passHref>
                    <span className="flex items-center px-4 py-2 hover:bg-gray-900">
                      <span className="menu-icon text-xl">⚙️</span>
                      <span className="menu-label font-serif ml-2">Settings</span>
                    </span>
                  </Link>
                </li>
                <li className="chat-menu-item">
                  <Link href="/Logout" passHref>
                    <button className="flex items-center px-4 py-2 hover:bg-gray-900 w-full text-left">
                      <span className="menu-icon text-xl">🔒</span>
                      <span className="menu-label font-serif ml-2">Logout</span>
                    </button>
                  </Link>
                </li>
                <li className="chat-menu-item">
                  <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 w-full text-left">
                  <span className="menu-icon text-xl">🌙</span>
                    <span className="menu-label font-serif ml-2 "> Night-mode</span>
                    <ThemeToggle />
                  </div>
                </li>
              </ul>
              <div className="mt-4 flex justify-center">
                <Link href="/sign-in" className="inline-block px-6 py-3 mr-4 text-xs font-semibold leading-none text-blue-600 border border-blue-400 rounded dark:hover:text-blue-300 dark:text-gray-400 dark:border-gray-400 hover:text-blue-700 hover:border-blue-300">Log In</Link>
                <Link href="/sign-up" className="inline-block px-6 py-3 mr-2 text-xs font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-200 rounded dark:border-blue-300 dark:border dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
