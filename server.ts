import { Server } from 'socket.io';

const io = new Server(8080, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST']
  }
});

io.on('connect', (socket) => {
    socket.emit('welcome', 'You are welcome!');

    socket.on('test', (params) => {
        console.log('test', params);
    });
});
