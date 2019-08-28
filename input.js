const {keyReference} = require('./constants')
//handle user input
let connection;
const handleUserInput = (key,connection)=>{
    if(key === '\u0003'){
        process.exit()
    }
   
        connection.write(keyReference[key])
    
   /*  else if(key === '\u0061'){
        connection.write('Move: left')
    }
    else if(key === '\u0073'){
        connection.write('Move: down')
    }
    else if(key === '\u0064'){
        connection.write('Move: right')
    }
    else if(key === '\u0070'){
        connection.write('Say: Hello')
    } */
    
    };

//Setinput 
const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.on('data',key =>handleUserInput(key,connection))
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    return stdin;
  }
  module.exports = {
    handleUserInput,
    setupInput

  }