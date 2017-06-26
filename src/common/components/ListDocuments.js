import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'
import FontIcon from 'react-toolbox/lib/font_icon'

const listItemActions = [
  <FontIcon key="abc" value='delete' onClick={() => console.log("delete")} />
]

const ListDocuments = props => (
  <List>
    <ListSubHeader caption='Plr #123' />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
      caption='Something.pdf'
      rightActions={listItemActions}
      onClick={() => console.log("open doc")}
    />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
      caption='Ozymandias'
      rightActions={listItemActions}
      onClick={() => console.log("open doc")}
    />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
      caption='Rorschach'
      rightActions={listItemActions}
      onClick={() => console.log("open doc")}
    />
  </List>
)

export default ListDocuments
