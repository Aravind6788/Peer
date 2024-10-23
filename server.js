const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: 3001,
  path: "/",
  cors: {
    origin: "https://group-meet-e8y3.onrender.com", // Allow your main server's domain
    methods: ["GET", "POST"],
  },
});

console.log("Peer server running on port 3001");
