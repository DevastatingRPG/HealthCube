

// import React, { useState, useEffect } from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import ButtonG from '../components/dash';
// import { Link, router } from 'expo-router'
// import { Text } from '@rneui/themed';
// import { ScrollView, View } from 'react-native';
// import Form from './form';


// const fetch = global.fetch;

// const App = () => {
//   const [formName, setFormName] = useState('');
//   const [formData, setFormData] = useState([]);
//   const FetchForms = () => {
//     const baseUrl = 'http://192.168.1.8:5000';
//     const [forms, setForms] = useState([]);
    

//     useEffect(() => {
//       async function fetchData() {
//         try {
//           let formnames = await fetch(baseUrl + '?page=forms&func=list');
//           formnames = await formnames.json();
//           let data = [];
//           for (let index in formnames) {
//             let url = baseUrl + '/uforms/' + formnames[index];
//             let formdata = await fetch(url);
//             formdata = await formdata.text();
//             const questions = formdata.split('\r');
//             data.push([formnames[index], questions]);
//           }
//           setForms(data);
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       fetchData();
//     }, []);

//     return forms;
//   };

//   const data = FetchForms();
//   const [names, setNames] = useState([]);
//   const [formNamesWithoutExtension, setFormNamesWithoutExtension] = useState([]);

//   useEffect(() => {
//     if (data) {
//       const namesFromFirstLine = data.map(form => {
//         const firstLine = form[1][0];
//         return firstLine;
//       });

//       setNames(namesFromFirstLine);
//       console.log(namesFromFirstLine);
//     }
//   }, [data]);

//   const SaveForms = async (props) => {
//     const { content, id, file } = props;

//     let formData = {
//       content: content,
//       id: id,
//       file: file,
//     };

//     let requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     };

//     const baseUrl = 'http://192.168.1.10:5000';

