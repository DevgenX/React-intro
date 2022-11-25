
import './card-list.css'
import Card from '../card/card-component';

const CardList = ({ monsters }) => (
            <div className='card-list'>
                {monsters.map((monster) => {
                    // destructure to be optimized
                return <Card monster={monster} />;
                })}
            </div>
        )
export default CardList;





// const CardList = (props) => (
//     <div>
//         {
//             props.monsters.map((monster) => (
//             <h1 key={monster.id}>{monster.name}</h1>
//         ))
//     }
//     </div>
// )

// export default CardList 