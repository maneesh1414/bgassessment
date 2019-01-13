import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Content from './Content.js';
import Footer from './Footer.js';

export default class Main extends Component{

  render(){
    return(
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Content />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
