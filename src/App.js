import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';


function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/zshanabek/ton-test/main/manifest.json">
        { /* Your app */ }
    </TonConnectUIProvider>
);
}

export default App;
