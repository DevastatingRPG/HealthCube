'use client'
import { useEffect, useState } from 'react';
import BackToHome from '../components/BackToHome';

const Uploaded_forms = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/files');
        if (response.ok) {
          const data = await response.json();
          setFiles(data.files);
        } else {
          console.error('Error fetching files');
        }
      } catch (error) {
        console.error('Error fetching files', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
      <BackToHome />
    </div>
  );
};

export default Uploaded_forms;