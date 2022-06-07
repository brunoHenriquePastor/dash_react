import React,{useEffect} from 'react';
import mqtt from 'mqtt';
import HookMqtt from './components/Hook/';
//import '~antd/dist/antd.css';




function App() {
  // const client = mqtt.connect(SOME_URL);
  // const [connectionStatus, setConnectionStatus] = React.useState(false);
  // const [messages, setMessages] = React.useState<string[]>([]);

  useEffect(() => {

    // if (client) {
    //   console.log(client)
    //   client.on('connect', () => {
    //     setConnectStatus('Connected');
    //   });
    // }
    
    // client.on('connect', () => setConnectionStatus(true));
    // client.on('message', (topic, payload, packet) => {
    //   setMessages(messages.concat(payload.toString()));
    // });
  }, []);

  return (
    <>
    <div><HookMqtt /></div>
     {/* {messages.map((message) => (
        <h2>{message}</h2>
     )
     )} */}
    </>
  );

}

export default App;
