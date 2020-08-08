// const { Sequelize, students } = require(".");
// const { DataTypes } = require("sequelize/types");

  export default (sequelize,DataTypes)=>{
     const Students =  sequelize.define('students',{
             id:{
               type:DataTypes.INTEGER,
               primaryKey:true,
               allowNull:false   
             },
             testscore1:{
              type:DataTypes.INTEGER,
              allowNull:false,
             },  testscore2:{
                type:DataTypes.INTEGER,
                allowNull:false,
               },
               testscore3:{
                type:DataTypes.INTEGER,
                allowNull:false,
               }

     });
             return Students;
    }
  