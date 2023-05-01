import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterToken } from "../../Components/utils/auth";
const recruiterToken = getRecruiterToken()

export const fetchQuestions = createAsyncThunk("questions/fetchQuestions", async(rejectWithValue) => {
    const response = await fetch("https://recruits.onrender.com/questions", {
      headers: {
        Authorization: `Bearer ${recruiterToken}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data.errors);
    }
    return data;
  });

  export const createQuestion = createAsyncThunk(
    "question/createQuestion",
    async (assessmentData) => {
      try {
        const response = await fetch("https://recruits.onrender.com/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recruiterToken}`,
          },
          body: JSON.stringify(assessmentData),
        });
        const data = await response.json();
        return data
        
      } catch (error) {
        // return rejectWithValue(error.message);
      }
    }
  );

 const questionSlice =  createSlice({
    name: "question",
    initialState:{
        questions: [],
        status: "idle",
    },
    reducers:{
        setAssessment(state,action){
          state.questions = action.payload;
        },
        addAssessment(state, action) {
          state.questions.push(action.payload);
        }
    },
    extraReducers(builder){
      builder
        .addCase(fetchQuestions.pending,(state)=> {
            state.status = "loading";
        })
        .addCase(fetchQuestions.fulfilled,(state, action)=> {
            state.questions = action.payload;
            state.status = "idle";
        })
        .addCase(createQuestion.fulfilled,(state, action)=> {
            state.questions.push(action.payload);
            state.status = "idle";
        });
       
    }
})
 

export default questionSlice.reducer
