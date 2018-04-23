import React, { Component } from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import ChatBot from './components/chatbot/ChatBot'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <ChatBot />
      </div>
    );
  }
}

export default App;
