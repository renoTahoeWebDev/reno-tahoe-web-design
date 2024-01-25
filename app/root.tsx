import type {
  MetaFunction,
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"

import stylesheet from "~/tailwind.css"
import { themeSessionResolver } from "./utils/session.server"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import NavigationBar from "./components/navigation-bar"
import { ReactNode } from "react"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
]

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
  },
  {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
  },
  {
    title: "Small Business Website Development | Reno Tahoe Web Design LLC",
  },
  {
    name: "description",
    content:
      "Website design service in the greater Reno Nevada area tailored for small companies, 100% hand-coded websites with superior functionality and quality",
  },
  {
    name: "keywords",
    content:
      "small business web designer usa, small business web developer usa, web developer near me reno, web developer near me tahoe, affordable website design reno, affordable business website reno, custom website usa, affordable custom website reno, web design services usa, web design company reno",
  },
]

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)

  return { theme: getTheme() }
}

export default function AppWithThemeProvider() {
  const { theme } = useLoaderData<typeof loader>()

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  )
}

function App() {
  const { theme } = useLoaderData<typeof loader>()
  const [themeX] = useTheme()

  return (
    <html lang="en" data-theme={themeX ?? ""}>
      <head>
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="bg-white text-blue dark:bg-blue dark:text-white h-full selection:bg-slate dark:selection:bg-amber">
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  )
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavigationBar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
