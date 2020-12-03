import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { storage } from '../firebase';

const HomePage = () => {

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');


    useEffect(() => {
        const imagesRef = storage.ref().child('/test');
        imagesRef.listAll()
            .then( res => {
                res.items.forEach(function(itemRef) {
                    console.log("an item ref", itemRef);
                  });                
            })
    }, []);

    const handleSubmit = ev => {
        ev.preventDefault();

        if(image){
            // upload
            const uploadTask = storage.ref().child(`/test/${uuidV4()}-${image.name}`).put(image);
            // check upload process
            uploadTask.on('state_changed', function(snapshot){

                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                
              }, function(err) {
                  console.error("error uploading file to cloud storage", err);

              }, function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                  setImageUrl(downloadURL);
                });
              });
              
        }
    }

    const handleImageInput = ({ target }) => {
        setImage(target.files[0]);
    }


    return ( 
        <div>
            <h1>firebase cloud storage test in nextjs</h1>

            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageInput}/>
                <button type="submit">save file</button>
                {
                    imageUrl && <img src={imageUrl} width="150px" alt="wallpaper"/>
                }
            </form>
        </div>
    );
}
 
export default HomePage;