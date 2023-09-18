import { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [Audio, setAudio] = useState('');

     const uploadDarsa = async (e) => {
      e.preventDefault();

      try {
        const formdata = new FormData();

        formdata.append("title" , title)
        formdata.append("category" , category)
        formdata.append("Audio" , Audio)

        axios.post('http://localhost:4000/api/Darsa' , formdata, {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        })
        .then((res) => {
          console.log(res);
        })
      } catch (error) {
        console.log(error);
      }

    

     }

  return (
    <>
      <div>
        <h1>Audio Upload Form</h1>
        <form onSubmit={uploadDarsa} encType="multipart/form-data">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
            />
            <input
             type="file"
            name="audio"
            // value={Audio}
            onChange={(e) => {
              setAudio(e.target.files[0])
              console.log(e.target.files);
            }}
            
             />
          </div>
          {/* <div>
            <label htmlFor="audio">Audio File:</label>
            <input
              type="file"
              id="audio"
              name="audio"
              accept="audio/*"
              onChange={(e) => {
                setAudio(e.target.files[0]);
              }}
              required
            />
          </div> */}
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
}

export default App;
