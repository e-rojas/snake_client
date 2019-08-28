const {connect} = require('./client')
const {setupInput} = require('./input')

console.log('connecting....');
//handle user input


let connection = connect();
setupInput(connection);
