import React from 'react'
import Button from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'

import ListDocuments from './ListDocuments'

export default props => (
  <div>
    <div>
      <Input type='text' label='Name' name='name' maxLength={16} />
      <Input type='file' />
      <Button label='Add document' raised primary />
    </div>
    <div style={{
      height: 200,
      overflowY: "auto"
    }}>
      <ListDocuments />
    </div>
  </div>
)
