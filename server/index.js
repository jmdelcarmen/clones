import app from './app';

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Server-ing on port ${server.address().port}`);
});

export default app;
