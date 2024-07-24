import logo from './logo.svg';
import './App.css';
import { NavBar } from './shared/components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from './shared/components/sidebar/SideBar';
import { useState } from 'react';

function App() {


  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    // <div className="App">
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar toggleSidebar={toggleSidebar}/>
      <div style={{ display: 'flex', position: 'relative' }}>
      <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ flex: 1, marginLeft: sidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s' }}>
          <main style={{ padding: '20px' }}>
            <h2> lalalala</h2>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
