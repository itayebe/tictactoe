import app from './app';

const port = 3000;

const startApp = () => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

export default startApp;
