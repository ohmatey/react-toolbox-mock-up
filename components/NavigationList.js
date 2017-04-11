import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'

const NavigationList = props => (
  <List selectable ripple>
    <ListSubHeader caption='Pages' />
    <ListItem
      caption='Dr. Manhattan'
    />
    <ListItem
      caption='Ozymandias'
    />
    <ListItem
      caption='Rorschach'
    />
  </List>
)

export default NavigationList