//     try {
//       let response = await fetch(baseUrl + '?page=forms&func=save', requestOptions);
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handlePress = async (index) => {
//     try {      
//       console.log(data[index][1]);
//       // const formName = names[index];
//       // const formData = data[index][1];
//       router.push('form', { formName, formData });
//       const pressedFormName = names[index];
//       const pressedFormData = data[index][1];

//       setFormName(pressedFormName);
//       setFormData(pressedFormData);
//       Link.push('form', { formName: pressedFormName, formData: pressedFormData });
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <SafeAreaProvider>
//       <ScrollView>
//         <View style={{ flex: 2 }}>
//           <Text style={{ fontSize: 60, color: 'blue', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Forms</Text>
          
//           {/* <ButtonG
//             buttons={names}
//             buttonColors={['red']}
//             direction='column'
//             onClick={handlePress} // Use handlePress as the onClick handler
//           /> */}
          
//           {/* <Link
//         routeName="Form" // Replace with the actual route name for your Form component
//         params={{ formName, formData }} // Pass parameters to the next screen
//       >
//         <Text>Go to Form</Text>
//       </Link> */}
//             <ButtonG
//             buttons={names}
//             buttonColors={['red']}
//             direction='column'
//             onClick={handlePress} // Use handlePress as the onClick handler
//           />

//         </View>
//       </ScrollView>
//     </SafeAreaProvider>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import ButtonG from '../components/dash';
// import { Link, router } from 'expo-router';
// import { Text } from '@rneui/themed';
// import { ScrollView, View } from 'react-native';

// const fetch = global.fetch;

// const FormDashboard = () => {
//   const [formName, setFormName] = useState('');
//   const [formData, setFormData] = useState([]);
//   const FetchForms = () => {
//     const baseUrl = 'http://192.168.1.8:5000';
//     const [forms, setForms] = useState([]);

//     useEffect(() => {
//       async function fetchData() {
//         try {
//           let formnames = await fetch(baseUrl + '?page=forms&func=list');
//           formnames = await formnames.json();
//           let data = [];
//           for (let index in formnames) {
//             let url = baseUrl + '/uforms/' + formnames[index];
//             let formdata = await fetch(url);
//             formdata = await formdata.text();
//             const questions = formdata.split('\r');
//             data.push([formnames[index], questions]);
//           }
//           setForms(data);
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       fetchData();
//     }, []);

//     return forms;
//   };

//   const data = FetchForms();
//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     if (data) {
//       const namesFromFirstLine = data.map(form => {
//         const firstLine = form[1][0];
//         return firstLine;
//       });

//       setNames(namesFromFirstLine);
//     }
//   }, [data]);

//   const handlePress = async (index) => {
//     try {
//       const pressedFormName = names[index];
//       const pressedFormData = data[index][1];

//       setFormName(pressedFormName);
//       setFormData(pressedFormData);

//       // Use Link to navigate to the 'form' screen with parameters
//       router.replace('form', { formName: pressedFormName, formData: pressedFormData });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <SafeAreaProvider>
//       <ScrollView>
//         <View style={{ flex: 2 }}>
//           <Text style={{ fontSize: 60, color: 'blue', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Forms</Text>

//           <ButtonG
//             buttons={names}
//             buttonColors={['red']}
//             direction='column'
//             onClick={handlePress} // Use handlePress as the onClick handler
//           />

//           <Text>{`Selected Form Name: ${formName}`}</Text>
//           <Text>{`Selected Form Data: ${JSON.stringify(formData)}`}</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaProvider>
//   );
// };

// export default FormDashboard;

// import React, { useState, useEffect } from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import ButtonG from '../components/dash';
// import { Link } from 'expo-router';
// import { Text } from '@rneui/themed';
// import { ScrollView, View } from 'react-native';

// const fetch = global.fetch;

// const FormDashboard = () => {
//   const [formName, setFormName] = useState('');
//   const [formData, setFormData] = useState([]);
//   const FetchForms = () => {
//     const baseUrl = 'http://192.168.1.8:5000';
//     const [forms, setForms] = useState([]);

//     useEffect(() => {
//       async function fetchData() {
//         try {
//           let formnames = await fetch(baseUrl + '?page=forms&func=list');
//           formnames = await formnames.json();
//           let data = [];
//           for (let index in formnames) {
//             let url = baseUrl + '/uforms/' + formnames[index];
//             let formdata = await fetch(url);
//             formdata = await formdata.text();
//             const questions = formdata.split('\r');
//             data.push([formnames[index], questions]);
//           }
//           setForms(data);
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       fetchData();
//     }, []);

//     return forms;
//   };

//   const data = FetchForms();
//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     if (data) {
//       const namesFromFirstLine = data.map(form => {
//         const firstLine = form[1][0];
//         return firstLine;
//       });

//       setNames(namesFromFirstLine);
//     }
//   }, [data]);

//   const handlePress = async (index) => {
//     try {
//       const pressedFormName = names[index];
//       const pressedFormData = data[index][1];

//       setFormName(pressedFormName);
//       setFormData(pressedFormData);

//       // Use Link to navigate to the 'form' screen with parameters
//       Link.push('form', { formName: pressedFormName, formData: pressedFormData });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <SafeAreaProvider>
//       <ScrollView>
//         <View style={{ flex: 2 }}>
//           <Text style={{ fontSize: 60, color: 'blue', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Forms</Text>

//           <ButtonG
//             buttons={names}
//             buttonColors={['red']}
//             direction='column'
//             onClick={handlePress} // Use handlePress as the onClick handler
//           />

//           <Text>{`Selected Form Name: ${formName}`}</Text>
//           <Text>{`Selected Form Data: ${JSON.stringify(formData)}`}</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaProvider>
//   );
// };

// export default FormDashboard;

import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonG from '../components/dash';
import { Link, router } from 'expo-router';
import { Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import Form from './form';
// import { useNavigation } from '@expo/next-adapter/router';

const fetch = global.fetch;

const FormDashboard = () => {
  // const navigation = useNavigation();
  const [formName, setFormName] = useState('');
  const [formData, setFormData] = useState([]);
  const FetchForms = () => {
    const baseUrl = 'http://192.168.1.8:5000';
    const [forms, setForms] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          let formnames = await fetch(baseUrl + '?page=forms&func=list');
          formnames = await formnames.json();
          let data = [];
          for (let index in formnames) {
            let url = baseUrl + '/uforms/' + formnames[index];
            let formdata = await fetch(url);
            formdata = await formdata.text();
            const questions = formdata.split('\r');
            data.push([formnames[index], questions]);
          }
          setForms(data);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }, []);

    return forms;
  };

  const data = FetchForms();
  const [names, setNames] = useState([]);

  useEffect(() => {
    if (data) {
      const namesFromFirstLine = data.map(form => {
        const firstLine = form[1][0];
        return firstLine;
      });

      setNames(namesFromFirstLine);
    }
  }, [data]);

  const handlePress = async (index) => {
    try {
      const pressedFormName = names[index];
      const pressedFormData = data[index][1];

      setFormName(pressedFormName);
      setFormData(pressedFormData);
      // const navigateToDetails = () => {
      //   navigation.push('/form', { item: formData });
      // };
      // router.push('form', { formName: pressedFormName, formData: pressedFormData });
      console.log(pressedFormData);
      router.push({
        pathname: `/form`,
        params: pressedFormData
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 60, color: 'blue', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Forms</Text>

          <ButtonG
            buttons={names}
            buttonColors={['red']}
            direction='column'
            onClick={handlePress} // Use handlePress as the onClick handler
          />
         {/* <Link href = '/form?data=formData'>
        View user
      </Link> */}
       {/* <Link href='/form'
            params={{ formData }}
          >
            <Text>Go to Form</Text>
          </Link> */}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default FormDashboard;








