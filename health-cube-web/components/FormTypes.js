import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FormTypesContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FormTypeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FormTypeItem = styled.li`
  margin-bottom: 10px;
`;

const FormTypeLink = styled.a`
  display: block;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const FormTypes = () => {
  const [formTypes, setFormTypes] = useState([]);

  useEffect(() => {
    const fetchFormTypes = async () => {
      try {
        const response = await fetch('/api/forms');
        if (response.ok) {
          const data = await response.json();
          setFormTypes(data.formTypes);
        } else {
          console.error('Error fetching form types');
        }
      } catch (error) {
        console.error('Error fetching form types', error);
      }
    };

    fetchFormTypes();
  }, []);

  return (
    <FormTypesContainer>
      <h2>Form Types</h2>
      <FormTypeList>
        {formTypes.map((formType) => (
          <FormTypeItem key={formType}>
            <Link href={`/Filled_forms/${encodeURIComponent(formType)}`}>
              <FormTypeLink>{formType}</FormTypeLink>
            </Link>
          </FormTypeItem>
        ))}
      </FormTypeList>
    </FormTypesContainer>
  );
};

export default FormTypes;
