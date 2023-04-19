import React, { useState } from 'react';
import axios from 'axios';

type Props = {};

const PostFile: React.FC<Props> = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const sendImageFile = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await axios.post('http://127.0.0.1:5000/api/upload', formData);
      console.log('response: ', res.data);
    } catch (error) {
      console.error('Failed to upload file.', error);
    }
  };

  return (
    <>
      <input type='file' onChange={fileSelectedHandler} />
      <div>
        <button onClick={sendImageFile}>送信する</button>
      </div>
    </>
  );
};

export default PostFile;
