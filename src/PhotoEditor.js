import React, { Component } from 'react'
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorReactUI'
import 'photoeditorsdk/css/PhotoEditorReactUI.css'

class PhotoEditor extends Component {
  render () {
    const { ReactComponent } = PhotoEditorReactUI
    return (
      // apiKey already swapped for photoeditorsdk team to review
      <ReactComponent
        apiKey='xxxxxxx'
        assets={{
          baseUrl: '/node_modules/photoeditorsdk/assets'
        }}
        style={{
          width: 800,
          height: 600
        }} />
    )
  }
}

export default PhotoEditor

