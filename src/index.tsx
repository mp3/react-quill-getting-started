import { h, render } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill'
import styled from 'styled-components'
import { CustomToolbarExample } from './components/CustomToolbarExample'

const Main = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <Container>
      <CustomToolbarExample />
      <ReactQuill
        theme={null}
        value={value}
        onChange={setValue}
      />
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid #ccc;
`

const root = document.getElementById('root')
if (root) {
  render(<Main />, root)
}
