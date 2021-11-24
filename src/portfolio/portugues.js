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

const talk = {
    title: "Conversas",
    subTitle: "Me dê um microfone e você me verá falar para sempre",
    list: [
        {
            title: "Meu Intercâmbio Profissional | TURQUIA",
            subTitle: `O profissional de Tecnologia da Informação 
            é cobiçado ao redor do mundo. Por isso, 
            intercambistas têm cada vez mais procurado e 
            investido em programas nessa área  e quem opta 
            por construir uma carreira fora do país veem uma 
            grande oportunidade de crescimento!` ,
            embedId: "SIyXYRNqVXc"
        },
        {
            title: "Programe o seu Futuro Profissional no Exterior",
            subTitle: `Se você é estudante ou profissional da área 
            de TI e tem vontade de iniciar sua carreira 
            como programador no exterior, a AIESEC Brasília 
            te convida para o webinar: Programe o seu futuro 
            profissional no exterior` ,
            image: "futuro.svg"
        }
    ]
}

const academic = {
    title: "Acadêmico",
    subTitle: "Alguns estudos dos quais participei",
    list: [
        {
            title: "Edubot Project",
            subTitle: `Analyzing the Adaptation of Robotics Classes to the 
            Remote Environment. Publicado em: 2021 Latin 
            American Robotics Symposium, SBR and WRE` ,
            button: [{ 
                title: "site",
                url: "http://www.natalnet.br/wre2021/" 
            }, 
            { 
                title: "artigo",
                url: "https://ieeexplore.ieee.org/document/9605467" 
            }]
        },
        {
            title: "Testes de Inteligência Artificial",
            subTitle: `Metodologia de desenvolvimento e manutenção: 
            testes em sistemas de Inteligência Artificial` ,
            button: [{ 
                title: "artigo",
                url: "https://drive.google.com/file/d/1dRCTol6n1ZqIiFdqPBnM136MPgBFrxRN/view?usp=sharing" 
            }]
        },
        {
            title: "PIBITI",
            subTitle: `Programa de Iniciação Científica em Tecnologia
            Desenvolvimento e Inovação - PIBITI (CNPq)
            2021/2022. `,
            button: [ {
                title: "site",
                url: "https://sae.unb.br/"
            }
            ]
        }
        
    ]
}

export {
    buttons,
    greeting,
    contactInfo,
    academic,
    talk,
};
