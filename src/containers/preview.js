import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
marked.setOptions({
  breaks: true,
});

import { bindActionCreators } from 'redux';

class Preview extends Component {

  render() {
    console.log(marked(this.props.editor.editor));
    return (
      <div>
        <div className="margin10">
          <h1>HI</h1>
        </div>
        <div id='preview' className="padding30" dangerouslySetInnerHTML={{__html: marked(this.props.editor.editor)}} />
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    editor: state.editor
  };
}

export default connect(mapStateToProps, null)(Preview);
