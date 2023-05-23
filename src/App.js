import ElementCard from './components/ElementCard'
import elements from './periodic-table.json'
import './App.css';

export default function App() {
  const elementCards = Object.values(elements).map(element => {
    return (
      <ElementCard 
        key={element.number}
        {...element}
      />
    )
  })

  return (
    <>
      <h1 className='title'>The Element Database</h1>
      <div className='card-container'>
        {elementCards}
      </div>
    </>
  );
}
