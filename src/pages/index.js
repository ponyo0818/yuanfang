import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={dark ? `../../icons/darth-vader.png` : `../../icons/r2-d2.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
        />
        {!unemployed && (
          <p className="mt-2">
            <b> Hey! my name is</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Hacker by night` : `Grad student by night`}
            </i>
          </p>
          <p className="mt-2">
            <b> I build and deploy apps in the cloud </b>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <OutboundLink
            href="https://github.com/ponyo0818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/in/yuanfang0818/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </OutboundLink>
          <a
            href="mailto:yuanfang0818@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <OutboundLink href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </OutboundLink>
          <OutboundLink href="https://www.instagram.com/succulent_north_carolina/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={["fab", "instagram-square"]}
              className="icons instagram"
              title="Instagram"
            />
          </OutboundLink>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
