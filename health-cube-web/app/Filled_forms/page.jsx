'use client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';



const ResponsesContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ResponseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResponseItem = styled.li`
  margin-bottom: 10px;
`;

const Page = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('https://plankton-app-uc5fz.ondigitalocean.app/view');
        if (response.ok) {
          const data = await response.json();
          setFiles(data);
          // console.log(data)
        } else {
          console.error('Error fetching files');
        }
      } catch (error) {
        console.error('Error fetching files', error);
      }
    };

    fetchFiles();
  }, []);

  const downloadFile = async (parentKey, fileName) => {
    try {
      const response = await fetch(`https://plankton-app-uc5fz.ondigitalocean.app/download?form=${parentKey}&uname=${fileName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file', error);
    }
  };

  return (
    <div>
      <h2>Filled Forms</h2>

      <ResponsesContainer>
        <ul>
          {files && Object.entries(files).map(([key, value], index) => (
            <li key={index}>
              <h3>{key}</h3>
              <ResponseList>
                <ul>
                  {value.map((item, i) => (
                    <ResponseItem key = {i}>
                      <li key={i} onClick={() => downloadFile(key, item)}>{item}</li>
                    </ResponseItem>
                  ))}
                </ul>
              </ResponseList>
            </li>
          ))}
        </ul>
      </ResponsesContainer>


    </div>
  );
};

export default Page;