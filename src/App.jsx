// App.js

import Card from './Card'
import shirt1 from './assets/shirt1.jpg'
import shirt2 from './assets/shirt2.jpg'
import shirt3 from './assets/shirt3.jpg'
import pants2 from './assets/pants2.jpg'
import pants3 from './assets/pants3.jpg'

function App() {
  const cardData = [
    {
      title: 'Card 1',
      description: 'This is the first card',
      image: shirt1,
    },
    {
      title: 'Card 2',
      description: 'This is the second card',
      image: shirt2,
    },
    {
      title: 'Card 3',
      description: 'This is the third card',
      image: shirt3,
    },
    {
      title: 'Card 4',
      description: 'This is the fourth card',
      image: pants2,
    },
    {
      title: 'Card 5',
      description: 'This is the fifth card',
      image: pants3,
    },
    {
      title: 'Card 6',
      description: 'This is the sixth card',
      image: shirt3,
    },
    {
      title: 'Card 7',
      description: 'This is the seventh card',
      image: pants3,
    },
    {
      title: 'Card 8',
      description: 'This is the eighth card',
      image: shirt1,
    },
    {
      title: 'Card 9',
      description: 'This is the ninth card', // Fixed typo
      image: shirt2,
    },
    {
      title: 'Card 10',
      description: 'This is the tenth card',
      image: shirt3,
    },
    {
      title: 'Card 11',
      description: 'This is the eleventh card',
      image: pants2,
    },
  ]

  return (
    <>
      <h2 className="heading">All cards are here</h2>
      <div className="app">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </>
  )
}

export default App
