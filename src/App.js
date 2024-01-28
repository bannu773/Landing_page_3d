import React from 'react';
import './App.css';
import {Layout} from 'antd';
import Navbar from './comp/navbar/Navbar';
import Landing_page from './comp/landing_page/Landing_page';
import Fotter from './comp/Fotter/Fotter';
import About from './comp/About/About';



const { Header, Content , Footer} = Layout

function App() {
  return (
    <div className="App ">
      <Layout>
        <Header style={{
          position:"fixed",
          width :'100vw',
          top : 0,
          zIndex : '100'
        }}>
          <Navbar />
        </Header>
        <Content>
          <Landing_page />
        </Content>
        <About />
        <Fotter />
      </Layout>
    </div>
  );
}

export default App;
