import React from 'react';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="wrapper">
                    <div className="disclaimer">
                        <p>This website is created with Reactjs and is a personal project to showcase experience</p>
                    </div>
                    <div className='social'>
                        <span><a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/amjad.nazzal.7/" target="_blank"><i className="fa fa-facebook"></i></a></span>
                        <span><a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/amjed-nazzal-040305160/" target="_blank"><i className="fa fa-linkedin"></i></a></span>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Footer;