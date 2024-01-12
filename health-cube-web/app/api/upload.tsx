// pages/api/upload.js
"use client"
import UploadForm from '../../components/UploadForm';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  color: #333;
`;

const Upload = () => {
  const handleFileUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Use the appropriate API endpoint to handle file upload
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
        // Handle success as needed
      } else {
        console.error('File upload failed');
        // Handle failure as needed
      }
    } catch (error) {
      console.error('Error uploading file', error);
      // Handle error as needed
    }
  };

  return (
    <PageContainer>
      <Title>File Upload Page</Title>
      <UploadForm onFileUpload={handleFileUpload} />
    </PageContainer>
  );
};

export default Upload;