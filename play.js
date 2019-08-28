const net = require('net')
//stablish connection with game server
const connect = ()=>{
    const conn = net.createConnection({
        host:'localhost',
        port:50541
    });
    conn.on('data',data=>{
        console.log('incoming data:',data)
    })

    conn.setEncoding('utf8');
    return conn
}
console.log('connecting....');
connect();