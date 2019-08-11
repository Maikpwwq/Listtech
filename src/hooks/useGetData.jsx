import { useState, useEffect } from 'react';
const Api = 'https://console.firebase.google.com/project/listtech-28538/database/data/data';

<<<<<<< HEAD
// React Hooks fetch(Url)
=======
// React Hooks
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629

const useGetData = () => {
    const [db, setData] = useState([]);

    useEffect(() => {
        fetch(Api)
            .then(response => response.json())
            .then(data => setData(data))   
    }, []);

    return db
}

export default useGetData;