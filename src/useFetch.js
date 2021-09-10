import { useState, useEffect, useCallback } from "react";
import axios from "axios";
const collegesData = require("./data.json");

function useFetch( page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const fetchData=(page)=>{
        let colleges=collegesData.data.filter(college => college.page===page);
        // console.log(colleges);
        return colleges;
    }
    const sendQuery = useCallback(async () => {
        try {
        await setLoading(true);
        await setError(false);
        const res = fetchData(page);
        await setList((prev) =>{
            let newList= prev.concat(res);
            console.log(newList);
            return newList;
        });
        setLoading(false)
        } catch (err) {
        setError(err);
        }
    }, [page]);

    useEffect(() => {
        sendQuery();
    }, [page]);

    return { loading, error, list };
}

export default useFetch;