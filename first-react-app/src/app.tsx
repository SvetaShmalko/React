import React from 'react'
import MyForm from './MyForm'

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello, React</h1>
            <MyForm onSubmit={JSON.stringify} />
        </div>
    )
}

export default App