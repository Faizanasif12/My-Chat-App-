


const name = prompt('Enter Your Name To Jion ')
socket.emit('new-user-joined', name )
const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp');
const messageContainer = document.querySelector(".container");




// const append = (message,position)=>{
//     const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add('message')
//     messageElement.classList.add(position);
//     messagecontainer.append(messageElement);
// }





