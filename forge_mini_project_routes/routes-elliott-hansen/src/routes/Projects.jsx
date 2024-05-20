import "../css/Projects.css";
import { ProjectCard } from "../components/ProjectCard.jsx";

export const Projects = ({}) => {
    return (
        <>
            <div>
                <h1>Projects</h1>
                <div className="projects-row">
                    <ProjectCard title={"Wahoo-What Major"}/>
                    <ProjectCard title={"Hurtle"}/>
                    <ProjectCard title={"Another Project"}/>
                    <ProjectCard title={"Enigma Machine"}/>
                </div>
            </div>
        </>
    )
}