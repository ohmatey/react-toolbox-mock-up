import React from 'react'
import Dialog from 'react-toolbox/lib/dialog'
import Button from 'react-toolbox/lib/button'
import FontIcon from 'react-toolbox/lib/font_icon'
import Input from 'react-toolbox/lib/input'

import DocumentsListCreate from './DocumentsListCreate'

class DocumentsDialog extends React.Component {
  state = {
    active: false,
    name: ""
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  handleDocumentNameChange = val => this.setState({name: val})

  actions = [
    { label: "Done", onClick: this.handleToggle },
  ]

  render () {
    const { active, name } = this.state

    return (
      <div>
        <Button label='Documents' onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Documents'
        >
          <div>
            <Input type='text' label='Name' name='name' value={name} onChange={this.handleDocumentNameChange} maxLength={16 } />
            <Button label='Add document' raised primary />
          </div>
          <div style={{
            height: 200,
            overflowY: "auto"
          }}>
            <DocumentsListCreate />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default DocumentsDialog
