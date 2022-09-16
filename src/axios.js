import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://clone-8eabf/us-central1/api'
});

export default instance;


