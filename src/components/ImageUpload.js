import React from 'react'
import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPostAction } from './../redux/actions/userActions';
import { newPostAddedAction } from '../redux/actions/allPostsActions';
import "./styles/InfoModal.css";


export default function ImageUpload() {
    const [imagePicked, setImagePicked] = useState(false);
    const [videoPicked, setVideoPicked] = useState(false);
    const [desc, setDesc] = useState("");
    const [photo, setPhoto] = useState("");
    const [video, setVideo] = useState("");
    const [uploadSuccess, setUploadSuccess] = useState(false); 
    const current = new Date();
    const user = useSelector(state =>  state.userData);
    const dispatch = useDispatch();

    const handleFileUploaded = (e) => {
        const { files } = e.target;
        if (files[0].type !== "video/mp4"){
            const localVideoUrl = URL.createObjectURL(files[0]);
            setVideoPicked(true);
            setVideo(localVideoUrl);
        }
        else if (files[0].type !== "image/png" || files[0].type !== "image/jpeg" || files[0].type !== "image/jpg") {
            const localImageUrl = URL.createObjectURL(files[0]);
            setImagePicked(true);
            setPhoto(localImageUrl);
        } 
        else {
            setUploadSuccess(false);
        }    
    };
    
    const handleDescription = (e) => {
        setDesc(e.target.value.trim())
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        const obj = {
            postID : uuidv4(),
            username : user.username,
            usernameID: user.id,
            profilePhoto : user.profilePhoto,
            isVideo : videoPicked,
            likes : [],
            comments: [],
            timestamp : current.getTime(),
            content : photo,
            desc : desc
        }
        dispatch(addPostAction(obj));
        dispatch(newPostAddedAction(obj));
        setUploadSuccess(true);
    };

    return (
        <div className="modal-body">
            {
                uploadSuccess ? <>
                    {
                        videoPicked ? 
                        (<video className="uploadSuccessMsgImg" src={video} alt="post" controls></video>)
                        :
                        (<img src={photo} alt=" photo" className="uploadSuccessMsgImg" />)
                    }
                    
                    <p className="uploadSuccessMsg" >Succesfully added new photo. Check out your profile.</p>
                </> 
                : 
                <>
                    {imagePicked ? 
                        <input type="text" placeholder='Add description...' onChange={handleDescription} className="descContainer"/> 
                        : 
                        <>
                            <img src="../images/create-add.png" alt="add" className="modal-insta-upload-icons"/>
                            <p>Upload photos and videos here</p>
                        </>
                    }
                    <input type="file" accept="image/*,video/*" placeholder='Select From Computer' onChange={handleFileUploaded} className="chooseFileCont"/>
                    {imagePicked ? 
                        <button type="submit" className='submitUpload' onClick={handleSubmit}>Upload</button> 
                        :
                        <></>
                    }
                </>
            }
            
        </div>
    )
}
