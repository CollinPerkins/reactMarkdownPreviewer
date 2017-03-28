import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { changePreview } from '../actions/index';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     this.props.changePreview(event.target.value);
   }

  render() {
    return (
      <div className="halfScreen padding30">
        <textarea className="full" id="editor" type="text" value={this.props.editor.editor} onChange={this.handleChange} />
        {console.log(this.props.editor.editor)}
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    editor: state.editor
  };
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators({ changePreview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
