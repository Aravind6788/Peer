const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: 443,
  path: "/peerjs",
  cors: {
    origin: "https://group-meet-e8y3.onrender.com", 
    methods: ["GET", "POST"],
  },
});

console.log("Peer server running on port 3001");
