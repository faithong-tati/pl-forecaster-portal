import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use('/api', router);

const port = 3001;

server.listen(port, () => {
  console.log(`✅ JSON Server is running at http://localhost:${port}/api`);
});
