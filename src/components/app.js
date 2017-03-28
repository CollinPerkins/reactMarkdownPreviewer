import React, { Component } from 'react';
import Editor from "../containers/editor.js";
import Preview from "../containers/preview.js";

export default class App extends Component {

  render() {
    return (
      <div>
        <Editor></Editor>
        <Preview></Preview>
      </div>
    );
  }
}
