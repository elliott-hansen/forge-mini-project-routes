import "./ProjectCard.css"

export const ProjectCard = ({title="", url="", img=""}) => {
    return(
        <>
            <a href="https://elliott-hansen.github.io/" className="project-card">
                <div className="project-card-footer">
                    <span> {title} </span>
                </div>
            </a>
        </>
    )
}