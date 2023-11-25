import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ipv4 = process.env.EXPO_PUBLIC_IPv4;
const client = axios.create({ baseURL: `http://${ipv4}:5000` });

export async function fetchData(url) {
  try {
    response = await client.get(url); // Send the GET request
    return response.data; // Update the state variable with the data
  } catch (error) {
    console.error(error); // Handle any errors
  }
}

export async function postData(url, data) {
  try {
    let response = await client.post(url, data);
    return response;
    // Send the POST request
  } catch (error) {
    console.error(error); // Handle any errors
  }
}

export const FetchBalance = (id) => {
  const [balance, setBalance] = useState({ Balance: 0 });
  useEffect(() => {
    const fetchDataAndSetBalance = async () => {
      try {
        const data = await fetchData(`?page=store&func=balance&id=${id}`);
        setBalance(data);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchDataAndSetBalance();
  }, [id]);
  return balance;
};

export const FetchSprites = (id) => {
  const [sprites, setSprites] = useState([]);
  useEffect(() => {
    // useEffect makes block run once the page is rendered.
    fetchData(`?page=forms&func=sprites&id=${id}`)
        .then((data) => { setSprites(data) });
    // Call the async function
  }, []);
  return sprites;
};

export const FetchForms = () => {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    // useEffect makes block run once the page is rendered.
    // Using async/await syntax
    async function fetchFormData() {
      try {
        formnames = await client.get("?page=forms&func=list"); // Send the GET request
        var data = [];
        for (let name of formnames.data) {
          url = "/uforms/" + name;
          formdata = await client.get(url); // Send GET request to read text file // Convert response to Text format
          const questions = formdata.data.split("\r"); // Split it by each line
          data.push([name, questions]);
        }
        setForms(data); // Update the state variable with the data
      } catch (error) {
        console.error(error); // Handle any errors
      }
    }
    fetchFormData(); // Call the async function
  }, []);
  return forms;
};

export const FetchLeaderBoard = (id) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    // useEffect makes block run once the page is rendered.
    fetchData(`?page=lb&id=${id}`).then((data) => {
      setResult(data);
    });
  }, []);
  return result;
};

export const FetchUnowned = (id) => {
  const [sprites, setSprites] = useState(null);
  useEffect(() => {
    // useEffect makes block run once the page is rendered.
    fetchData(`?page=store&func=list&id=${id}`).then((data) =>
      setSprites(data)
    );
  }, []);
  return sprites;
};

export const SaveForms = (props) => {
  const { content, id, file } = props;
  const data = {
    content: content,
    id: id,
    file: file,
  };
  postData("?page=forms&func=save", data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const BuyChest = (props) => {
  
  const { id, sid, cost } = props;
  const data = {
    id: id,
    sid: sid,
    cost: cost,
  };
  postData("?page=store&func=buy", data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const DepositMoney = (props) => {
  const { id, dep } = props;
  const data = {
    id: id,
    dep: dep,
  };
  postData("?page=forms&func=deposit", data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const useUserID = () => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const fetchUserID = async () => {
      try {
        const storedUserID = await AsyncStorage.getItem("UID");
        setUserID(storedUserID || '');
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserID();
  }, []);

  return userID;
};

export const findSpriteByCategory = (category, spriteList) => {
  let ans = spriteList.find(sprite => sprite.Category === category)
  return ans;
}

export const getCategory = (spriteList) => {
  let cats = []
  for (let sprite of spriteList){
    if (!cats.includes(sprite["Category"])){
      cats.push(sprite["Category"]);
    }
  }
  return cats;
}
