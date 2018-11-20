import React, { Component } from 'react'

import Editor from 'learn-prosemirror'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Editor />
    )
  }
}
