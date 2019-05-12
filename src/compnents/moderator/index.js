import React, { Component } from 'react';
import Outstanding from "../outstanding";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Aproved from "../aproved";
import Rejected from "../rejected";
class Moderat extends Component {
  
  render() {
    return (
      <div className="">
      <div className="video-content">
         <div className="vedio-header">
            <h1>Administration</h1>
            <h2>Questions Moderator</h2>
        </div>
        <Tabs className="main-list">
          <TabList>
            <Tab className="tab-list">Outstanding</Tab>
            <Tab className="tab-list">Aproved</Tab>
            <Tab className="tab-list">Rejected</Tab>
          </TabList>
      
          <TabPanel>
              <Outstanding/>
          </TabPanel>
          <TabPanel>
            <Aproved/>
          </TabPanel>
          <TabPanel>
            <Rejected/>
          </TabPanel>
        </Tabs>
        
        </div>
      </div>
    );
  }
}
export default Moderat;
