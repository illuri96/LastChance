import axios from 'axios';




const API = axios.create({ baseURL: 'http://localhost:5000' });


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


//posts
export const fetchPost = (id) => API.get(`/post/${id}`)
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);


//auth
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);



//sections

export const fetchVideos = () => axios.get(URL);

const URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLRdtia2uhfV_Malt1N8bn-Jx64SJSYDhH&key=AIzaSyBUfrWbi7vXj4VdtJ8RQwGzzE-tXmuNolw';