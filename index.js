const express = require('express');
let app = express();
///是 express 的一个中间件 , 作用对post 请求的请求参数进行解析
const bodyParser = require('body-parser');
//配置之后会给req 添加body属性,来获取请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.use('/node_modules', express.static('./node_modules'));
app.engine('html', require('express-art-template'));

let comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
];

app.get('/', (req, res) => {
  let dataStr = {
    list: comments
  };
  console.log(dataStr);
  res.render('index.html', dataStr)
});

app.get('/post', (req, res) => {
  res.render('post.html')
});

//传过来的叫请求参数
app.post('/mes', (req, res) => {
  let reqBody = req.body;
  reqBody.dateTime = '2018-11-27';
  comments.unshift(reqBody);
  //重定向 (因为配置了express才能用)
  res.redirect('/');
});

app.listen(7000);