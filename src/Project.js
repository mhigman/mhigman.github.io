import React, { useState } from 'react';
import styles from './Project.module.css'; // Import the CSS

const ProjectCard = ({ project, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles.projectCard} onClick={toggleModal}>
                {/*<img src={project.image} alt={project.title} className={styles.projectImage} />*/}
                <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.shortDescription}</p>
                </div>
            </div>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={toggleModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.imageWrapper}>
                            <img src={project.image} alt={project.title} className={styles.modalImage} />
                            <div className={styles.overlayContent}>
                                <h2 className={styles.modalTitle}>{project.title}</h2>
                                {/*<p className={styles.modalDescription}>{project.longDescription}</p>*/ children}
                                <a href={project.sourceLink} className={styles.modalButton}>
                                    View Source Code
                                </a>
                                <button onClick={toggleModal} className={styles.closeButton}>
                                    <svg className={styles.closeImage} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke={project.darkImage ? "#eaeaea" : "#2c3e50"} stroke-width="2"/>
                                        <path d="M9 9L15 15M15 9L9 15" stroke={project.darkImage ? "#eaeaea" : "#2c3e50"} stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
