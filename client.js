const net = require('net')
//stablish connection with game server
const connect = ()=>{
    const conn = net.createConnection({
        host:'localhost',
        port:50541
    });
    //event handler to receive data
    conn.on('data',data=>{
        console.log('incoming data:',data)
    });
    //event handler to check connection 
    conn.on('connect',() =>{
    console.log('Connection succesfully stablished');
    conn.write('Name: EJR');
    });

    conn.setEncoding('utf8');
    return conn
}
module.exports = {
    connect
}