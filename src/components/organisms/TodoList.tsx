import React, { useRef, useState } from 'react'
import styled from 'styled-components'

interface Todo {
  id: number
  label: string
  order: number
}

const Container = styled.div``
const List = styled.ul``
const ListItem = styled.li``
const InputArea = styled.div``

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    if (inputRef.current === null) {
      return
    }
    if (inputRef.current.value === '') {
      return
    }

    setTodos([
      ...todos,
      {
        id: Math.max(...todos.map((todo): number => todo.id)) + 1,
        label: inputRef.current.value,
        order: Math.max(...todos.map((todo) => todo.order)),
      },
    ])
    formRef.current?.reset()
  }

  return (
    <Container>
      <List>
        {todos
          .sort((a, b) => {
            return a.order > b.order ? 1 : a.order < b.order ? -1 : 0
          })
          .map((todo) => (
            <ListItem key={`TodoList.Item.${todo.id}`}>{todo.label}</ListItem>
          ))}
      </List>
      <InputArea>
        <form ref={formRef}>
          <input type="text" ref={inputRef} />
          <button type="button" onClick={save}>
            💾
          </button>
        </form>
      </InputArea>
    </Container>
  )
}

export default TodoList
