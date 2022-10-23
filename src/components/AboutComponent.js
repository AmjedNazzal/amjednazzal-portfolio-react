import React from 'react';
import { Loading } from './LoadingComponent';

function RenderGeneral({general}) {
    if(general) {
        return (
            <div>
                <h3>General Info</h3>
                <p>Gender: {general.gender}</p>
                <p>Nationality: {general.nationality}</p>
                <p>Bithday: {general.bithdate}</p>
            </div>
        );
    }
}

function RenderEducation({education}) {
    if(education) {
        const degree = education.degree;
        const coursesSplit = education.courses.map((course) => {
            return (
                
                <div key={course.id}>
                    <ul>
                        <li>
                        <p>School: {course.school}</p>
                        <p>Major: {course.major}</p>
                        <p>Year: {course.year}</p>
                        </li>
                    </ul>
                </div>
                
            );
        });

        return (
            <div>
                <h3>Education</h3>
                <div>
                    <h5>Degree</h5>
                    <ul>
                        <li>
                            <p>School: {degree.school}</p>
                            <p>Major: {degree.major}</p>
                            <p>Degree: {degree.degree}</p>
                            <p>Year: {degree.year}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Courses</h5>
                    {coursesSplit}
                </div>
            </div>
        );
        
    }
}

function RenderLanguages({languages}) {
    if(languages) {
        const languagesMapped = languages.map((language) => {
            return (
                
                <div key={language.id}>
                    <ul>
                        <li>
                        <p>Language: {language.language}</p>
                        <p>Spoken: {language.spoken}</p>
                        <p>Written: {language.written}</p>
                        </li>
                    </ul>
                </div>
                
            );
        });

        return (
            <div>
                <h3>Languages</h3>
                {languagesMapped}
            </div>
        );
    }
}

const About = (props) => {
        if(props.isLoading) {
            return(
				<div className="container">
					<div className="row">
						<Loading />
					</div>
				</div>
			);
        }
        else if (props.errMess) {
			return(
				<div className="container">
					<div className="row">
						<h4>{props.errMess}</h4>
					</div>
				</div>
			);
		}
        else if (props.aboutMe != null)
        return(
            <div>
                <h1>About Me</h1>
                <RenderGeneral general={props.aboutMe.general} />
                <RenderEducation education={props.aboutMe.education} />
                <RenderLanguages languages={props.aboutMe.languages} />
            </div>
        );
    
}

export default About;