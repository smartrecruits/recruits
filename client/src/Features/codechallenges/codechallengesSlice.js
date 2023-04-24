import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterToken } from "../../Components/utils/auth";

const recruiterToken = getRecruiterToken()

  export const fetchCode = createAsyncThunk("code/fetchCode", async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://recruits.onrender.com/code_challenges", {
        headers: {
          Authorization: `Bearer ${recruiterToken}`,
        },
      });
      const data = await response.json();
  
      if (!response.ok) {
        return rejectWithValue(data.errors);
      }
  
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

  export const createCode = createAsyncThunk(
    "code/createCode",
    async (assessmentData, { rejectWithValue, getState }) => {
      const { recruiterToken } = getState();
      try {
        const response = await fetch("https://recruits.onrender.com/code_challenges", {
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

//   export const reviewAssesment = createAsyncThunk("code/review",
//   async ({ assessmentId, reviewData }, { rejectWithValue, getState }) => {
//     const { recruiterToken } = getState();
//     try {
//       const response = await fetch(
//         `https://recruits.onrender.com/assessments/${assessmentId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${recruiterToken}`,
//           },
//           body: JSON.stringify(reviewData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         // handle successful submission
//         return data
//       } else {
//         return rejectWithValue(data.errors);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
   
//   )

// function assesmentReducer(state = initialState, action) {
//     switch (action.type) {
//       case 'SET_ASSESSMENTS':
//         return { ...state, assessments: action.payload };
//       default:
//         return state;
//     }
// }

 const codechallengesSlice =  createSlice({
    name: "code_challenges",
    initialState:{
        codes: [],
        status: "idle",
    },
    reducers:{
        setAssessment(state,action){
          state.codes = action.payload;
        },
        addAssessment(state, action) {
          state.codes.push(action.payload);
        }
    },
    extraReducers:{
        [fetchCode.pending](state) {
            state.status = "loading";
        },
        [fetchCode.fulfilled](state, action) {
            state.codes = action.payload;
            state.status = "idle";
        },
        [createCode.fulfilled](state, action) {
            state.codes.push(action.payload);
            state.status = "idle";
        },
        
    }
})
 

export default codechallengesSlice.reducer