import ElementCard from './components/ElementCard'
import elements from './elements.json'
import './App.css';

export default function App() {
  const elementCards = elements.map(element => {
    return (
      <ElementCard 
        key={element.number}
        {...element}
      />
    )
  })

  return (
    <>
      <h1>The Element Database</h1>
      <div className="card-container">
        {elementCards}
      </div>
    </>
  );
}
