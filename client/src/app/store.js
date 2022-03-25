import { configureStore } from '@reduxjs/toolkit';

//import reducers
import { mentorAdded } from '../features/mentors/mentorsSlice';

export default configureStore({
    reducer: {
        mentors: mentorAdded
    },
})