import express from 'express';
import bodyParser from 'body-parser';
import { scrape } from './src/tools/scrapper.js';
import { prevMatch, nextMatch } from "./src/commands/matchday.js";

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));

server.set('view engine', 'ejs')
// server.all(`/`, (req, res) => {
//   res.send(`Result: [OKAY]`);
// });
server.get('/', (req, res) => {
  res.render('admin.ejs')
})


server.post('/login', (req, res) =>{
  const admin = {
  name: "admin",
  pass: "ad1234"
}
let username = req.body.username;
let password = req.body.password;
if(username === admin.name && password === admin.pass){
  res.render('login.ejs')
}
else
res.render('admin.ejs')
})

server.post('/scrape', async (req, res) =>{
  await scrape(prevMatch.url, "prevResult");
  await scrape(nextMatch.url, "nextMatch");
res.render('login.ejs')
})
export default function keepAlive() {
  server.listen(3000, () => {
    console.log(`Server is ready`);
  });
}