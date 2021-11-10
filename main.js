const express = require('express');
const promMid = require('express-prometheus-middleware');
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const PORT = 4000;

app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: false,
  }));

  app.get('/time', (req, res) => {
    const time = new Date();
    res.status(200).send({epoch:time});
  });
  
  app.listen(PORT, () => {
    console.log(`Example api is listening on http://localhost:${PORT}`);
  });