import emoji from "react-easy-emoji";

var buttons={
    projects: "Projetos",
    certifications: "Certificações",
    talks: "Conversas",
    academic: "Academico",
    contact: "Entre em contato",
    resume: "Veja meu CV",
    more: "MAIS",
    reach: "Fale comigo!",
}

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Giovanna B Bottino",
    title: "Oie! Tudo bem?",
    subTitle: `Meu nome é Giovanna, sou uma desenvolvedora web full-stack e cientista de dados júnior.
    Desenvolvo projetos que utilizam técnicas de Análise Exploratória, Visualização de Dados e Aprendizado de Máquina.
    Também sou uma artífice de nível 6 em minha campanha atual de D&D.`,
    resumeLink: "https://drive.google.com/file/d/1Qu7755tZ9CHiPI3ZTFZDq5zYWmnemaSh/view?usp=sharing"
};

const contactInfo = {
    title: emoji("Entre em contato! ☎️"),
    subtitle: `Discutir um projeto ou apenas quer dizer oi? Meus contatos estão abertos para todos.`,
    number: "+55 (61) 9 8581-9745",
    email_address: "giovannabbottino@gmail.com"
};

var academic = {
    title: "Acadêmico",
    subTitle: "Alguns estudos dos quais participei",
    list: [
        {
            title: "Edubot Project",
            subTitle: `Analyzing the Adaptation of Robotics Classes to the 
            Remote Environment. Publicado em: 2021 Latin 
            American Robotics Symposium, SBR and WRE` ,
            button: [{ 
                title: "website",
                url: "http://www.natalnet.br/wre2021/" 
            }, 
            { 
                title: "artigo",
                url: "https://ieeexplore.ieee.org/document/9605467" 
            }]
        },
        {
            title: "PIBITI",
            subTitle: `Programa de Iniciação Científica em Tecnologia
            Desenvolvimento e Inovação - PIBITI (CNPq)
            2021/2022. `,
            button: [ {
                title: "website",
                url: "https://sae.unb.br/"
            }
            ]
        },
        {
            title: "AI.LAB",
            subTitle: `Universidade de Brasília (UnB) Laboratório de
            Inteligência Artificial` ,
            button: [{ 
                title: "website",
                url: "https://ailab.unb.br/" 
            }]
        },
        {
            title: "ITRAC",
            subTitle: `Information Technology - Research and Application 
            Center` ,
            button: [{ 
                title: "website",
                url: "http://itrac.unb.br/" 
            }]
        }
    ]
}

export {
    buttons,
    greeting,
    contactInfo,
    academic,
};
