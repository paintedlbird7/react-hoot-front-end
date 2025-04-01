// src/services/hootService.js
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;
// TODO: do User stories for trello AAU, under component hierarchy diagram
// TODO: In your browser, verify that typing in the CommentForm updates the formData state correctly.



const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

const show = async (hootId) => {
    try {
      const res = await fetch(`${BASE_URL}/${hootId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
const create = async (hootFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hootFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
// src/services/hootService.js

const createComment = async (hootId, commentFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${hootId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export {
    index,
    show,
    create,
    createComment,
  };
  
  
  