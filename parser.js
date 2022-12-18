import fetch from 'node-fetch';
import fs from 'fs';

function downloadFile(url, path) {
    return fetch(url).then(res => {
        console.log(res)
        res.body.pipe(fs.createWriteStream(path));
    });
}

// Using
downloadFile('', '')
    .then(() => console.log('OK'))
    .catch(err => console.error(err));
