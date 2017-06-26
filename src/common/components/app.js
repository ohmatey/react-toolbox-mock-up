import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'
import { AppBar, Checkbox, IconButton, Avatar } from 'react-toolbox'

import NavigationList from './NavigationList'
import DocumentsListCreate from './DocumentsListCreate'
import PlrForm from './PlrForm'

export default class HelloMessage extends React.Component {
  state = {
    drawerActive: false,
    drawerPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  }

  render() {
    const { drawerActive, drawerPinned } = this.state

    return (
      <Layout>
        <NavDrawer active={drawerActive}
          pinned={drawerPinned}
          onOverlayClick={ this.toggleDrawerActive }>
        <NavigationList />
        </NavDrawer>
        <Panel>
          <AppBar leftIcon=':' title="Bistrack" onLeftIconClick={ this.toggleDrawerActive } rightIcon={<Avatar><img src="https://placeimg.com/80/80/animals"/></Avatar>} />
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem', width: 1080, margin: 'auto' }}>
              <h1>Create Plr</h1>
            <div>
              <div style={{
                width: "calc(50% - 10px)",
                marginRight: 20,
                display: "inline-block"
              }}>
              <PlrForm />
              </div>
                <div style={{
                  width: "calc(50% - 10px)",
                  display: "inline-block"
                }}>
                <DocumentsListCreate />
              </div>
            </div>
          </div>
        </Panel>
      </Layout>
    );
  }
}
