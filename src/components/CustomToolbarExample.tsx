import React from 'react'
import ReactQuill from 'react-quill'

const CustomButton = () => <span className="octicon octicon-star" />

function insertStar() {
  const cursorPosition = this.quill.getSelection().index
  this.quill.insertText(cursorPosition, "★")
  this.quill.setSelection(cursorPosition + 1)
}

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1"></option>
      <option value="2"></option>
      <option></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option></option>
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
)

export const CustomToolbarExample = () => {
  const [editorHtml, setEditorHtml] = React.useState('')

  const handleChange = (html) => {
    setEditorHtml(html)
  }

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        "insertStar": insertStar,
      }
    }
  }

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color',
  ]

  return (
    <div className="text-editor">
      <CustomToolbar />
      <ReactQuill
        theme={null}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  )
}
