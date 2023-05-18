import Description from './Description'
import Price from './Price'
import Notes from './Notes'
import Size from './Size'

const Fragrance = (props) => {
  return (
    <div className="fragrance-list">
      <img
        className="bottle-image"
        src={props.fragrances['bottle-image']}
        alt={props.fragrances.name}
      ></img>
      <h2 className="fragrance-designer">{props.fragrances.designer}</h2>
      <h3 className="fragrance-name">{props.fragrances.name}</h3>
      <ul className="price-size">
        <li>
          <Price className="price" price={props.fragrances.price} />
        </li>
        <li>
          <Size size={props.fragrances.size} />
        </li>
      </ul>
      <ul className="description">
        <li>
          <Description description={props.fragrances.description} />
        </li>
        <li>
          Notes: <Notes scent-notes={props.fragrances['scent-notes']} />
        </li>
      </ul>
    </div>
  )
}
export default Fragrance
