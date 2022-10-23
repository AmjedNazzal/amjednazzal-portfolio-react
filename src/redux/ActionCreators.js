import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const fetchAboutMe = () => (dispatch) => {

	dispatch(pageLoading(true));

	setTimeout(() => {
		return fetch(baseUrl + 'aboutMe')
		.then(response => {
			if (response.ok) {
				return response;
			}
		})
		.then(response => response.json())
		.then(aboutMe => dispatch(addAboutMe(aboutMe)))
		.catch(error => dispatch(loadingFailed(error.message)));
	}, 2000);
	
} 

export const pageLoading = () => ({
	type: ActionTypes.PAGE_LOADING
});

export const loadingFailed = (errmess) => ({
	type: ActionTypes.LOADING_FAILED,
	payload: errmess
});


export const addAboutMe = (aboutMe) => ({
	type: ActionTypes.ADD_ABOUTME,
	payload: aboutMe
});


export const fetchExperiences = () => (dispatch) => {

	return fetch("db.json")
		.then(response => {
			if (response.ok) {
				return response;
			}
		})
		.then(response => response.json())
		.then(experiencesAndSkills => dispatch(addExperiences(experiencesAndSkills)));
} 


export const addExperiences = (experiencesAndSkills) => ({
	type: ActionTypes.ADD_EXPERIENCES,
	payload: experiencesAndSkills
});



export const fetchContact = () => (dispatch) => {

	return fetch("db.json")
		.then(response => {
			if (response.ok) {
				return response;
			}
		})
		.then(response => response.json())
		.then(Contact => dispatch(addContact(Contact)));
} 


export const addContact = (Contact) => ({
	type: ActionTypes.ADD_CONTACT,
	payload: Contact
});