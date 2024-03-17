const myWs = new WebSocket('ws://192.168.0.111:9001');

myWs.onopen = function () {
  console.log('Client: connection');
};

myWs.onmessage = function (message) {
  console.log('Client: Message: %s', message.data);
};

function wsSendEcho(value) {
  myWs.send(JSON.stringify({action: 'ECHO', data: value.toString()}));
}

function wsSendPing() {
  console.log('Client: wsSendPing')
  myWs.send(JSON.stringify({action: 'PING!'}));
}

function sendFromInput() {
  const cmd = document.getElementById('input').value;
  myWs.send(JSON.stringify({ cmd }));
}

function sendCmd(cmd) {
  console.log('Client:', cmd);
  myWs.send(JSON.stringify({ cmd }));
}
