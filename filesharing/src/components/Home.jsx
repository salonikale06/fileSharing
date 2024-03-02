import React, { useEffect, useRef, useState } from "react";
import './css/Home.css';
import { uploadFile } from '../services/api';

export const Home = () => {
    const imgUrl = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
    const fileInputRef = useRef();
    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                try {
                    let response = await uploadFile(data);
                    console.log(response,"saloniresponse");
                    setResult(response.path);

                } catch (error) {
                    console.error("Error uploading file:", error);
                }
            }
        }
        getImage();
    }, [file])

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    const onClickUpload = () => {
        fileInputRef.current.click();
    }

    return (
        <div className="Main">
            <div className="container">
                <img src={imgUrl} alt="loading..." />
                <div className="wrapper">
                    <h1>Simple File Sharing !!</h1>
                    <p>Upload and Share the Download Link</p>

                    <button onClick={onClickUpload}>Upload</button>
                    <input
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        type="file"
                    />
                    <a href={result}>{result}</a>
                </div>
            </div>
        </div>
    );
}
