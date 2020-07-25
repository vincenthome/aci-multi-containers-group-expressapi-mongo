const app = require('./app');

const port = process.env.PORT || 80;
const hello = process.env.HELLO || 'notfound-index.js';
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  console.log(`Environment HELLO - ${hello}`);
  /* eslint-enable no-console */
});
