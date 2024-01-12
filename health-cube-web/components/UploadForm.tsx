"use client"
import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

// Define the UploadFormProps type
interface UploadFormProps {
  onFileUpload: (file: File) => void;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 0.5px solid #6e6d6d;
  border-radius: 5px;
  font-size: 16px;
`;

const UploadButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const UploadForm: React.FC<UploadFormProps> = ({ onFileUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <FormContainer>
      <FileInput type="file" onChange={handleChange} />
      <UploadButton onClick={handleSubmit}>Upload</UploadButton>
    </FormContainer>
  );
};

export default UploadForm;
