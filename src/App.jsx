import './App.css'
import fragranceArray from './fragrances.json'
import Fragrance from './components/Fragrance'

const App = () => {
  return (
    <div className="fragrances">
      <nav>
        <img className="logo" src="src/Lo Eats World Logo-01.png" alt="Logo" />
        <ul className="navigation">
          <li id="home">Home</li>
          <li id="restaurant">Restaurant Reviews</li>
          <li id="travel">Travel Stories</li>
          <li id="fashion">Fashion</li>
          <li id="books">Books</li>
          <li id="life">Slice of Life</li>
        </ul>
      </nav>
      <h1 className="title">30 Fragrances To Purchase In Your 30s</h1>
      <img
        className="banner-image"
        src="https://resources.stuff.co.nz/content/dam/images/4/y/v/u/a/d/image.related.StuffLandscapeSixteenByNine.1420x800.4yvuab.png/1637197870888.jpg"
        alt="banner-image"
      />
      <p className="blurb">
        Luxury fragrances evoke a sense of opulence, elegance, and indulgence.
        Crafted with meticulous care and using the finest ingredients, luxury
        fragrances offer a sensory experience that is truly exceptional. These
        fragrances are created by renowned perfumers who possess an
        extraordinary talent for blending notes in perfect harmony.Wearing a
        luxury fragrance is an expression of personal style and should be chosen
        wisely. As you evolve into your 30s, your personal style is bound to
        evolve as well. Check out these 30 fragrances to purchase in your 30s
        and stand out even more!
      </p>
      {fragranceArray.map((fragrances) => (
        <Fragrance fragrances={fragrances} key={fragrances.name} />
      ))}
    </div>
  )
}

export default App
