import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDYzZjY1OTRkZDc3NzM0OGNjN2QwNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTcwMTMwNywiZXhwIjoxNjk5OTYwNTA3fQ._I-gxI7FcwY5bLoNijWp0_hW8MtHCuRr2b_iFzklQ6E";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzgyZGRiNjk4NDJmNTk4M2UyMmY5NiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDIzODQxMzQsImV4cCI6MTcwMjY0MzMzNH0.3WAOtt1MwNP5SbRTGH0esWmxbSpZ7lXV7nMDxrMgc-k"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});