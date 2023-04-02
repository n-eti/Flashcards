import React, { useState, useEffect } from 'react';
import axios from "axios";
const SideBar = ({}) => {
    const [sideDescription, setSideDescription] = useState([])

    async function fetchAllSideDescriptions(){
        const response = await axios.get('http://127.0.0.1:8000/api/collections/')
        setSideDescription(response.data)
    }

    useEffect(() => {
        fetchAllSideDescriptions()
    }, []);

    console.log(sideDescription)
  return (
    <section id="sidebar">
      <div>
        <h4>SideBar</h4>
      </div>
    </section>
  );
};

export default SideBar;
