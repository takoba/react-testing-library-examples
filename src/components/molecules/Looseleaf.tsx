import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-image: linear-gradient(90deg, transparent 0%, transparent 50%, #fff 50%, #fff 100%),
    linear-gradient(180deg, transparent 0%, transparent 97%, #9cc 97%, #9cc 100%);
  background-size: 8px 100%, 100% 2.5rem;
  line-height: 2.5rem;
`

const Text = styled.p`
  overflow-wrap: break-word;
`

const Looseleaf: React.FC = ({ children }): JSX.Element => (
  <Container>
    <Text>{children}</Text>
  </Container>
)

export default Looseleaf
