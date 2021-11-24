import emoji from "react-easy-emoji";
import * as portugues from "./portugues";

/*********** sem modificacao de lingua */

const socialMediaLinks = {
    github: "https://github.com/giovannabbottino",
    linkedin: "https://www.linkedin.com/in/giovannabbottino/?locale=en_US",
    gmail: "giovannabbottino@gmail.com",
    gitlab: "https://gitlab.com/giovannabbottino",
    instagram: "https://instagram.com/giovannabbottino"
};

const openSource = {
    githubConvertedToken: "Your Github Converted Token",
    githubUserName: "giovannabbottino",
    showGithubProfile: "true"
};


/*********** com modificacao de lingua */

var buttons={
    projects: "Projects",
    certifications: "Certifications",
    talks: "Talks",
    academic: "Academic",
    contact: "Contact Me",
    resume: "See my resume",
    more: "MORE",
    reach: "Reach Out to me!",
}

var greeting = {
    /* Your Summary And Greeting Section */
    username: "Giovanna B Bottino",
    title: "Hello! How are you?",
    subTitle: `My name is Giovanna, I am a full-stack web developer and junior data scientist.
    I develop projects that use Exploratory Analysis, Data Visualization and Machine Learning techniques.
    I'm also a level 6 artificer in my current D&D campaign.`,
    resumeLink: "https://drive.google.com/file/d/1jqHyyEXYHJ3GM8Xc-vfEQUeWp5FL5-iJ/view?usp=sharing"
};

var contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: `Discuss a project or just want to say hi? My Inbox is open for all.`,
    number: "+55 (61) 9 8581-9745",
    email_address: "giovannabbottino@gmail.com"
};

var talk = {
    title: "Talks",
    subTitle: "Give me a microphone and you will see me speak forever",
    list: [
        {
            title: "My Professional Exchange | Working in TURKEY",
            subTitle: `The Information Technology professional is 
            sought after around the world. Therefore, exchange students 
            have increasingly sought and invested in programs in this 
            area and those who choose to build a career abroad see a great 
            opportunity for growth!` ,
            embedId: "SIyXYRNqVXc"
        },
        {
            title: "Schedule your Professional Future Abroad",
            subTitle: `If you are a student or IT professional and want 
            to start your career as a programmer abroad, AIESEC Brasília 
            invites you to the webinar: Plan your professional future abroad` ,
            image: "futuro.svg"
        }
    ]
}
var academic = {
    title: "Academic",
    subTitle: "Some studies that I participated",
    list: [
        {
            title: "Edubot Project",
            subTitle: `Analyzing the Adaptation of Robotics Classes to the 
            Remote Environment. Published in: 2021 Latin 
            American Robotics Symposium, SBR and WRE` ,
            button: [{ 
                title: "site",
                url: "http://www.natalnet.br/wre2021/" 
            }, 
            { 
                title: "full text",
                url: "https://ieeexplore.ieee.org/document/9605467" 
            }]
        },
        {
            title: "Artificial Intelligence Tests ",
            subTitle: `Development and maintenance methodology:
            tests on Artificial Intelligence systems` ,
            button: [{ 
                title: "full text",
                url: "https://drive.google.com/file/d/1dRCTol6n1ZqIiFdqPBnM136MPgBFrxRN/view?usp=sharing" 
            }]
        },        {
            title: "PIBITI",
            subTitle: `Scientific Initiation Program in Technological 
            Development and Innovation - PIBITI (CNPq) 
            2021/2022. `,
            button: [ {
                title: "site",
                url: "https://sae.unb.br/"
            }
            ]
        }
    ]
}

const currentLang = localStorage.getItem('lang')
if (currentLang === 'pt-br') {
    buttons = portugues.buttons
    greeting = portugues.greeting
    contactInfo = portugues.contactInfo
    academic = portugues.academic
    talk = portugues.talk
}

export {
    socialMediaLinks,
    openSource,
    buttons,
    greeting,
    contactInfo,
    talk,
    academic,
};
