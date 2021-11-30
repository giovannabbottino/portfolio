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

var project = {
    title: "Projects",
    subTitle: "Some projects I participated",
    list: [
        {
            title: "Clustering",
            image: "https://miro.medium.com/max/1400/1*S9hdbvJ1v4AQC1xktKXisw.png",
            description: `Unsupervised machine learning, that is, it 
            does not need to have a prior classification. 
            Tends to group more similar items based on some 
            similarity metric. Using summarization and 
            clustering algorithms it is possible to group 
            texts by their similarity`,
            button: [{ 
                title: "more",
                url: "https://www.canva.com/design/DAExNMxeQR4/A0cdjUod7JWZskTl53o1jA/view?utm_content=DAExNMxeQR4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" 
            }],
            tags:[{ 
                fontAwesomeClassname: "fab fa-python"
            },{ 
                fontAwesomeClassname: "fas fa-brain"
            },{ 
                tag: "NLTK"
            },{ 
                tag: "KMeans"
            }]
        },
        {
            title: "ANAC-ID",
            image: "https://datawow.s3.amazonaws.com/blog/43/image_1/facial-recognition-connected-real-estate.png",
            description: `ANAC-id is the artificial intelligence 
            algorithm developed in-house for analyzing 
            images in the Agency's databases.`,
            button: [{ 
                title: "more",
                url: "https://www.canva.com/design/DAExNMxeQR4/A0cdjUod7JWZskTl53o1jA/view?utm_content=DAExNMxeQR4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" 
            }],
            tags:[{ 
                fontAwesomeClassname: "fab fa-python"
            },{ 
                fontAwesomeClassname: "fas fa-brain"
            },{ 
                tag: "face_recognition"
            },{ 
                tag: "face_compare"
            },{ 
                tag: "YOLO"
            },{ 
                tag: "DeepFace"
            }]
        },
        {
            title: "Classification",
            image: "https://minerandodados.com.br/wp-content/uploads/2017/12/margens.png",
            description: `Classification is supervised machine 
            learning, it must have a prior classification.`,
            button: [{ 
                title: "more",
                url: "https://www.canva.com/design/DAExNMxeQR4/A0cdjUod7JWZskTl53o1jA/view?utm_content=DAExNMxeQR4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" 
            }],
            tags:[{ 
                fontAwesomeClassname: "fab fa-python"
            },{ 
                fontAwesomeClassname: "fas fa-brain"
            },{ 
                tag: "VSM"
            },{ 
                tag: "SVM "
            }]
        }
    ]
}


var certification = {
    title: "Certification",
    subTitle: "Some stuff I have made",
    list: [
        {
            title: "Exchange Program",
            image: "https://drive.google.com/thumbnail?id=1kuKg88cVrxAfjYC1sZi9HomnVK8XSLRd",
            button: [{ 
                title: "certificate",
                url: "https://drive.google.com/file/d/1kuKg88cVrxAfjYC1sZi9HomnVK8XSLRd/view?usp=sharing" 
            }, 
            { 
                title: "site",
                url: "https://aiesec.org.br/" 
            }]
        },
        {
            title: "MBA Jr Leardership",
            image: "https://drive.google.com/thumbnail?id=1VE-GX9KW4Sv17Mj08OOAPZyL6SaEeG3X",
            button: [{ 
                title: "certificate",
                url: "https://drive.google.com/file/d/1VE-GX9KW4Sv17Mj08OOAPZyL6SaEeG3X/view?usp=sharing" 
            }, 
            { 
                title: "course",
                url: "https://www.bbiofchicago.com/mbajr-gncc" 
            }]
        },
        {
            title: "Digital Games",
            image: "https://drive.google.com/thumbnail?id=1e6rAq_ujBRjCK8exRGFn3KmJmoDifUc4",
            button: [{ 
                title: "certificate",
                url: "https://drive.google.com/file/d/1e6rAq_ujBRjCK8exRGFn3KmJmoDifUc4/view?usp=sharing" 
            }]
        },
        {
            title: "Excel VBA Course",
            image: "https://cursos.alura.com.br/assets/images/certificates/certificate-alura-pt_BR.png",
            button: [{ 
                title: "certificate",
                url: "https://cursos.alura.com.br/degree/certificate/f5048e8a-48bc-4e52-a8cb-ead197e0deb5" 
            }, 
            { 
                title: "course",
                url: "https://www.alura.com.br/formacao-excel-vba" 
            }]
        },
        {
            title: "Power BI Course",
            image: "https://cursos.alura.com.br/assets/images/certificates/certificate-alura-pt_BR.png",
            button: [{ 
                title: "certificate",
                url: "https://cursos.alura.com.br/degree/certificate/2761aa89-509e-4203-9ff6-938c6ea9f86f" 
            }, 
            { 
                title: "course",
                url: "https://www.alura.com.br/formacao-power-bi" 
            }]
        },
        {
            title: "CPBSB Volunteer",
            image: "https://drive.google.com/thumbnail?id=1_g36fAFjFKOZ4jHrMuwkFQMaPLPj7Ikv",
            button: [{ 
                title: "certificate",
                url: "https://drive.google.com/file/d/1_g36fAFjFKOZ4jHrMuwkFQMaPLPj7Ikv/view?usp=sharing" 
            }, 
            { 
                title: "site",
                url: "https://brasil.campus-party.org/" 
            }]
        },
        {
            title: "MindTheSec Volunteer",
            image: "https://drive.google.com/thumbnail?id=1uUQmhLDTOUFOy6I8UC61jcZT6bxIzCd2",
            button: [{ 
                title: "certificate",
                url: "https://drive.google.com/file/d/1uUQmhLDTOUFOy6I8UC61jcZT6bxIzCd2/view?usp=sharing" 
            }, 
            { 
                title: "site",
                url: "https://www.mindthesec.com.br/" 
            }]
        }
    ]
}

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
            image: "futuro.svg",
            link: "https://www.youtube.com/watch?v=sMllDRKBYMo&t=237s&ab_channel=AprendizdeInterc%C3%A2mbio"
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
    certification = portugues.certification
    academic = portugues.academic
    talk = portugues.talk
}

export {
    socialMediaLinks,
    openSource,
    buttons,
    greeting,
    contactInfo,
    project,
    certification,
    talk,
    academic,
};
