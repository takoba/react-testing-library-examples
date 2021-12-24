import React from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"

const Title = styled.h1`
  border-left: 0.75rem solid #9cc;
  padding-left: 0.75rem;
`

const Looseleaf: React.FC = ({ children }): JSX.Element => {
  const Container = styled.div`
    background-image:
      linear-gradient(90deg, transparent 0%, transparent 50%, #fff 50%, #fff 100%),
      linear-gradient(180deg, transparent 0%, transparent 97%, #9cc 97%, #9cc 100%);
    background-size:
      8px 100%,
      100% 2.5rem;
    line-height: 2.5rem;
  `
  const Text = styled.p`
    overflow-wrap: break-word;
  `

  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

const App = (): JSX.Element => (
  <>
    <Title>takoba/react-testing-library-examples</Title>
    <Looseleaf>Sandbox with react + jest + @testing-library/react.</Looseleaf>
    <Looseleaf>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Looseleaf>
  </>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
