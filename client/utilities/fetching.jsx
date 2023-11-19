import { useState, useEffect } from "react";

const fetch = global.fetch;
const baseUrl = 'http://192.168.1.10:5000'

export const FetchSprites = (id) => {
    const [sprites, setSprites] = useState(null);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        // Using async/await syntax
        async function fetchData() {
            try {
                response = await fetch(baseUrl + `?page=forms&func=sprites&id=${id}`); // Send the GET request               
                response = await response.json(); // Convert the response to JSON                
                setSprites(response) // Update the state variable with the data

            } catch (error) {
                console.error(error); // Handle any errors
            }
        }
        fetchData(); // Call the async function
    }, []);
    return sprites
}

export const FetchForms = () => {
    const [forms, setForms] = useState([]);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        // Using async/await syntax
        async function fetchData() {
            try {
                formnames = await fetch(baseUrl + '?page=forms&func=list'); // Send the GET request
                formnames = await formnames.json(); // Convert the response to JSON
                var data = []
                for (index in formnames) {
                    url = baseUrl + '/uforms/' + formnames[index]
                    formdata = await fetch(url);  // Send GET request to read text file
                    formdata = await formdata.text(); // Convert response to Text format
                    const questions = formdata.split("\r");   // Split it by each line
                    data.push([formnames[index], questions])
                }
                setForms(data); // Update the state variable with the data

            } catch (error) {
                console.error(error); // Handle any errors
            }
        }
        fetchData(); // Call the async function
    }, []);
    return forms;
}

export const FetchLeaderBoard = (id) => {
    const [result, setResult] = useState(null);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        // Using async/await syntax
        async function fetchData() {
            try {
                response = await fetch(baseUrl + `?page=lb&id=${id}`); // Send the GET request               
                response = await response.json(); // Convert the response to JSON                
                setResult(response); // Update the state variable with the data

            } catch (error) {
                console.error(error); // Handle any errors
            }
        }
        fetchData(); // Call the async function
    }, []);
    return result;
}

export const FetchUnowned = (id) => {
    const [sprites, setSprites] = useState(null);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        // Using async/await syntax
        async function fetchData() {
            try {
                response = await fetch(baseUrl + `?page=store&func=list&id=${id}`); // Send the GET request               
                response = await response.json(); // Convert the response to JSON                
                setSprites(response) // Update the state variable with the data

            } catch (error) {
                console.error(error); // Handle any errors
            }
        }
        fetchData(); // Call the async function
    }, []);
    return sprites
}

export const SaveForms = (props) => {
    const { content, id, file } = props;
    const data = {
        content: content,
        id: id,
        file: file
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    async function postData() {
        try {
            let response = await fetch(baseUrl + '?page=forms&func=save', requestOptions);
            return response;
            // Send the POST request      
        } catch (error) {
            console.error(error); // Handle any errors
        }
    }
    return postData(); // Call the async function 
}

export const BuyChest = (props) => {
    const { id, sid, cost } = props;
    const data = {
        id: id,
        sid: sid,
        cost: cost
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    async function postData() {
        try {
            let response = await fetch(baseUrl + '?page=store&func=buy', requestOptions);
            return response;
            // Send the POST request      
        } catch (error) {
            console.error(error); // Handle any errors
        }
    }
    return postData();
}

