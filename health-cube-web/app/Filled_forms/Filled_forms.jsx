import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackToHome from '../../components/BackToHome';

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

const FormResponses = () => {
  const router = useRouter();
  const { formType } = router.query;
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        if (formType) {
          const response = await fetch(`/api/forms/${encodeURIComponent(formType)}`);
          if (response.ok) {
            const data = await response.json();
            setResponses(data.responses);
          } else {
            console.error('Error fetching form responses');
          }
        }
      } catch (error) {
        console.error('Error fetching form responses', error);
      }
    };

    fetchResponses();
  }, [formType]);

  return (
    <ResponsesContainer>
      <h2>Responses for {formType}</h2>
      <ResponseList>
        {responses.map((response, index) => (
          <ResponseItem key={index}>{response}</ResponseItem>
        ))}
      </ResponseList>
      <BackToHome />
    </ResponsesContainer>
  );
};

export default FormResponses;