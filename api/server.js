// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
/* const cors = require('cors') */
const router = jsonServer.router("db.json");


/* server.use(cors({
   origin: "https://tutorials-inky.vercel.app"
})); */
// Make sure to use the default middleware
const middlewares = jsonServer.defaults();


server.use(middlewares);
// Add this before server.use(router)
server.use(
 // Add custom route here if needed
 jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
 })
);
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
