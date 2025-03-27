import '../components/Header.css';
import '../styles.css';


function Header(prop){
    return (
        <div className='header-container'>
            <h1>{prop.heading}</h1>
        </div>
    )
}

export default Header;