import React from "react"

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { css } from "@emotion/core"
import { rhythm } from '../utils/typography'

const AboutPage = () => {
  return (
    <Layout>

      <SEO title="About" description ="About The Student Watch website" />

      <div css={css`padding: 0 ${rhythm(2/3)};`}>
        <h1 css={css`text-align: center;`}>About</h1>
        <section>
          <h2>About the Website</h2>
          <p>
            In most discussions on politics and humanitarian issues, the people who are involved are almost always middle-aged or older. Granted, they are the 'responsible' men and women, but college and school students are an important demographic that doesn't get adequate representation on such discussion platforms. I personally would like to know what people my age are thinking about the issues in India and in the world, especially in this particular time when our core values as a country are being attacked. This website is meant as a venue for students to air their opinions and grievances about relevant social issues, and to let their peers across India know about the problems / initiatives at their own institutes.
          </p>
        </section>
        <section>
          <h2>About Me</h2>
          <p>
            My name is Sahel Mohammad Iqbal and I'm a student at NISER, Bhubaneswar. The only relevant introduction needed here is that I'm a believer in <a href="https://secure.mygov.in/read-the-preamble-india/" target="_blank" rel="noreferrer">a whole host of values</a> that seem to be fast going out of fashion throughout the world in general, and in India in particular, with a special emphasis on equality and the freedom of speech and expression.
          </p>
        </section>
        <hr css={css`border: 1px solid grey;`} />
        <section>
          <h3>Why the name?</h3>
          <p>The name of the website is inspired by the concept of a neighborhood watch, which is a group of people looking out for their own neighborhood. The Student Watch doesn't strictly adhere to a similar meaning, because I would like it to stand for a group that not just looks out for the interest of the students, but for that of the nation (and perhaps even the world) as a whole.</p>
        </section>
      </div>
      
    </Layout>
  )
}

export default AboutPage