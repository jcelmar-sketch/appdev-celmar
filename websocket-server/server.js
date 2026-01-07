const WebSocket = require('ws');

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running at ws://localhost:8080');

wss.on('connection', (ws) => {
  console.log('A client connected');

  // Send welcome message
  ws.send('Hello from WebSocket server!');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log('Received:', message);
    // Echo back to client
    ws.send(`Echo: ${message}`);
  });

  // On client disconnect
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
