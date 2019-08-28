const net = require('net')
const {IP,PORT} = require('./constants')
//stablish connection with game server
const connect = ()=>{
    const conn = net.createConnection({
        host:IP,
        port:PORT
    });
    //event handler to receive data
    conn.on('data',data=>{
        console.log('incoming data:',data)
    });
   /*  const moveSnake = ()=>{
          const messages = ['Move: up','Move: left','Move:left','Move: up','Move: right','Move: up','Move: up','Move: up']
    let number = 0
    for (const message of messages) {
        setTimeout(() => {
            conn.write(message)
        }, number += 500);
    }
    } */
    //
    //event handler to check connection
   
    
    conn.on('connect', ()=>{

    });

    conn.setEncoding('utf8');
    return conn
}
module.exports = {
    connect
}