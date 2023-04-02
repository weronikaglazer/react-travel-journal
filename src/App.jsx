import React from 'react'
import './App.css'
import data from './data'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const cardElements = data.map(card => {
    return (
      <Card 
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <>
      <Header />
      <section className='content-container'>
        {cardElements}
      </section>
      <Footer />
    </>
  )
}

export default App
