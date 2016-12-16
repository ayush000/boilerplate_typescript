import * as express from 'express';
import * as path from 'path';

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  console.log("a");
  res.send('done');
});
app.set("view options", { layout: false });
app.use(express.static(path.join(__dirname, '../../dist')))