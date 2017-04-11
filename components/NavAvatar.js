import React from 'react'
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu'

const T = props => (
  <div>asd</div>
)

const NavAvatar = props => (
  <IconMenu icon='t' position='topLeft' menuRipple>
    <MenuItem value='download' icon='get_app' caption='Download' />
    <MenuItem value='help' icon='favorite' caption='Favorite' />
    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    <MenuDivider />
    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
  </IconMenu>
)

export default NavAvatar
