// 'use strict';

 module.exports = {
  up:     (queryInterface, Sequelize) => {
            return  queryInterface.renameColumn('students','quiz1score1','testscore1'
              )},

  down: async (queryInterface, Sequelize) => {
   
  }
};
