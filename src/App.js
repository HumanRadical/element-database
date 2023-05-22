import ElementCard from './components/ElementCard'
import elements from './periodic-table.json'
import './App.css';

export default function App() {
  const elementCards = Object.entries(elements).map(element => {
    return (
      <ElementCard 
        key={element[1].number}
        {...element[1]}
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
