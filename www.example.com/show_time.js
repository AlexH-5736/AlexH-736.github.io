window.addEventListener("DOMContentLoaded", () => {
  const messages = document.createElement("ul");
  document.body.appendChild(messages);

  const websocket = new WebSocket("ws://localhost:5678/");

  websocket.onmessage = ({ data }) => {
    const event = JSON.parse(data);
    switch (event.type) {
      case "value":
        document.getElementById('NodeServer').textContent = event.NodeServer;
        document.getElementById('githubServer').textContent = event.githubServer;
        document.getElementById('timeStamp').textContent = event.timeStamp;
        break;
      case "users":

        document.getElementById('NodeServer').textContent = event.value;
        break;
      default:
        console.error("unsupported event", event);
    }
  };

/*
    document.getElementById('NodeServer').textContent = event.value;

    document.getElementById('FlaskServer').textContent = data
    document.getElementById('StausPannel').textContent = data
    document.getElementById('DscBot').textContent = datatimeStamp
*/

});