import ElementCard from './components/ElementCard'
import elements from './periodic-table.json'
import './App.css';
import { useState } from 'react';
import InfoCard from './components/InfoCard';

export default function App() {
  const elementArray = Object.values(elements)

  const [currentElement, setCurrentElement] = useState(0)

  const selectCurrentElement = elementNum => {
    setCurrentElement(elementNum)
    console.log(elementNum)
  }

  const elementCards = elementArray.map(element => {
    return (
      <ElementCard 
        key={element.number}
        {...element}
        selectCurrentElement={selectCurrentElement}
      />
    )
  })

  return (
    <div className='body-container'>
      <section className='element-container'>
      <h1 className='title'>The Element Database</h1>
        <div className='element-card-container'>
          {elementCards}
        </div>
      </section>
      {currentElement ? 
        <section className='info-container'>
            <InfoCard 
              {...elementArray[currentElement - 1]}
              closeInfoCard={() => setCurrentElement(0)}
            />
        </section>
        : ""
      }
    </div>
  );
}
