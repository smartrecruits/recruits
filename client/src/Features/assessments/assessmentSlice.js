import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterToken } from "../../Components/utils/auth";

const recruiterToken = getRecruiterToken()
// const initialState = {
//     assessments: []
// };

export const fetchAssess = createAsyncThunk("assess/fetchAssess", () => {
    // return a Promise containing the data we want
    return fetch("https://recruits.onrender.com/assessments",{
        headers: {
          'Authorization': `Bearer ${recruiterToken}`
      }, })
      .then((response) => response.json())
      .then((data) => data);
  });

// function assesmentReducer(state = initialState, action) {
//     switch (action.type) {
//       case 'SET_ASSESSMENTS':
//         return { ...state, assessments: action.payload };
//       default:
//         return state;
//     }
// }

export const assessmentSlice =  createSlice({
    name: "assessment",
    initialState:{
        assessments: [],
        status: "idle",
    },
    reducers:{
        setAssessment(state,action){

        }
    },
    extraReducers:{
        [fetchAssess.pending](state) {
            state.status = "loading";
        },
        [fetchAssess.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    }
})
 

export default assessmentSlice.reducer