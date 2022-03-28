import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMentors = createAsyncThunk("mentors/fetchMentors", async () => {
    //return a Promise containing the data we want
    return fetch("http://localhost:3000/mentors")
    .then((response) => response.json())
    // then(setHabits);
    // then((data) => data.images)
    .then((data) => data);
})

export const fetchMentorId = createAsyncThunk("mentors/fetchMentorId", async (mentorId) => {
    //return a Promise containing the data we want
    return fetch(`http://localhost:3000/mentors/${mentorId}`)
        .then((response) => response.json())
});

const mentorsSlice = createSlice({
    name: "mentors",
    initialState: {
        entities: [], //array of mentors
        mentorData: {},
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
        [fetchMentorId.pending](state){
            state.status = "loading"
        },
        [fetchMentorId.fulfilled](state, action){
            state.mentorData = action.payload;
            state.status = "idle";
        },
    },
});

export const { mentorAdded } = mentorsSlice.actions;

export default mentorsSlice.reducer;
