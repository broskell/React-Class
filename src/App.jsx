import './App.css'

function Parent() {
  const name = 'Saathvik';
  const age = 18;
  return (
    <App name={name} age={age}/>
  )
}

function Child() {
  const age = 18;
  return (
    <App age={age}/>
  )
}

function App(props) {
  return (
    <>
      <h1>Hello World! My name is {props.name}</h1>
      <h1>and my age is {props.age}</h1>
    </>
  )
}

export default Parent;