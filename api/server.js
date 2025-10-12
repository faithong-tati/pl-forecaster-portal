import path from 'path';
import { fileURLToPath } from 'url';

import jsonServer from 'json-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

server.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(port, () => {
  console.log(`✅ JSON Server is running at http://localhost:${port}/api`);
});
