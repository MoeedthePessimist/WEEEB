import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import {storage, db} from '../../Firebase';
import firebase from 'firebase'
import './CSS/ImageUpload.css'

function ImageUpload({username}) {

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
//const [URL, setURL] = useState('');

    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleUpload = (event) => {
        const uploadTask = storage.ref(`images/${image?.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function
                const progress = Math.round ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            } ,
            (error) => {
                //error function
                console.log(error);
                alert(error.message);
            },
            () => {
                //complete function
                storage.ref("images").child(image.name).getDownloadURL()
                .then(url => {
                    //post image
                    db.collection('posts').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageURL: url,
                        username: username,
                    });
                    setProgress(0);
                    setCaption('');
                    setImage(null);
                })
            }
        );
    };

    return (
        <div className = "imageUpload">
            <progress className = "imageUpload_progress" value = {progress} max = "100" />
            <input type = "text" placeholder = 'Enter a caption' onChange = {(event) => setCaption(event.target.value)} value = {caption}/>
            <input type = "file" onChange = {handleChange}/>
            <Button onClick = {handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
