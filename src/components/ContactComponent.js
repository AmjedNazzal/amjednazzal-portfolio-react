import React from 'react';

function RenderContact({contact}) {
    if(contact) {
        return (
            <div>
                <h3>Contact Info</h3>
                <p>Email: {contact.email}</p>
                <p>Phone No: {contact.phonenum}</p>
                <p>Linkedin: <span><a className="btn btn-social-icon btn-linkedin" href={contact.linkedin} target="_blank"><i className="fa fa-linkedin"></i></a></span></p>
                <p>Facebook: <span><a className="btn btn-social-icon btn-facebook" href={contact.facebook} target="_blank"><i className="fa fa-facebook"></i></a></span></p>
            </div>
        );
    }
}


function Contact(props) {
    
        return(
            <div>
                <h1>Contact Me</h1>
                <RenderContact contact={props.contactMe.contact} />
            </div>
        );
    
}

export default Contact;