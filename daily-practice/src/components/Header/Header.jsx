// export default Header;
// named export
import './Header.css'
import { SearchBar } from './SearchBar';
export function Header() {
    const myStyle = {backgroundColor:'#3d3d3d',padding:'0.5rem'}
    return (
        <div>
            <header style={myStyle}>
                <h1 className="dark">This is a header</h1>
                <input/>
            </header>
            <SearchBar/>
        </div>
    )
}



