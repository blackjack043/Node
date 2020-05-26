const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = express.json();

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended:true});

//app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));


var posts = [
{title: "Ким чен Ын снимает шляпу.", content: "Лидер КНДР провел встречу по вопросам ядерного сдерживания. До этого он в последний раз принимал участие в официальном мероприятии 1 мая.", src : "img/kim.jpg"},
{title: "На нефтяной платформе тушат пожар", content: "сильный шторм на Каспии мешает проведению спасательной операции рядом с охваченной огнем нефтяной платформой. По разным данным, на буровой в момент пожара могли находиться десятки человек. Сейчас поступает информация, что 32 из них спасены. Судьба оставшихся пока неизвестна.", src : "img/mek.jpg"},
{title: "Комментатор заявил о «завершении боевых действий", content: "В СМИ и соцсетях развернулся конфликт между спортивным комментатором Василием Уткиным (сейчас он предпочитает называть себя блогером) и телеведущим ВГТРК Владимиром Соловьёвым..", src : "img/utk.jpg"},
{title: "ФСИН заявила о росте числа заразившихся коронавирусом сотрудников и заключенных", content: "За три дня количество сотрудников Федеральной службы исполнения наказаний (ФСИН) и заключенных, заразившихся коронавирусом, выросло. Об этом в понедельник, 25 мая, сообщает «Интерфакс» со ссылкой на пресс-бюро службы.", src : "img/fcin.jpg"},
{title: "Курьер захватил заложников в московском банке", content: "Около 14:00 мск стало известно, что в Москве неизвестный взял в заложники несколько человек в отделении банка на Земляном Валу (Центральный административный округ Москвы). Об инциденте в правоохранительные органы сообщил сотрудник банка..", src : "img/bank.jpg"},
{title: "Нехватку воды в Крыму назвали потенциальной причиной для войны России и Украины", content: "Потенциальной причиной для войны России и Украины может стать критическая нехватка воды в Крыму. Об этом заявили аналитики американского центра The Jamestown Foundation..", src : "img/krym.jpg"},


];

var countserver = 0;  // номер статьи в массиве posts



app.post("/zapros" ,jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body.countClient); // выводим то что прислал клиент
    if (countserver >= posts.length ) { countserver = 0}; // 
    //response.render("otvet", {post: posts1, count: count});
    response.json({post : posts[countserver]}); // отдаем статью из массива в формате Json
    countserver++; 
});
  
app.get("/", function(request, response){
  //  response.sendfile(__dirname + '/index2.html');
	response.sendfile('index.html');
});

app.listen(3000);