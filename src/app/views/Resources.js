import Layout from "../../globals/Layout";
import ResourceCard from "./ResourceButton";
import "./Resources.css";
import {useState} from "react";
import ResourceModal from "./ResourceModal";

const categories = {
    "Introduction to Mechanical Design": () => {},
    "Robot Operating System": () => {},
    "MIT Opencourseware: Intro to Robotics": () => {},
    "Dev Boards": () => {},
    "Robotics Professors at UCI": () => {},
    "OpenCV": () => {},
}

const ResourceCardsGrid = () => {
    return Array.from(categories.keys).map((title) => {
        return <ResourceCard title={title}/>
    })
}

function goToMechDesign() {
    window.open("https://www.youtube.com/playlist?list=PLAXJqmuqGEr706zgRtnwgQiFC5FYLvaTr", "_blank")
}

function goToRos() {
    window.open("https://www.ros.org", "_blank")
}

function goToOpenCV() {
    window.open("https://opencv.org/about/", "_blank")
}

function goToCourseware() {
    window.open("https://ocw.mit.edu/courses/mechanical-engineering/2-12-introduction-to-robotics-fall-2005/lecture-notes/", "_blank")
}

const Resources = () => {
    const [prof, setProf] = useState(false)
    const [boards, setBoards] = useState(false)

    const showProf = () => setProf(true)
    const closeProf = () => setProf(false)

    const showBoards = () => setBoards(true)
    const closeBoards = () => setBoards(false)

    return (
        <Layout>
            <div className={"resources-grid"}>
                <ResourceCard
                    title = "Introduction to Mechanical Design"
                    action = {goToMechDesign}
                />
                <ResourceCard
                    title = "Robot Operating System"
                    action = {goToRos}
                />
                <ResourceCard
                    title = "MIT Opencourseware: Intro to Robotics"
                    action = {goToCourseware}
                />
                <ResourceCard
                    title = "Dev Boards"
                    action = {showBoards}
                />
                <ResourceCard
                    title = "Robotics Professors at UCI"
                    action = {showProf}
                />
                <ResourceCard
                    title = "OpenCV"
                    action = {goToOpenCV}
                />

                <ResourceModal
                    title = "Dev Boards"
                    isVisible = {boards}
                    exit = {closeBoards}>
                    <ul>
                        <li><a href = "https://developer.nvidia.com/buy-jetson">Nvidia Jetson</a></li>
                        <li><a href = "https://developer.qualcomm.com/hardware/dragonboard-410c">Dragonboard 410c</a></li>
                        <li><a href = "https://www.arduino.cc/">Arduino</a></li>
                        <li><a href = "https://www.raspberrypi.org/">Raspberry Pi</a></li>
                    </ul>
                </ResourceModal>

                <ResourceModal
                    title = "UCI Robotics Professors"
                    isVisible = {prof}
                    exit = {closeProf}>
                    <ul>
                        <li>Professor Roy Fox - Intelligent Dynamic Labs</li>
                        <li>Professor Jeffrey Krichmar - Cognitive Anteater Robotics Lab</li>
                        <li>David Reinkensmeyer - Biorobotics Lab</li>
                        <li>Professor zak M Kassas - ASPIN Lab</li>
                    </ul>
                </ResourceModal>
            </div>


        </Layout>
    );
}

export default Resources;