import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tabs, setTabs] = useState(['Type your tab contents here...']);
  const [currentTab, setCurrentTab] = useState(0);

  const createTab = () => {
    setTabs([...tabs, 'Type your tab contents here...' ]);
    setCurrentTab(tabs.length);
  }

  const onChange = (e) => {
    const allTabs = [...tabs];
    allTabs[currentTab] = e.target.value;
    setTabs(allTabs);
  }

  const changeTab = (e, idx) => {
    setCurrentTab(idx);
  }
  
  return (
    <div className="App">
      <div>
        <button onClick={createTab}>Add Tab</button>
        {
          tabs.map((tab, i) =>
            <button 
              style = { currentTab === i ? {backgroundColor : "black", color : "white"} : null}
              value={i} 
              onClick={(e) => changeTab(e, i)}
            >
              Tab {i+1}
            </button>                                                          
          )
        }
      </div>
      <textarea placeholder="Type here" rows="4" cols="50" value={tabs[currentTab]} onChange={onChange}></textarea>
    </div>
  );
}

export default App;
