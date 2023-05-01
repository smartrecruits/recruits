import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterToken } from "../../Components/utils/auth";

const recruiterToken = getRecruiterToken()

  export const fetchAssess = createAsyncThunk("assess/fetchAssess", async () => {
    try {
      const response = await fetch(`https://recruits.onrender.com/assessments/`, {
        // headers: {
        //   Authorization: `Bearer ${recruiterToken}`,
        // },
      });
      const data = await response.json();
  
      if (!response.ok) {
        return Promise.reject(data.errors);
      }
  
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  });
  export const fetchOneAssess = createAsyncThunk("assess/fetchOneAssess", 
  async (assessmentId) => {
    try {
      const response = await fetch(`https://recruits.onrender.com/assessments/${assessmentId}`, {
        // headers: {
        //   Authorization: `Bearer ${recruiterToken}`,
        // },
      });
      const data = await response.json();
  
      if (!response.ok) {
        return Promise.reject(data.errors);
      }
  
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  });

  export const createAssessment = createAsyncThunk(
    "assess/createAssessment",
    async (assessmentData,) => {
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
        } 
        else {
          console.error(data.errors);
          return Promise.reject(data.errors);
        }
      } catch (error) {
        console.error(error.message);
        return Promise.reject(error.message);
      }
    }
  );

  export const reviewAssesment = createAsyncThunk(
    "assess/reviewAssessment",
  async ({ assessmentId, reviewData }) => {
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
        return Promise.reject(data.errors);
      }
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
   
  )
  export const updateAssessment = createAsyncThunk(
    "assess/updateAssessment",
  async ({ assessmentId, updateData }) => {
    try {
      const response = await fetch(
        `https://recruits.onrender.com/assessments/${assessmentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recruiterToken}`,
          },
          body: JSON.stringify(updateData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        // handle successful submission
        return data
      } else {
        return Promise.reject(data.errors);
      }
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
   
  )

 const assessmentSlice =  createSlice({
    name: "assessment",
    initialState:{
        assessments: [],
        status: "idle",
        assessment:[],
    },
    reducers:{
        setAssessment(state,action){
          state.assessments = action.payload;
        },
        addAssessment(state, action) {
          state.assessments.push(action.payload);
        }
    },
    extraReducers(builder){
      builder 
        .addCase(fetchAssess.pending,(state)=> {
            state.status = "loading";
        })
        .addCase(fetchAssess.fulfilled,(state, action)=> {
            state.assessments = action.payload;
            state.status = "idle";
        })
        .addCase(fetchOneAssess.fulfilled,(state, action)=> {
          state.assessment = action.payload;
          state.status = "idle";
        })
        .addCase(createAssessment.fulfilled,(state, action)=> {
            state.assessments.push(action.payload);
            state.status = "idle";
        })
        .addCase(updateAssessment.pending,(state, action)=> {
          state.status = "loading";
        })
        .addCase(updateAssessment.fulfilled,(state, action)=> {
          state.assessment = action.payload;
          state.assessments.push(action.payload);
          state.status = "idle";
        })
        .addCase(reviewAssesment.fulfilled,(state, action) =>{
          state.assessments.push(action.payload);
          state.assessment = action.payload;
          state.status = "idle";
        });
    }
})
 

export default assessmentSlice.reducer

