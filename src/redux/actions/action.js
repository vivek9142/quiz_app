import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.api-ninjas.com/v1/trivia?category=music&limit=5";
console.log(process.env);
const getQues = createAsyncThunk("Ques/fetchQuestions", async () => {
  const response = await axios.get(url, {
    headers: { "X-Api-Key": process.env.REACT_APP_NOT_SECRET_CODE },
  });
  return response.data;
});

export { getQues };
