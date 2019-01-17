const mosca = require('mosca');

const pubsubsettings = {
  type: 'mqtt',
  json: false,
  mqtt: require('mqtt'),
  host: '68.183.76.240',
  port: 1883,
  username: "smartgov",
  password: "@12345@"
};

const moscaSettings = {
  backend: pubsubsettings
};

// Accepts the connection if the username and password are valid
var authenticate = function(client, username, password, callback) {
  var authorized = (username === 'smartgov' && password.toString() === '@12345@');
  if (authorized) client.user = username;
  callback(null, authorized);
}

const server = new mosca.Server(moscaSettings);

// fired when a client connects
server.on('clientConnected', (client) => {
  console.log('Client Connected:', client);
});

server.on('ready', setup);

function setup() {
  server.authenticate = authenticate;
  console.log('Mosca server is up and running');
}

const message = {
  topic: 'bahia/salvador/semge/previs/0/sensor1/out',
  payload: '0,Amperagem : 1.311,Potencia : 4.094,Fator Carga : 6.937Timestamp : 2019-01-02 21:54:56.926427', // or a Buffer
  qos: 0, // 0, 1, or 2
  retain: false // or true
};

server.publish(message, () => {
  console.log('done!');
});

// fired when a message is published
server.on('published', (packet, client) => {
  console.log('Published', packet);
  console.log('Client', client);
});

