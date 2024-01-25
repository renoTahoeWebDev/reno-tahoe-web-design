import { Disclosure } from "@headlessui/react"
import { Link, NavLink } from "@remix-run/react"
import { Theme, useTheme } from "remix-themes"
import logoDark from "../images/logos/primary-full-dark.svg"
import logo from "../images/logos/primary-full.svg"

const NavigationBar = () => {
  const [theme, setTheme] = useTheme()
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link to="/">
                    {theme === Theme.DARK ? (
                      <img className="w-full" src={logoDark} />
                    ) : (
                      <img className="w-full" src={logo} />
                    )}
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-moss dark:border-amber dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-moss dark:border-amber dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-moss dark:border-amber dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/services"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-moss dark:border-amber dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-moss dark:border-amber dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                  <button
                    onClick={() =>
                      setTheme((prev) =>
                        prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
                      )
                    }
                  >
                    {theme === Theme.DARK ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={() =>
                    setTheme((prev) =>
                      prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
                    )
                  }
                >
                  {theme === Theme.DARK ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  )}
                </button>
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber dark:hover:bg-slate"
                >
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 border-moss text-moss block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-slate dark:text-amber dark:border-amber"
                    : "border-transparent text-blue hover:bg-gray-50 hover:border-slate hover:text-moss dark:hover:text-amber block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 border-moss text-moss block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-slate dark:text-amber dark:border-amber"
                    : "border-transparent text-blue hover:bg-gray-50 hover:border-slate hover:text-moss dark:hover:text-amber block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700"
                }
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 border-moss text-moss block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-slate dark:text-amber dark:border-amber"
                    : "border-transparent text-blue hover:bg-gray-50 hover:border-slate hover:text-moss dark:hover:text-amber block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700"
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 border-moss text-moss block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-slate dark:text-amber dark:border-amber"
                    : "border-transparent text-blue hover:bg-gray-50 hover:border-slate hover:text-moss dark:hover:text-amber block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavigationBar
