import { createStore, combineReducers, applyMiddleware } from "redux";
import { AboutReducer } from "./AboutMeReducer";
import { ExperiencesReducer } from "./ExperiencesReducer";
import { ContactReducer } from "./ContactReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            StoreAboutMe: AboutReducer,
            StoreExperiences: ExperiencesReducer,
            StoreContact: ContactReducer
        }),
        applyMiddleware(thunk, logger)
    );
    
    
    return store;
}