import React from 'react'
import Input from 'react-toolbox/lib/input'
import Checkbox from 'react-toolbox/lib/checkbox'

const PlrForm = props => (
  <form>
    <Input type='text' label='Name' name='name' value={"this.state.name"} maxLength={16 } />
    <Input type='text' label='Plr thing' name='Plr thing' value={"this.state.name"} maxLength={16 } />
    <div style={{
      width: "50%",
      display: "inline-block"
    }}>
      <Checkbox
        checked
        label="Unchecked option"
      />
      <Checkbox
        checked
        label="Unchecked option"
      />
      <Checkbox
        checked
        label="Unchecked option"
      />
    </div>
    <div style={{
      width: "49%",
      float: "right",
      display: "inline-block"
    }}>
      <Checkbox
        checked
        label="Unchecked option"
      />
      <Checkbox
        checked
        label="Unchecked option"
      />
      <Checkbox
        checked
        label="Unchecked option"
      />
    </div>
    <Input type='text' label='some' name='some' value={"this.state.name"} maxLength={16 } />
  </form>
)

export default PlrForm
