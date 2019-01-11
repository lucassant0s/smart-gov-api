import mqtt from 'mqtt';

const client = mqtt.connect({
  host: "68.183.76.240",
  port: 1883,
  username: "smartgov",
  password: "@12345@"
});

export default client;
