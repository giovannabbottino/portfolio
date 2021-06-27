import emoji from "react-easy-emoji";

var socialMediaLinks = {
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
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};

var skillsSection = {
    title: "Skills",
    subTitle: "+7 Acrobatics; +8 Intimidation; +8 Performance",

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
        }
    ]
};

var contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: `Discuss a project or just want to say hi? My Inbox is open for all.
    Interessada em trabalho voluntário e projetos extracurriculares`,
    number: "+55 (61) 9 8581-9745",
    email_address: "giovannabbottino@gmail.com"
};

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design",  //Insert stack or technology you have experience in
            progressPercentage: "50%"  //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "70%"
        }
    ]
};

var buttons = {}
var greeting = {}
var educationSection = {}
var experienceSection = {}

const currentLang = localStorage.getItem('lang')
if (currentLang === 'pt-br') {

    buttons={
        skill: "Habilidades",
        experiences: "Experiência",
        education: "Formação Academica",
        contact: "Contato",
        resume: "Veja meu curriculo!",
        more: "Mais!",
        reach: "Me encontre!",
    }

    socialMediaLinks.linkedin = "https://www.linkedin.com/in/giovannabbottino/"

    skillsSection.title = "Habilidades"
    skillsSection.subTitle = "+7 Acrobacia; +8 Intimidação; +8 Performance"

    contactInfo.title = emoji("Entre em contato ☎️")
    contactInfo.subtitle = `Discutir um projeto ou apenas dizer oi? Minha caixa de entrada está aberta para todos.
    Interessada em trabalho voluntário e projetos extracurriculares`

    greeting = {
        /* Your Summary And Greeting Section */
        username: "Giovanna B Bottino",
        title: "Olá! Tudo bem?",
        subTitle: `Meu nome é Giovanna, sou uma desenvolvedora web full stack e cientista de dados júnior.
        Desenvolvo projetos que usam de técnicas de Análise Exploratória, Visualização de Dados e Machine Learning.
        Eu também sou uma artificer de nível 6 na minha atual campanha de D&D.`,
        resumeLink: "https://drive.google.com/file/d/1Qu7755tZ9CHiPI3ZTFZDq5zYWmnemaSh/view?usp=sharing"
    };
    educationSection = {
        title: "Formação Academica",
        subtitle: "Já li grande parte dos livros de D&D.",
        display: true, 
        schools: [
            {
                schoolName: "BBI of Chicago",
                logo: "data:image/png;base64,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",
                link: "https://www.bbiofchicago.com/",
                subHeader: "Master of Business Administration - MBA",
                duration: "2019 - 2020",
                desc: "Curso de Extensão em Gestão de Negócios com foco em Competências Comportamentais",
            },
            {
            schoolName: "Universidade de Brasília",
            logo: "https://pbs.twimg.com/profile_images/1069542803586326528/bhfxCFeF_400x400.jpg",
            link: "http://www.unb.br/",
            subHeader: "Bacharelado em Engenharia de Software",
            duration: "2017 - 2023",
            desc: `A Engenharia de Software é a integração dos princípios da Matemática e Ciência da Computação com as práticas da Engenharia, 
            com objetivo de desenvolver modelos sistemáticos e técnicas confiáveis para a produção de software de alta qualidade.`,
            descBullets: ["Presidente do IEEE RAS UnB",
                        "Diretora de Gestão de Pessoas na empresa júnior",
                        "Diretora de Administração e Finanças no diretório acadêmico",
                        "Pesquisadora de Desing Thinking e Experiência de Usuário no ITRAC",
                        "Pesquisadora de inteligência artificial no AILab",
                        "2 x Monitoria de Orientação e Objeto",
                        "1 x Monitoria de Probabilidade e estatistica",
                    ]
            },
            {
            schoolName: "Instituto Federal de Brasília",
            logo: "data:image/png;base64,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",
            link: "https://www.ifb.edu.br/",
            subHeader: "Tecnico em programação para jogos digitais",
            duration: "2018 - 2019",
            desc: `O Técnico em Programação de Jogos Digitais realiza o planejamento do processo de produção do jogo digital e incorporação 
            dos elementos multimídia à plataforma de desenvolvimento, sendo responsável pela programação e integração desses elementos`,
            }
        ]
    };
    experienceSection = {
        title: "Experiências",
        subtitle: "MATEI 3 DRAGÕES EM D&D",

        experiences: [
            {
                title: "Simplicode",
                job_title: "Professora",
                description: 
                    `Professora de programação para crianças de 8 a 12 anos durante as horas vagas`
                ,
                start_date: "Jul 2020",
                color: "#5FDECB",
            },
            {
                title: "AI.LAB - UnB",
                job_title: "Desenvolvedora de Software",
                description: `Projeto e crio soluções de software 
                em Python para integração entre
                inteligência artificial e uma plataforma legal.
                Além de pesquisar acadêmicamente sobre Machine Learning e 
                o uso de Kubeflow com Kubernetes`,
                start_date: "Março 2020",
                color: "#5FDECB",
            },
            {
                title: "Banco do Brasil",
                job_title: "Estágiaria de analise de dados",
                description: `Desenvolvia e implementava soluções de
                software baseadas nos requisitos do cliente.
                Auxiliava em várias atividades de ciência de dados e análise
                Programava em Python; Django/Flask e JavaScript;
                React.
                Era responsável por automatizar o envio de emails com
                análise de desempenho.
                Produzi e fiz manutenção de banco de dados alimentado
                por web scraping.`,
                start_date: "Maio 2019",
                color: "#5FDECB",
            }
        ]
    };
}
else {

    buttons={
        skill: "Skills",
        experiences: "Experiences",
        education: "Education",
        contact: "Contact Me",
        resume: "See my resume",
        more: "MORE",
        reach: "Reach Out to me!",
    }

    greeting = {
        /* Your Summary And Greeting Section */
        username: "Giovanna B Bottino",
        title: "Hello! How are you?",
        subTitle: `My name is Giovanna, I am a full-stack web developer and junior data scientist.
        I develop projects that use Exploratory Analysis, Data Visualization and Machine Learning techniques.
        I'm also a level 6 artificer in my current D&D campaign.`,
        resumeLink: "https://drive.google.com/file/d/1jqHyyEXYHJ3GM8Xc-vfEQUeWp5FL5-iJ/view?usp=sharing"
    };

    educationSection = {
        title: "Educação",
        subtitle: "Já li grande parte dos livros de D&D.",
        display: true, 
        schools: [
            {
                schoolName: "BBI of Chicago",
                logo: "data:image/png;base64,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",
                link: "https://www.bbiofchicago.com/",
                subHeader: "Master of Business Administration - MBA",
                duration: "2019 - 2020",
                desc: "Extension Course in Business Management focusing on Behavioral Skills",
            },
            {
            schoolName: "University of Brasilia",
            logo: "https://pbs.twimg.com/profile_images/1069542803586326528/bhfxCFeF_400x400.jpg",
            link: "http://www.unb.br/",
            subHeader: "Bachelor of Software Engineering",
            duration: "2017 - 2023",
            desc: `Software Engineering is the integration of the principles of Mathematics and Computer Science with Engineering practices, 
            with the objective of developing systematic models and reliable techniques for the production of high quality software.`,
            descBullets: ["President of IEEE RAS UnB",
                    "Director of People Management at the junior company",
                    "Director of Administration and Finance in the Academic Directory",
                    "Desing Thinking and User Experience Researcher at ITRAC",
                    "Artificial Intelligence Researcher at AILab",
                    "2 x Orientation and Object Teaching Assistant",
                    "1 x Probability Teaching Assistant",
                    ]
            },
            {
            schoolName: "Federal Institute of Brasilia",
            logo: "data:image/png;base64,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",
            link: "https://www.ifb.edu.br/",
            subHeader: "Digital Games Programming Technician",
            duration: "2018 - 2019",
            desc: `The Digital Game Programming Technician carries out the planning of the digital game production process and the incorporation 
            of multimedia elements into the development platform, being responsible for programming and integrating these elements`,
            }
        ]
    };

    experienceSection = {
        title: "Experiences",
        subtitle: "I HAVE KILLED 3 DRAGONS IN D&D",

        experiences: [
            {
                title: "Simplicode",
                job_title: "Teacher",
                description: `Programming teacher for children aged 8 to 12 during free time`,
                start_date: "July 2020",
                color: "#5FDECB",
            },
            {
                title: "AI.LAB - UnB",
                job_title: "Software Developer",
                description: `I design and create software solutions in Python for 
                integration between artificial intelligence and a legal platform. 
                In addition to academic research on Machine Learning and the use of 
                Kubeflow with Kubernetes`,
                start_date: "March 2020",
                color: "#5FDECB",
            },
            {
                title: "Bank of Brazil",
                job_title: "Data analytics intern",
                description: `Developed and implemented solutions for
                software required in customer requirements.
                Helps with various data science and analysis activities
                Python program; Django / Flask and JavaScript;
                To react.
                Was responsible for automating the sending of emails with
                performance analysis.
                Powered database products and maintenance
                by scraping the web.` ,
                start_date: "May 2019",
                color: "#5FDECB",
            }
        ]
    };
}
export {
    greeting,
    educationSection,
    socialMediaLinks,
    skillsSection,
    contactInfo,
    openSource,
    experienceSection,
    techStack,
    buttons,
};
