const Reader = require('./Reader');
const Processor = require('./Process');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');

let leitor = new Reader();
let escritor = new Writer();
async function main() {
    let data = await leitor.Read('./Tabela.csv');
    let dataProcess = Processor.Process(data)

    let users = new Table(dataProcess)

    let html = await HtmlParser.Parse(users)

    escritor.Write(Date.now() + ".html", html)
}

main();