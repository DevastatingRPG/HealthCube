import React, { useState, useEffect } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DepositMoney, FetchSprites, SaveForms } from "../utilities/fetching";
import FormInt from "../components/formint";
import { JoinAnswers, ParseQuestions } from "../utilities/parser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler, Modal, View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { fetchData } from "../utilities/fetching";
import { generateWeightedRandomNumber } from "../utilities/rand";
import * as Animatable from 'react-native-animatable';

export default function Form() {


  let data = useLocalSearchParams();
  const [sprites, setSprites] = useState(null);
  const [uid, setUID] = useState('');

  useEffect(() => {
    const retrieveDetails = async () => {
      try {
        const id = await AsyncStorage.getItem("UID");
        setUID(id)
        const spriteData = await fetchData(`?page=forms&func=sprites&id=${id}`);
        setSprites(spriteData)
      }
      catch (error) {
        console.error("Error fetching sprite data: ", error)
      }
    };

    retrieveDetails();
  }, []);

  nm = data[0];
  qs = JSON.parse(data[1])[0];

  // console.log(qs.split('\n'))
  const questions = ParseQuestions(qs.split('\n'));
  // console.log(questions)

  const [answers, setAnswers] = useState(
    questions.map((q) => ({
      question: q.question,
      answer: "",
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState([]);
  const [sum, setSum] = useState(0);
  const [reward, setreward] = useState(0)
  const [answered, setAnswered] = useState([]);

  const updateAnswers = (answer) => {
    if (
      !answered.includes(currentIndex) &&
      answer != "" &&
      answer != [] &&
      answer !== null
    ) {
      setreward(generateWeightedRandomNumber());
      // console.log(re)
      setSum(sum + reward);
      setAnswered([...answered, currentIndex]);


    }
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      try {
        newAnswers[currentIndex].answer = answer.join(", ");
      } catch (TypeError) {
        newAnswers[currentIndex].answer = answer;
      }
      return newAnswers;
    });
  };

  const tellAns = (ind) => {
    let exval;
    if (questions[ind].type == "text") exval = [answers[ind].answer];
    else exval = answers[ind].answer.split(", ");
    setInputValue(exval);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress((currentIndex + 1) / questions.length);
      tellAns(currentIndex + 1);



    } else {
      setShowSubmitPopup(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress((currentIndex - 1) / questions.length);
      tellAns(currentIndex - 1);
    } else {
      setShowExitPopup(true);
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => {
    // Hide the popup after 2 seconds

    setIsVisible(true);

    setIsVisible(true);
    setTimeout(() => {
      hidePopup();
    }, 1000);
  };

  const hidePopup = () => {
    setIsVisible(false);
  };

  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [showFinalSum,setshowFinalSum] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Always show the exit confirmation popup
        setShowExitPopup(true);
        return true; // Prevent default behavior (exit the app)
      }
    );

    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, []); // Empty dependency array means the effect runs once after the initial render

  const handleExitConfirm = () => {
    setShowExitPopup(false);
    setShowSubmitPopup(false);
    router.replace("/formdash");
  };

  const handleExitCancel = () => {
    setShowSubmitPopup(false);
    setShowExitPopup(false);
  };

  const handleSubmitConfirm = () => {
    setShowSubmitPopup(false);
    
    setshowFinalSum(true);
    
    
  };

  const handleShowSum = () =>{
    setshowFinalSum(false);
    const answertext = JoinAnswers(answers);
    DepositMoney({
      id: uid,
      dep: sum
    })
    SaveForms({
      content: answertext,
      id: uid,
      file: nm,
    });
    router.replace("/formdash");
  }

  useEffect(() => {
    if (reward != 0 && sum != 0) {
      showPopup();
    }

  }, [sum])

  return (
    <SafeAreaProvider>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFinalSum}
        animationDuration={1000}
      >
        <View style={styles.modalContainer}>
          <View style={styles.showsum}>
            <Text style={{fontSize:45}}>Well Done!!</Text>
            <Text style={{fontSize:28}}>You Earned A Total Of:</Text>
            <View style={{flexDirection:'row'}}>
            <Image source={require("../assets/c1.png")} style={{ height: 70, width: 70 }} />
            <Text
              style={{ fontSize: 45, fontWeight: "bold", textAlign: "center",marginTop:6 }}
            >
              {sum}
            </Text>
           
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={handleShowSum}>
                <View style={styles.sumbut}>
                  <Text style={{fontSize:25,fontWeight:'bold'}}>Nice</Text>
                </View>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >

        <Animatable.View
          animation={isVisible ? 'slideInUp' : 'slideOutUp'}
          duration={1000}
          style={{ justifyContent: 'center', flexDirection: 'column' }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.popupsum}>

              <Image source={require("../assets/c1.png")} style={{ height: 80, width: 80 }} />
              <Text style={{ fontSize: 50, marginLeft: 10,color:'white' }}>{reward}</Text>
            </View>
          </View>
        </Animatable.View>

      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showExitPopup}
        animationDuration={1000}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popupexit}>
            <Text
              style={{
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Exit Form
            </Text>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
            >
              Are you sure you want to leave the form? Your progress will be
              lost. Choose Submit if you want to save
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={handleExitCancel}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>NO</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleExitConfirm}>
                <View style={styles.buttonContainer1}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmitConfirm}>
                <View style={styles.buttonContainer1}>
                  <Text style={styles.buttonText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSubmitPopup}
        animationDuration={1000}
      >
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <Text
              style={{
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Submit Form
            </Text>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
            >
              Are you sure you want to Submit the form?
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={handleExitCancel}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>NO</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmitConfirm}>
                <View style={styles.buttonContainer1}>
                  <Text style={styles.buttonText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      <FormInt
        question={questions[currentIndex].question}
        type={questions[currentIndex].type}
        options={questions[currentIndex].options}
        progress={progress}
        onNext={handleNext}
        onBack={handleBack}
        updateAnswers={updateAnswers}
        inputValue={
          questions[currentIndex].type == "text" && Array.isArray(inputValue)
            ? inputValue[0]
            : inputValue
        }
        setInputValue={setInputValue}
        sprites={sprites}
      />
    </SafeAreaProvider>
  );
      }
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkblue",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  popup: {
    backgroundColor: "#FFF8C9",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 350,
    height: 200,
  },
  popupsum: {
    backgroundColor: "#27005D",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 200,
    height: 200,
  },
  popupexit: {
    backgroundColor: "#FA7070",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 350,
    height: 250,
  },
  showsum:{
    backgroundColor: "#9EDDFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 350,
    height: 250,
  },
  sumbut:{
    backgroundColor: "#D5FFD0",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent:'center',
    marginLeft: 35,
    marginRight: 50,
    marginTop: 11,
    borderRadius: 500,
  },
  buttonContainer: {
    backgroundColor: "#F875AA",
    width: 100,
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 50,
    marginTop: 11,
    borderRadius: 500,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    paddingTop: 10,
    fontWeight: "bold",
  },
  buttonContainer1: {
    backgroundColor: "#C1D8C3",
    width: 100,
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 50,
    marginTop: 11,
    borderRadius: 500,
  },
  visible: {
    height: '10%',
  },
  hidden: {
    height: 0,
  },
});
