import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMentors = createAsyncThunk("mentors/fetchMentors", () => {
    //return a Promis containing the data we want
    return fetch("http://localhost:3000/mentors")
    .then((response) => response.json())
    // then(setHabits);
    // then((data) => data.images)
    .then((data) => data);
})

const mentorsSlice = createSlice({
    name: "mentors",
    initialState: {
        entities: [], //array of mentors
        status: "idle", //loading state
    },

    reducers: {
        mentorAdded(state, action){
            //using createSlice allows me to mutate state
            state.entities.push(action.payload);
        },
        // catUpdated(state, action) {
        //     const cat = state.entities.find((cat) => cat.id === action.payload.id);
        //     cat.url = action.payload.url;
        // },
    },

    extraReducers: {
        //handle async actions: pending, fulfilled, rejected (for errors)
        [fetchMentors.pending](state) {
            state.status = "loading";
        },
        [fetchMentors.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    },
});

export const { mentorAdded } = mentorsSlice.actions;

export default mentorsSlice.reducer;