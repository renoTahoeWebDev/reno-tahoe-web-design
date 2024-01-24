import primaryFD from "../images/logos/primary-full-dark.svg"
import primaryF from "../images/logos/primary-full.svg"
import primaryOD from "../images/logos/primary-one-dark.svg"
import primaryO from "../images/logos/primary-one.svg"
import secondaryFD from "../images/logos/secondary-full-dark.svg"
import secondaryF from "../images/logos/secondary-full.svg"
import secondaryOD from "../images/logos/secondary-one-dark.svg"
import secondaryO from "../images/logos/secondary-one.svg"
import treeAmber from "../images/logos/tree-amber.svg"
import treeBlue from "../images/logos/tree-blue.svg"
import treeMoss from "../images/logos/tree-moss.svg"
import faviconDark from "../images/logos/favicon-dark.svg"
import faviconLight from "../images/logos/favicon-light.svg"

export default function Index() {
  const logos = [
    {
      color: "full",
      size: "large",
      theme: "dark",
      type: "primary",
      logo: primaryFD,
    },
    {
      color: "full",
      size: "large",
      theme: "light",
      type: "primary",
      logo: primaryF,
    },
    {
      color: "one",
      size: "large",
      theme: "dark",
      type: "primary",
      logo: primaryOD,
    },
    {
      color: "one",
      size: "large",
      theme: "light",
      type: "primary",
      logo: primaryO,
    },
    {
      color: "full",
      size: "medium",
      theme: "dark",
      type: "secondary",
      logo: secondaryFD,
    },
    {
      color: "full",
      size: "medium",
      theme: "light",
      type: "secondary",
      logo: secondaryF,
    },
    {
      color: "one",
      size: "medium",
      theme: "dark",
      type: "secondary",
      logo: secondaryOD,
    },
    {
      color: "one",
      size: "medium",
      theme: "light",
      type: "secondary",
      logo: secondaryO,
    },
    {
      color: "amber",
      size: "small",
      theme: "none",
      type: "tree",
      logo: treeAmber,
    },
    {
      color: "blue",
      size: "small",
      theme: "none",
      type: "tree",
      logo: treeBlue,
    },
    {
      color: "moss",
      size: "small",
      theme: "none",
      type: "tree",
      logo: treeMoss,
    },
    {
      color: "full",
      size: "x-small",
      theme: "dark",
      type: "favicon",
      logo: faviconDark,
    },
    {
      color: "full",
      size: "x-small",
      theme: "light",
      type: "favicon",
      logo: faviconLight,
    },
  ]

  const darkLogos = logos.filter(
    (logo) => logo.theme === "dark" && logo.type !== "favicon"
  )
  const lightLogos = logos.filter(
    (logo) => logo.theme === "light" && logo.type !== "favicon"
  )
  const trees = logos.filter(
    (logo) => logo.type === "tree" || logo.type === "favicon"
  )

  return (
    <main id="home-wrapper">
      <h1>HOME</h1>
      <h4>Company logos</h4>
      {/* Dark theme logos */}
      <div>
        <div className="dark-theme">
          <h2>Dark Theme Logos</h2>
          <ul>
            {darkLogos.map((logo, index) => (
              <div key={index}>
                <pre>{"TYPE: " + logo.type}</pre>
                <pre>{"COLOR: " + logo.color}</pre>
                <pre>{"SIZE: " + logo.size}</pre>
                <pre>{"THEME: " + logo.theme}</pre>
                <li>
                  <img
                    src={logo.logo}
                    alt={`Reno Tahoe Web Design ${logo.type} ${logo.theme}`}
                    width={200}
                  />
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* Normal theme logos */}
        <div className="light-theme">
          <h2>Light Theme Logos</h2>
          <ul>
            {lightLogos.map((logo, index) => (
              <div key={index}>
                <pre>{"TYPE: " + logo.type}</pre>
                <pre>{"COLOR: " + logo.color}</pre>
                <pre>{"SIZE: " + logo.size}</pre>
                <pre>{"THEME: " + logo.theme}</pre>
                <li>
                  <img
                    src={logo.logo}
                    alt={`Reno Tahoe Web Design ${logo.type} ${logo.theme}`}
                    width={200}
                  />
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* trees */}
        <div className="light-theme">
          <h2>Single Tree Logos</h2>
          <ul>
            {trees.map((logo, index) => (
              <div key={index}>
                <pre>{"TYPE: " + logo.type}</pre>
                <pre>{"COLOR: " + logo.color}</pre>
                <pre>{"SIZE: " + logo.size}</pre>
                <pre>{"THEME: " + logo.theme}</pre>
                <li>
                  <img
                    src={logo.logo}
                    alt={`Reno Tahoe Web Design ${logo.type} ${logo.theme}`}
                    width={100}
                  />
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
