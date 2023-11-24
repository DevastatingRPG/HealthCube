import { useState, useEffect } from "react";
import axios from 'axios'

const baseUrl = 'http://192.168.1.8:5000'
const client = axios.create({ baseURL: baseUrl })

async function fetchData(url) {
    try {
        response = await client.get(url); // Send the GET request                   
        return response.data // Update the state variable with the data

    } catch (error) {
        console.error(error); // Handle any errors
    }
}

async function postData(url, requestOptions) {
    try {
        let response = await client.get('?page=forms&func=save', requestOptions);
        return response;
        // Send the POST request      
    } catch (error) {
        console.error(error); // Handle any errors
    }
}

export const FetchSprites = (id) => {
    const [sprites, setSprites] = useState(null);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        // Using async/await syntax
        fetchData(`?page=forms&func=sprites&id=${id}`)
            .then((data) => { setSprites(data) })
        // fetchData(); // Call the async function
    }, []);
    return sprites
}

export const FetchForms = () => {
    const [forms, setForms] = useState([]);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        // Using async/await syntax
        async function fetchFormData() {
            try {
                formnames = await client.get('?page=forms&func=list'); // Send the GET request
                var data = []
                for (let name of formnames.data) {
                    url = '/uforms/' + name
                    formdata = await client.get(url);  // Send GET request to read text file // Convert response to Text format
                    const questions = formdata.data.split("\r");   // Split it by each line
                    data.push([name, questions])
                }
                setForms(data); // Update the state variable with the data

            } catch (error) {
                console.error(error); // Handle any errors
            }
        }
        fetchFormData(); // Call the async function
    }, []);
    return forms;
}

export const FetchLeaderBoard = (id) => {
    const [result, setResult] = useState(null);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        fetchData(`?page=lb&id=${id}`)
            .then((data) => {setResult(data)})
    }, []);
    return result;
}

export const FetchUnowned = (id) => {
    const [sprites, setSprites] = useState(null);
    useEffect(() => { // useEffect makes block run once the page is rendered.
        fetchData(`?page=store&func=list&id=${id}`)
            .then((data) => setSprites(data))
    }, []);
    return sprites
}

export const LoginCheck = () => {

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
    return postData('?page=forms&func=save', requestOptions)
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
    return postData('?page=store&func=buy', requestOptions);
}

