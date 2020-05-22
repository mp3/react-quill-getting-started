import React from 'react'
import ReactDOM from 'react-dom'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill'
import styled from 'styled-components'

const Main = () => {
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <Container>
      <ReactQuill theme="bubble" value={value} onChange={setValue} />
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid #ccc;
`

ReactDOM.render(<Main />, document.getElementById('root'))
