import axios from "axios";

axios.defaults.baseURL = 'https://moments-walkthrough-2-8739a447c4cc.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
