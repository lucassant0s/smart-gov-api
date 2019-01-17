import { Router } from 'express';

const active = Router();

active.post('/active', (req, res) => {
  console.log('connected', client.connected);
});

export default active;
