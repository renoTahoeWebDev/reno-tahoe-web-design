import type { MetaFunction, LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import styles from "./root.css"
import MainNavigation from "./components/main-navigation"

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Reno Tahoe Web Design LLC",
    viewport: "width=device-width,initial-scale=1",
  },
  {
    name: "description",
    content:
      "Website design service in the greater Reno Nevada area tailored for small companies",
  },
]

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,200&display=swap",
  },
  {
    rel: "stylesheet",
    href: styles,
  },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
