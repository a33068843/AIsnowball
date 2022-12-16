import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import socketIO from "socket.io";

export default (app, http) => {
  const login = require('./routes/api/login');
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/api/login', login);
  // app.use(express.json());
  //
  // app.get('/foo', (req, res) => {
  //   res.json({msg: 'foo'});
  // });
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  // 
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
