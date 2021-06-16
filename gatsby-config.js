/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Yuan Fang`,
    author: `Yuan Fang`,
    firstName: `Yuan`,
    lastName: `Fang`,
    description: `Yuan Fang's personal site`,
    occupation: `Software Engineer`,
    keywords: [`Yuan`, `Fang`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    showProject: false,
    designations: [
      `Lifelong Learner`,
      `Problem Solver`,
      `Succulents Enthusiast`,
    ],
    readingList: [
      {
        title: `AWS Certified Developer – Associate`,
        author: ` Amazon Web Service`,
        link: `https://www.credly.com/badges/ec2382e9-85f0-4872-a5e9-7aa473ff6d19?source=linked_in_profile`,
      },
      {
        title: `AWS Certified Solutions Architect – Associate`,
        author: `Amazon Web Service`,
        link: `https://www.credly.com/badges/d05672a8-7b53-455a-a096-6f896ff57d24/public_url`,
      },
      {
        title: `AWS Certified Cloud Practitioner`,
        author: `Amazon Web Service`,
        link: `https://www.credly.com/badges/9bf828c5-f066-4aaa-95c5-174d02f2bfc7/public_url`,
      },
      {
        title: `Digital Builder Program 2021 | Cohort-1`,
        author: `American Family Insurance (Internal)`,
        link: `https://badgr.com/public/assertions/KmKnDNLcRUiU1Mu69uQNGw`,
      },
      {
        title: `Python Data Structures`,
        author: `Coursera`,
        link: `https://www.coursera.org/account/accomplishments/certificate/CPR58RFE4DHD`,
      },
    ],
    showsList: [
      {
        title: `Implementing Terraform with AWS`,
        author: `Pluralsight`,
        link: `https://www.pluralsight.com/courses/implementing-terraform-aws`,
      },
      {
        title: `Defensive Coding in Java`,
        author: `Pluralsight`,
        link: `https://www.pluralsight.com/courses/defensive-programming-java`,
      },
      {
        title: `Java: Writing Readable and Maintainable Code`,
        author: `Pluralsight`,
        link: `https://www.pluralsight.com/courses/java-writing-readable-maintainable-code`,
      },
      {
        title: `Single Page Applications with Vue.js`,
        author: `Pluralsight`,
        link: `https://www.pluralsight.com/courses/vue-js-single-page-applications`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yuan Fang's Personal Site`,
        short_name: `yfang`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
   {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "275987573",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  ],
}
