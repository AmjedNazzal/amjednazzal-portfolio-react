import React, { Component } from 'react';
import About from './AboutComponent';
import Experiences from './ExperiencesComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Loading } from './LoadingComponent';
import { connect } from 'react-redux';
import { Routes, Route, Navigate, withRouter } from 'react-router-dom';
import { fetchAboutMe, fetchExperiences, fetchContact } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      MainAboutMe: state.StoreAboutMe,
      MainExperiences: state.StoreExperiences,
      MainContact: state.StoreContact
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAboutMe: () => {dispatch(fetchAboutMe())},
    fetchExperiences: () => {dispatch(fetchExperiences())},
    fetchContact: () => {dispatch(fetchContact())} 
});



class Main extends Component {
    
    componentDidMount() {
        this.props.fetchAboutMe();
        this.props.fetchExperiences();
        this.props.fetchContact();
    }


    render(){

        if(this.props.MainAboutMe.isLoading) {
            return(
				<div className="LoadingMain">
					<div>
						<Loading />
					</div>
				</div>
			);
        }

        else if (this.props.MainAboutMe.errMess) {
			return(
				<div className="container">
					<div className="row">
						<h4>{this.props.MainAboutMe.errMess}</h4>
					</div>
				</div>
			);
		}
        else if (this.props.MainAboutMe.aboutMe != null){
            const AboutPage = () => {
                return(
                  <About aboutMe={this.props.MainAboutMe.aboutMe}
                    isLoading={this.props.MainAboutMe.isLoading}
                    errMess={this.props.MainAboutMe.errMess}
                  />
                );
              }
            
            return(
                <div className='MainComp'>
                    <Header />
                    <div className='PageBody'>
                        <Routes>
                        <Route exact path="/aboutme" element={<AboutPage />} />
                        <Route exact path="/experiences" element={<Experiences experiences={this.props.MainExperiences.experiences}/>} />
                        <Route exact path="/contact" element={<Contact contactMe={this.props.MainContact.contactMe}/>} />
                        <Route
                            path="*"
                            element={<Navigate to="/aboutme" replace />}
                        />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            );
        }
        
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));