import React from 'react'
import '@/App.scss'

interface IProps {}

const App = (props: IProps) => {
  return (
    <div className="app">
      <h1 className="app__title">React-приложение готово к работе</h1>
      <p className="app__paragraph">Добро пожаловать</p>
    </div>
  )
}

export default App
