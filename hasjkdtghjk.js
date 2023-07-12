function flushWrites() {if(w.socket.socket.readyState != WebSocket.OPEN) return; network.write(writeBuffer);}
