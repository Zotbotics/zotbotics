import './Home.css';

import Layout from "../../globals/Layout";
import Meeting from '../../assets/images/meeting.jpg';
import ZotboticsBanner from '../../assets/images/ZOTBOTICSSPARKFINAL1.png';

const Home = () => {
    return (
        <Layout>
            <div className="home-header">
                <div className="img-container">
                    <img className="zotbotics-banner" src={ZotboticsBanner} alt="Zotbotics Banner" />
                </div>
                <div className="text-container">
                    Zotbotics is a project based robotics club at UCI, open to all majors and experience levels.
                    We are a club dedicated to exploring the field of robotics as well as building interesting and creative projects.
        </div>
            </div>
            <div className="info-section">
                <div className="p-5">
                    <h3>What does our club do?</h3>
                    <ul>
                        <li>The purpose of Zotbotics is to provide a community where students interested in the field of robotics can work on fully functional robots and apply their skill in mechanical engineering, electronics, and computer science.</li>
                        <li>Our members gain valuable experience that is applicable to education, research, and internship/careers</li>
                    </ul>
                </div>
                <img className='meeting' src={Meeting} alt='Zotbotics Meeting' />
            </div>
            <div className="interested-section">
                <h3>Interested?</h3>
                <p>Please click <a href="">here</a></p>
                <h3>Looking to contact us?</h3>
                <p>Please email <a href="">zotbotics@gmail.com</a></p>
            </div>
        </Layout>
    );
}

export default Home;