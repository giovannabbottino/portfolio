import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Giovanna B Bottino",
    title: "Hello there, I'm Giovanna",
    subTitle: "A Junior Software Developer. Software Engineering student at UnB. MBA Jr. by BBI of Chicago. Digital games programmer by the federal institute of brasília. Interested in volunteer work and extracurricular projects.",
    resumeLink: "https://drive.google.com/file/d/1rwmiBZjHDkNmr6AAGjo9wUptACB76mVG/view?usp=sharing"
};

const socialMediaLinks = {
    github: "https://github.com/giovannabbottino",
    linkedin: "https://www.linkedin.com/in/giovannabbottino/",
    gmail: "giovannabbottino@gmail.com",
    gitlab: "https://gitlab.com/giovannabbottino",
    deviantart: "https://www.deviantart.com/giovannabbottino",
    instagram: "https://instagram.com/giovannabbottino"
};

const education = [
    {
        name: "UnB",
        image: "../../assests/images/unb.png",
        link: "http://www.unb.br/"
    },
    {
        name: "IFB",
        image: "../../assests/images/ifb.png",
        link: "https://www.ifb.edu.br/"
    },
    {
        name: "BBI of Chicago",
        image: "../../assests/images/bbi.png",
        link: "https://www.bbiofchicago.com/"
    }
];

const openSource = {
    githubConvertedToken: "Your Github Converted Token",
    githubUserName: "giovannabbottino",
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};

const skillsSection = {
    title: "What i do",
    subTitle: "YOU HAVE TO FARM TO EARN XP",

    /* Make Sure You include correct Font Awesome Classname to view your icon
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
        },
        {
            skillName: "django",
            fontAwesomeClassname: "fab fa-django"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "C",
            fontAwesomeClassname: "fab fa-c"
        },
        {
            skillName: "C++",
            fontAwesomeClassname: "fab fa-c++"
        },
        {
            skillName: "C#",
            fontAwesomeClassname: "fab fa-c#"
        },
        {
            skillName: "ruby",
            fontAwesomeClassname: "fab fa-ruby"
        }
        ,
        {
            skillName: "on rails",
            fontAwesomeClassname: "fab fa-on-rails"
        }
    ]
};

const experienceSection = {
    title: "Experiences",
    subtitle: "I HAVE KILLED 3 DRAGONS IN D&D",

    experiences: [
        {
            title: "AI.LAB - UnB",
            job_title: "Inter",
            description: [
                "Academic research related to Machine Learning;", 
                "Study of the use of Kubeflow with Kubernetes."
            ],
            start_date: "March 2020",
            end_date: "Currently"
        },
        {
            title: "Bank of Brazil",
            job_title: "Inter",
            description: [
                "Responsible for automating the sending of emails with performance analysis;",
                "Production and maintenance of database powered by web scraping;",
                "Assist in various data science and analytics activities."
            ],
            start_date: "May 2019",
            end_date: "March 2020"
        }
    ]
};
// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
            link: "http://saayahealth.com/"
        },
        {
            image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
            link: "http://nextu.se/"
        }
    ]
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+55-61985819745",
    email_address: "giovannabbottino@gmail.com"
};


export {
    greeting,
    socialMediaLinks,
    skillsSection,
    contactInfo,
    openSource,
    bigProjects,
    experienceSection,
    education
};
