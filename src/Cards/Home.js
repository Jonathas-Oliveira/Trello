import React from 'react'
import TodoList from './TodoList.js'
function Home (){


    return(
        <div>
            <TodoList name='Criar tarefa'/>
            <TodoList name='Tarefa em processo'/>
            <TodoList name='Tarefa concluida'/>
        </div>
    )
}


export default Home