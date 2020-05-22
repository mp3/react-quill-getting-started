import React from 'react'
import ReactDOM from 'react-dom'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const Main = () => {
  const [value, setValue] = React.useState('')

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} />
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
