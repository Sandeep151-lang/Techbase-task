import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from './components/Image';
import Audio from './components/Audio';

function App() {
  return (
    <div className="App relative container">
      <Tabs className="tab absolute">
    <TabList className="tab-list">
      <Tab >Images</Tab>
      <Tab>Video</Tab>
      <Tab>Audio</Tab>
      <Tab></Tab>
    </TabList>

    <TabPanel>
      <Image/>
    </TabPanel>
    <TabPanel>
      <Audio/>
    </TabPanel>
  </Tabs>
    </div>
  );
}

export default App;
