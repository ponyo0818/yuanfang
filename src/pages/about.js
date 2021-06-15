import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
    showProject,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const certificateLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/luke-${toString()}.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am an&nbsp;
            <a
              href="https://www.indeed.com/career-advice/finding-a-job/work-experience"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intermediate
            </a>
            &nbsp;
            <b>{occupation}</b> discovering the world of software development.
            I'm a Raleigh-Durham (RTP, NC) based and specialize in cloud engineering.
            My current role at American Family Insurance is designing and
            implementing tools, cloud solutions that helps development teams
            improve the engineering productivity.
          </p>
           <p className="i-5">
            I'm part-time pursuing a Master of computer science degree in
             <a href = "https://omscs.gatech.edu/" target="_blank" rel="noopener noreferrer"> Georgia Tech. </a>
           I completed courses such as "Information Security", "Computer Networks",
          "Software Dev Process", "Software Arch & Design", and "Database System Concepts & Design" etc.
          Successfully maintaining a 4.0 GPA until now :)
          </p>
          <p className="i-5">
            In my spare time, I check new tech-related stuffs on Youtube, Pluralsight
            etc, Manage my TitTok creator account&nbsp;
            <a href="https://vm.tiktok.com/ZMdj5XaLP/" target="_blank" rel="noopener noreferrer">
              Succulents Wonderland
            </a>
            , Workout with Nintendo switch, Taking care of my plants (succulents).
          </p>
          {showProject && (
            <p className="i-5">
              Check out my <Link to="/projects">projects</Link> to see what I've
              been up to!
            </p>
          )}
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:yuanfang0818@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are the certificates I got:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{certificateLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are the online courses I took and liked:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        showProject
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
