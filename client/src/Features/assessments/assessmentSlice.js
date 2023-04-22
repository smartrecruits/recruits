import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    assessments: []
};

export const fetchAssess = createAsyncThunk("assess/fetchAssess", () => {
    // return a Promise containing the data we want
    return fetch("/assessments")
      .then((response) => response.json())
      .then((data) => data);
  });

function assesmentReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_ASSESSMENTS':
        return { ...state, assessments: action.payload };
      default:
        return state;
    }
}

const assessmentSlice =  createSlice({
    name: "assessments",
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
 
export default assesmentReducer