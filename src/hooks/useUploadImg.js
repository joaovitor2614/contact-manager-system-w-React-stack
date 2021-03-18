import { useState, useEffect } from 'react'
import { projectStorage, timestamp } from '../firebase/firebase'



const useUploadImg = (file) => {
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {

        const storageRef = projectStorage.ref(file.name)


        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

            setProgress(percentage)
        }, (err) => {
            console.log(err)
            setError(err)
            console.log('async antes')
        }, async () => {
            const url = await storageRef.getDownloadURL();
            console.log(url)
            setUrl(url)
        })
    }, [file])



    return { progress, url, error }
}


export default useUploadImg