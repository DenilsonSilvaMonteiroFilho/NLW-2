// DADOS

const subjects = [
    "Artes",
    "Biologia",
    "Ciencias",
    "Educacao Fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Quimica",                          
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terca-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
]

// FUNCIONALIDADES

function getSubject(SubjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour , minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
 