import emoji from "react-easy-emoji";
import * as portugues from "./portugues";

/*********** sem modificacao de lingua */

const socialMediaLinks = {
    github: "https://github.com/giovannabbottino",
    linkedin: "https://www.linkedin.com/in/giovannabbottino/?locale=en_US",
    gmail: "giovannabbottino@gmail.com",
    gitlab: "https://gitlab.com/giovannabbottino",
    deviantart: "https://www.deviantart.com/giovannabbottino",
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

const currentLang = localStorage.getItem('lang')
if (currentLang === 'pt-br') {
    buttons = portugues.buttons
    greeting = portugues.greeting
    contactInfo = portugues.contactInfo
}

export {
    socialMediaLinks,
    openSource,
    buttons,
    greeting,
    contactInfo,
};
