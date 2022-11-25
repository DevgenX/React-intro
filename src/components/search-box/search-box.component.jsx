
import './search-box.styles.css'


const SearchBox = ({ className, placeholder, handleInputChange}) => (
        <input
         className= {`search-box ${className}`}
         type="search"
         placeholder={placeholder}
         onChange={handleInputChange}
       />
)

export default SearchBox;

// class SearchBox extends Component {
//     render() {
//         const { handleInputChange, placeholder, className } = this.props;
//         return (
//             <input 
//             className={`search-box ${className}`}
//             type="search"
//             placeholder={placeholder}
//             onChange={handleInputChange}
//            />
//         )
//     }
// }

// export default SearchBox;