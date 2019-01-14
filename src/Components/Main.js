// Component that contains content Component that routes to content on homepage.
import React, { Component } from 'react';
import Content from './Content.js';

const Main = () => {
  return (
      <div>
        <main>
          <Content />
        </main>
      </div>
  );
}

export default Main;
