import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterToken } from "../../Components/utils/auth";
import { getIntervieweeToken } from "../../Components/utils/auth";
const recruiterToken = getRecruiterToken()
const intervieweeToken = getIntervieweeToken()

  export const fetchAnswer = createAsyncThunk("answer/fetchAnswer", async (_, { rejectWithValue }) => {
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
//   export const fetchCodeChallenge = createAsyncThunk(
//     'code/fetchCodeChallenge',
//     async (id , {rejectWithValue}) => {
//       try {
//         const response = await fetch(`https://recruits.onrender.com/code_challenges/${id}`,{
//             headers: {
//                 Authorization: `Bearer ${intervieweeToken}`,
//               },
//         });
//         const data = await response.json();
  
//         if (!response.ok) {
//           return rejectWithValue(data.errors);
//         }
//         return data;
//       } catch (error) {
//         return rejectWithValue(error.message);

//       }
//     }
//   );

  export const createAnswer = createAsyncThunk(
    "answer/createAnswer",
    async (AnswerData, { rejectWithValue, getState }) => {
      const { intervieweeToken } = getState();
      try {
        const response = await fetch("https://recruits.onrender.com/answers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${intervieweeToken}`,
          },
          body: JSON.stringify(AnswerData),
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


 const answerSlice =  createSlice({
    name: "answers",
    initialState:{
        answers: [],
        status: "idle",
        error: null
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
        [fetchAnswer.pending](state) {
            state.status = "loading";
        },
        [fetchAnswer.fulfilled](state, action) {
            state.answers = action.payload;
            state.status = "idle";
        },
        [createAnswer.fulfilled](state, action) {
            state.answers.push(action.payload);
            state.status = "idle";
        },
       
    }
})
 

export default answerSlice.reducer

export const selectAnswer = (state) => state.codes;
