import Hello from './components/Hello'

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Grettings</h1>
      <Hello name='aomine' age={17 + 3} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
