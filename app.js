require('dotenv').config();
// const {Client,Pool} = require('pg');
const {Sequelize,DataTypes} = require('sequelize');
   const sequelize = new Sequelize('postgres');
  const  models = require('./models');
//  
  
//const pg = new Pool({
//      user:process.env.user,
//      password:process.env.password,
//      host: process.env.host,
//      database:process.env.db,
//     port:process.env.PORT
//  });
// // UPDATE product SET data=data||'{"2":"yes"}' WHERE id = 2
//  pg.connect();
//  pg.query(`select * from students;`,(err,res)=>{
//     console.log(res.rows);
//      pg.end();
//  });
 
 //insert into students  values (1,21,22,23),(2,45,46,44),(3,65,55,77)

 models.sequelize.sync({}).then((res)=>{
   console.log(res);
 })