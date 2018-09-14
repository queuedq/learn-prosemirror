import React, { Component } from 'react'

import MyEditor from 'learn-prosemirror'

export default class App extends Component {
  render () {
    return (
      <div>
        <MyEditor text='Modern React component module' />
      </div>
    )
  }
}
