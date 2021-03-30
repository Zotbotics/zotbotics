import './Home.css';

import Layout from "../../globals/Layout";
import Meeting from '../../assets/images/meeting.jpg';
import ZotboticsBanner from '../../assets/images/ZOTBOTICSSPARKFINAL1.png';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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

            <Accordion>
                <p className = "faq-header">Frequently Asked Questions</p>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    How can I join?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Please refer to our interested students section available <a href="interested-students">here</a>.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Do I need experience in robotics to participate in events?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>No experience is necessary to join Zotbotics! We welcome all students, regardless of major or previous robotics experience.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    Is there a fee to join the club?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>No, we do not require members to pay any fees to join Zotbotics.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    When does Zotbotics meet?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Meetings tend to shift quarter to quarter. Therefore to stay best updated, feel free to reach out via our email or Discord.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

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