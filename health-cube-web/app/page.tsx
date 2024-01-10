// pages/upload.js
"use client"
import UploadForm from '@/app/components/UploadForm';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;  /* Center the box and provide top margin */
  max-width: 500px;    /* Set the maximum width for the box */
  border: 2px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #d2d2fa;
  // background: linear-gradient(45deg, #3498db, #8e44ad);  /* Gradient background */
  box-shadow: 0 4px 8px rgba(0.3, 0.3, 0.3, 0.3);  /* Add a subtle box shadow */
`;

const Title = styled.h1`
  color: #010138;
  font-size: 3.5rem;
  margin-bottom: 20px;
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
      <Title>Upload new form</Title>
      <UploadForm onFileUpload={handleFileUpload} />
    </PageContainer>
  );
};

export default Upload;
