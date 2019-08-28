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
    //conn.write('Name: EJR');
    const messages = ['Move: up','Move: left','Move:left','Move: up','Move: right']
    let number = 0
    for (const message of messages) {
        setTimeout(() => {
            conn.write(message)
        }, number += 500);
    }

    /*  setTimeout(() => {
        conn.write('Move: up');
     }, 50);
     setTimeout(() => {
        conn.write('Move: up');
     }, 100);
     setTimeout(() => {
        conn.write('Move: left');
     }, 150);
     setTimeout(() => {
        conn.write('Move: left');
     }, 200); */
     
     
    });

    conn.setEncoding('utf8');
    return conn
}
module.exports = {
    connect
}