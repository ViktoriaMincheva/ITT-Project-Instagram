import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/InfoModal.css";

export default function ImageUpload() {
    const [imagePicked, setImagePicked] = useState(false);
    const [desc, setDesc] = useState("");
    const [photo, setPhoto] = useState("");
    let [jsonData, setJsonData] = useState(null);
    const current = new Date();

    useEffect(function () {
        fetch("user-profile.json")
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    setJsonData(data);
                }, 500)
            })
    }, [])

    const handleFileUploaded = (e) => {
        setImagePicked(true);
        const { files } = e.target;
        const localImageUrl = URL.createObjectURL(files[0]);

        let jsData = jsonData;
        let poststCount = jsData.posts.length;
        // console.log(typeof jsData);

        jsData.posts.push({
            uniqueID:  poststCount + 1,
            desc:`${desc}`,
            postedDate:`${current.getMonth()+1} ${current.getDate()}, /${current.getFullYear()}`,
            likes: [],
            comments:[],
            content : [localImageUrl]
        })

        console.log(jsData);
    }
    
    const handleDescription = (e) => {
        setDesc(e.target.value.trim())
    }
    
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="modal-body">
            {imagePicked ? 
                <input type="text" placeholder='Add description...' onChange={handleDescription} className="descContainer"/> 
            : 
            <>
                <img src="create-add.png" alt="add"/>
                <p>Upload photos and videos here</p>
            </>
            }
            <input type="file" placeholder='Select From Computer' onChange={handleFileUploaded} className="chooseFileCont"/>
            {imagePicked ? 
            <button type="submit" className='submitUpload' onClick={handleSubmit}>Upload</button> 
            :
            <></>
            }
        </div>
    )
}
