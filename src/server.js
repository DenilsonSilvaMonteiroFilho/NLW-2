// SERVIDOR
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require ('./pages')

// CONSFIGURAR NUNJUCKS (TEMPLATE ENGINE)
const nunjuscks = require('nunjucks')
nunjuscks.configure('src/views', {
    express: server,
    noCache: true,
})


// INICIOE CONFIGURACAO DO SERVIDOR
server
// receber dados do req.body
.use(express.urlencoded( { extended: true }))
// CONFIGURAR ARQUIVOS STATICOS (CSS, SCRIPTS, IMAGENS)
.use(express.static("public"))
//ROTAS DE APLICACAO
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//START DO SERVIDOR
.listen(5500)