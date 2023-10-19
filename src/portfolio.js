/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lakshmi Priyanka Sreeramakavacham",
  title: "Hola, I'm Priyanka",
  subTitle: emoji(
    "🚀 Welcome to my digital playground! 🖥️ I\'m Priyanka, a passionate Computer Scientist and Engineer, turning lines of code into innovative solutions. 🌟 Explore my journey, skills, and the tech innovations that define me. 🌐✨"
  ),
  resumeLink:
    "https://online.fliphtml5.com/ckgaz/aney/#p=1", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/priyanka5b4",
  linkedin: "https://www.linkedin.com/in/skavacham-priyanka/",
  gmail: "lsreeram@buffalo.edu",
  medium: "https://medium.com/@skavacham.priyanka",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University at Buffalo, SUNY",
      logo: require("./assets/images/UB.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - December 2024",
      desc: "I\'m currently pursuing my master\'s degree in Computer Science and Engineering at the University at Buffalo, where I\'m sharpening my skills and knowledge to push the boundaries of technology. 🎓💻",
      descBullets: [
        "🎓 Pursuing a Master's degree in Computer Science and Engineering.",
        "🔍 Focused on building a strong foundation in computer science, exploring advanced topics, and gaining hands-on experience in the field.", 
        "🌆 Located in Buffalo, New York, UB offers a vibrant academic environment and access to cutting-edge resources in technology and research.",
        "🤝 Collaborative learning and access to experienced faculty make UB an ideal place to nurture my passion for technology and innovation.",
        "🌐 An environment that encourages exploration and fosters my commitment to staying at the forefront of the ever-evolving tech landscape.",
        "🚀 Aiming to become an expert in data science and machine learning, with UB as the launching pad for my journey into these exciting fields."
      ]
    },
    {
      schoolName: "CMR College of Engineering & Technology",
      logo: require("./assets/images/cmr.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Sep 2017 - August 2021",
      desc: "🎓 I pursued my Bachelor's degree at CMR College of Engineering and Technology, where I excelled in a diverse curriculum and ranked in the top 3% of my program. 🏆📚",
      descBullets: [
        "💻 Mastered data structures and algorithms, providing a strong foundation in computer programming.",
        "📚 Studied a diverse range of subjects, including Operating Systems, Web Technologies, Computer Security, AI, and Software Development Lifecycles.",
        "🌐 Acquired comprehensive knowledge in these areas, laying the groundwork for a well-rounded skill set."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Java Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Software Engineer at Infosys",
      company: "Infosys",
      companylogo: require("./assets/images/Infosys_logo.png"),
      date: "August 2021 - May 2023",
      desc: "Key contributions to .NET web applications, legacy app transformation, performance optimization, and more at Infosys - Pfizer Japan.",
      descBullets: [
        "🛠️ Developed and enhanced .NET web applications with .NET Web Forms and .NET Core, leveraging MSSQL databases.",
        "🌐 Modernized four legacy .NET web apps for cross-browser compatibility post-Internet Explorer deprecation, earning INSTA RISE Award.",
        "🚀 Conducted successful proof-of-concepts (POCs) to optimize the performance of data-intensive systems.",
        "👥 Collaborated with consultants to improve existing features and develop new applications tailored to Pfizer's needs.",
        "📈 Facilitated smooth data transfer using batch programs with SSIS packages, ensuring data integrity during migrations."
      ]
    },    
    {
      role: "Software Development Intern",
      company: "Siemens EDA",
      companylogo: require("./assets/images/siemens.jpg"),
      date: "August 2020 – August 2021",
      desc: "Led Angular migration project, gained real-world experience, top 10 intern.",
      descBullets: [
        "🛠️ Successfully migrated an Angular JS project to the latest version of Angular within the given timeframe.",
        "🚀 Gained hands-on experience with real-life scenarios, including deployment, testing, and version control on a private Bitbucket server.",
        "👥 Worked within an AGILE model using JIRA and collaborated with a dynamic team.",
        "🏆 Among the top 10 students selected for the internship out of a program with over 600 peers.",
        "📈 Achieved valuable insights into modern software development practices, setting the stage for a promising career in technology."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "My Journey Through Coursework and Passion Projects",
  projects: [
    {
      image: require("./assets/images/pwa.webp"),
      projectName: "Custom Blockchain in Python",
      projectDesc: "Developed a custom blockchain from scratch in Python. Implemented proof-of-work, consensus, and public-private cryptography.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/priyanka5b4/Custom%20blockchain"
        }
        // You can add extra buttons or links here.
      ]
    }
    ,
    {
      image: require("./assets/images/pwa.webp"),
      projectName: "Crime Data Analysis with Python and scikit-learn",
      projectDesc: "Analyzed crime data using Python, scikit-learn, and data preprocessing techniques. Explored trends and insights using matplotlib, numpy, and pandas.",
      footerLink: [
        {
          name: "GitHub Repository (Coming Soon)",
          url: "https://github.com/yourusername/your-crime-data-analysis-repo"
        }
        // You can add extra buttons or links here.
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
        {
          title: "PFIZER JAPAN GLORY AWARD FY23",
          subtitle: "Received for developing an automation tool using ASP.NET CORE that processes and stores large user data in an Oracle database, highlighting performance, reusability, and scaling aspects.",
          image: require("./assets/images/pfizer.jpg"),
          imageAlt: "PFIZER JAPAN GLORY AWARD Logo",
          footerLink: [
            {
              name: "Certification",
              url: "https://your-certification-link-here"
            }
          ]
        },
        {
          title: "Amdocs WCode Clan 2022 - Finalist",
          subtitle: "Finalist in the WCode Clan 2022 edition, aimed at encouraging female coders worldwide.",
          image: require("./assets/images/amdocs.jpg"),
          imageAlt: "Amdocs WCode Clan Logo",
          footerLink: [
            {
              name: "Award Letter",
              url: "https://your-award-letter-link-here"
            }
          ]
        },
        {
          title: "Insta Rise Award (IRISE)",
          subtitle: "Received the IRISE (Real, Instant, Specific, Excite) award.",
          image: require("./assets/images/instarise.png"),
          imageAlt: "IRISE Award Logo",
          footerLink: [
            {
              name: "Award Details",
              url: "https://your-award-details-link-here"
            }
          ]
        }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-4434749174",
  email_address: "lsreeram@buffalo.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
