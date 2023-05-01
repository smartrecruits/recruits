import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterToken } from "../../Components/utils/auth";
import { getIntervieweeToken } from "../../Components/utils/auth";
const recruiterToken = getRecruiterToken()
const intervieweeToken = getIntervieweeToken()
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
  export const fetchCodeChallenge = createAsyncThunk(
    'code/fetchCodeChallenge',
    async (id ) => {
      try {
        const response = await fetch(`https://recruits.onrender.com/code_challenges/${id}`,{
            headers: {
                Authorization: `Bearer ${intervieweeToken}`,
              },
        });
        const data = await response.json();
  
        if (!response.ok) {
          console.error(data.errors);
          // return rejectWithValue(data.errors);
        }
        return data;
      } catch (error) {
        console.error(error.message);
        // return rejectWithValue(error.message);
      }
    }
  );

  export const createCode = createAsyncThunk(
    "code/createCode",
    async (assessmentData) => {
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
          console.error(data.errors);
          // return rejectWithValue(data.errors);
        }
      } catch (error) {
        console.error(error.message);
        // return rejectWithValue(error.message);
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

 const codechallengesSlice =  createSlice({
    name: "code_challenges",
    initialState:{
        codes: [],
        status: "idle",
        error: null,
        code:[],
    },
    reducers:{
        setAssessment(state,action){
          state.codes = action.payload;
        },
        addAssessment(state, action) {
          state.codes.push(action.payload);
        }
    },
    extraReducers(builder){
      builder
        .addCase(fetchCode.pending,(state)=> {
            state.status = "loading";
        })
        .addCase(fetchCode.fulfilled,(state, action)=> {
            state.codes = action.payload;
            state.status = "idle";
        })
        .addCase(createCode.fulfilled,(state, action)=> {
            state.codes.push(action.payload);
            state.status = "idle";
        })
        .addCase(fetchCodeChallenge.fulfilled,(state, action)=> {
            state.code = action.payload;
            state.status = "idle";
        });
    }
})
 

export default codechallengesSlice.reducer

export const selectCodeChallenge = (state) => state.code;
