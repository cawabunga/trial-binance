export function observeRates(onUpdate) {
  return createWsClient(
    "wss://stream.binance.com/stream?streams=!miniTicker@arr",
    (e) => {
      const data = JSON.parse(e.data);
      onUpdate(data.data.map(transformToPartialProduct));
    }
  );
}

const transformToPartialProduct = (rawData) => ({
  s: rawData.s,
  c: Number(rawData.c),
});

function createWsClient(url, onMessage) {
  let reconnectIsRequired = true;
  let socket = new WebSocket(url);
  let detach = attachListeners();

  function reconnect() {
    socket = new WebSocket(url);
    detach = attachListeners();
  }

  function onClose(e) {
    detach();
    if (reconnectIsRequired) {
      reconnect();
    }
  }

  function attachListeners() {
    socket.addEventListener("close", onClose);
    socket.addEventListener("message", onMessage);

    return () => {
      socket.removeEventListener("close", onClose);
      socket.removeEventListener("message", onMessage);
    };
  }

  return (reconnectIsRequiredArg = false) => {
    reconnectIsRequired = reconnectIsRequiredArg;
    socket.close();
  };
}
