const { defineConfig } = require("cypress");
const mysql = require('mysql')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{

        queryTestDb:function(query,config) {
          const connection = mysql.createConnection({
            "user":"root",
            "password":"example",
            "database":"db"
        })
          connection.connect()

          return new Promise((resolve, reject) => {
            connection.query(query,(err,results)=>{
              if(err){
                reject(err)
              } else {

                connection.end()
                return resolve(results)
              }
            })
          })
        }
      })
      // implement node event listeners here
      async function connect(client) {

        await client.connect()
        return client.db('sample_airbnb')
        
      }
    },
    excludeSpecPattern: [
      "cypress/e2e/getting-started/*.js",
      "cypress/e2e/advanced-examples/*.js",
    ],
    baseUrl:""
  }
});
