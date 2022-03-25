import { configureStore } from '@reduxjs/toolkit';

//import reducers
import mentorsReducer from '../features/mentors/mentorsSlice';

export default configureStore({
    reducer: {
        mentors: mentorsReducer,
    },
})
