import React from 'react';
import './App.css';
import {Layout} from 'antd';
import Navbar from './comp/navbar/Navbar';
import Landing_page from './comp/landing_page/Landing_page';



const { Header, Content } = Layout

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
      </Layout>
    </div>
  );
}

export default App;
