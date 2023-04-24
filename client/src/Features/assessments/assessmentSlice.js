import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterToken } from "../../Components/utils/auth";

const recruiterToken = getRecruiterToken()

export const fetchAssess = createAsyncThunk("assess/fetchAssess", async() => {
    const response = await fetch("https://recruits.onrender.com/assessments", {
      headers: {
        Authorization: `Bearer ${recruiterToken}`,
      },
    });
    const data = await response.json();
    return data;
  });

  export const createAssessment = createAsyncThunk(
    "assess/createAssessment",
    async (assessmentData, { rejectWithValue, getState }) => {
      const { recruiterToken } = getState();
      try {
        const response = await fetch("https://recruits.onrender.com/assessments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recruiterToken}`,
          },
          body: JSON.stringify(assessmentData),
        });
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return rejectWithValue(data.errors);
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const reviewAssesment = createAsyncThunk("assess/reviewAssessment",
  async ({ assessmentId, reviewData }, { rejectWithValue, getState }) => {
    const { recruiterToken } = getState();
    try {
      const response = await fetch(
        `https://recruits.onrender.com/assessments/${assessmentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recruiterToken}`,
          },
          body: JSON.stringify(reviewData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        // handle successful submission
        return data
      } else {
        return rejectWithValue(data.errors);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
   
  )

// function assesmentReducer(state = initialState, action) {
//     switch (action.type) {
//       case 'SET_ASSESSMENTS':
//         return { ...state, assessments: action.payload };
//       default:
//         return state;
//     }
// }

 const assessmentSlice =  createSlice({
    name: "assessment",
    initialState:{
        assessments: [],
        status: "idle",
    },
    reducers:{
        setAssessment(state,action){
          state.assessments = action.payload;
        },
        addAssessment(state, action) {
          state.assessments.push(action.payload);
        }
    },
    extraReducers:{
        [fetchAssess.pending](state) {
            state.status = "loading";
        },
        [fetchAssess.fulfilled](state, action) {
            state.assessments = action.payload;
            state.status = "idle";
        },
        [createAssessment.fulfilled](state, action) {
            state.assessments.push(action.payload);
            state.status = "idle";
        },
        [reviewAssesment.fulfilled](state, action) {
          state.assessments.push(action.payload);
          state.status = "idle";
      },
    }
})
 

export default assessmentSlice.reducer