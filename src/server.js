const proffys = [
    {
        name: "Evelym Rondon",
        avatar: "https://avatars0.githubusercontent.com/u/1548762?s=400&u=398c3c1193a98ac45891c1aa13d5c289f2b7b046&v=4",
        whatsapp: "(69)984576848",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em lab. e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Dev",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Danielle Evangelista",
        avatar: "https://avatars0.githubusercontent.com/u/1548762?s=400&u=398c3c1193a98ac45891c1aa13d5c289f2b7b046&v=4",
        whatsapp: "(69)984576848",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em lab. e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Dev",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber -1;
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}
function pageGiveClasses(req, res) {
    const data = req.query

    const isEmpty = Object.keys(data).length == 0

    if (!isEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study");
    }

    return res.render("give-classes.html", { subjects, weekdays });
}

const express = require('express')
const server = express()

//config. nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

server
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500);
