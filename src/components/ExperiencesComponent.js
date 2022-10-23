import React from 'react';

function RenderExperiences({experiences}) {
    if(experiences) {
        const ExperiencesSplit = experiences.map((experience) => {
            return (
                
                <div key={experience.id}>
                    <ul>
                        <li>
                        <p>Company: {experience.company}</p>
                        <p>Position: {experience.position}</p>
                        <p>Year: {experience.year}</p>
                        </li>
                    </ul>
                </div>
                
            );
        });

        return (
            <div>
                <h3>Experiences</h3>
                {ExperiencesSplit}
            </div>
        );
        
    }
}


function RenderSkills({skills}) {
    if(skills) {
        const WebDev = skills.webDev.map((skill) => {
            return (
                
                <div key={skill.id}>
                    <ul>
                        <li>
                        <p>Skill: {skill.skill}</p>
                        </li>
                    </ul>
                </div>
                
            );
        });
        const Software = skills.software.map((skill) => {
            return (
                
                <div key={skill.id}>
                    <ul>
                        <li>
                        <p>Skill: {skill.skill}</p>
                        </li>
                    </ul>
                </div>
                
            );
        });

        return (
            
            <div>
                <h3>Skills</h3>
                <div>
                    <h5>Web Development</h5>
                    {WebDev}
                </div>
                <div>
                    <h5>Other Languages</h5>
                    <p>Skill: {skills.otherLangs.skill}</p>
                </div>
                <div>
                    <h5>Software</h5>
                    {Software}
                </div>
                <div>
                    <h5>Hardware</h5>
                    <p>Skill: {skills.hardware.skill}</p>
                </div>
                
            </div>
        );
        
    }
}

const Experiences = (props) => {

    return(
        <div>
            <h1>Experiences and Skills</h1>
            <RenderExperiences experiences={props.experiences.experiences} />
            <RenderSkills skills={props.experiences.skills} />
        </div>
);
   
}

export default Experiences;