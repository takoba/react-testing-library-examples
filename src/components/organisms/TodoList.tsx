import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div``
const List = styled.ul``
const ListItem = styled.li``
const InputArea = styled.div``

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoList.Todo[]>([])
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
        id: todos.length > 0 ? Math.max(...todos.map((todo): number => todo.id)) + 1 : 1,
        label: inputRef.current.value,
        order: todos.length > 0 ? Math.max(...todos.map((todo) => todo.order)) : 1,
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
        <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
          <input type="text" ref={inputRef} onKeyDown={(e) => { e.code === 'Enter' && save() }} />
          <button type="button" onClick={save}>
            💾
          </button>
        </form>
      </InputArea>
    </Container>
  )
}

export default TodoList
