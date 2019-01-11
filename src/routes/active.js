import { Router } from 'express';
import client from '../broker';

const active = Router();

active.post('/active', (req, res) => {
  console.log('connected', client.connected);
  client.on('connect', function () {
    client.subscribe('bahia/salvador/semge/previs/0/sensor1/out', function (err) {
      if (!err) {
        client.publish('bahia/salvador/semge/previs/0/sensor1/out', '0,Amperagem : 1.311,Potencia : 4.094,Fator Carga : 6.937Timestamp : 2019-01-02 21:54:56.926427')
      }
    })
  });


  client.on('message', function (topic, message) {
    // message is Buffer
    console.log({ topic, message: message.toString() });
    client.end();
  });
});

export default active;
