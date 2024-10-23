const { ExpressPeerServer } = require("peer");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the public directory
app.use(express.static("public"));

// Create a PeerJS server
const server = app.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/peerjs", peerServer);
 