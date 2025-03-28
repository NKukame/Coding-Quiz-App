import '../components/SideBar.css';
import '../styles.css';
import { Link } from "react-router";
import quizIcon from '../assets/quiz.png';
import homeIcon from '../assets/3d-house.png';
import categoryIcon from '../assets/category.png';
import quizIconTwo from '../assets/quiz icon.png';


function SideBar(){
    return (
        <div className='sidebar-container'>

            <div className='sidebar-logo-container'>
                <img src={quizIcon} alt="Quiz Icon" className='sidebar-logo'/>
                <p>Coding Quiz Webpage</p>
            </div>

            <div className='sidebar-menu-container'>

                <Link to="/" className='sidebar-nav-link'>
                    <img src={homeIcon} alt="Quiz Icon" className='sidebar-nav-logo'/>
                    <p>Home</p>
                </Link>

                <Link to="/" className='sidebar-nav-link'>
                    <img src={categoryIcon} alt="Quiz Icon" className='sidebar-nav-logo'/>
                    <p>Customization</p>
                </Link>

                <Link to="/" className='sidebar-nav-link'>
                    <img src={quizIconTwo} alt="Quiz Icon" className='sidebar-nav-logo'/>
                    <p>Quiz</p>
                </Link>
                
            </div>

        </div>
    )
}

export default SideBar;