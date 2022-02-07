const {google} = require('googleapis'); 
const path = require('path'); 
const fs = require('fs'); 

const CLIENT_ID = '460581192644-lsbk5p3uudrmn73s43bpkfi9mm573b65.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground/';
const REFRESH_TOKEN = 'ya29.A0ARrdaM_mSDyZzUHqf7SbWSRYaspcTwlbh0lg2zY_0ce-rEd9HP0n3P2fuWfxdDIzcvw6XiWpaTlAzoobAQ-S4HXtZ5roS3S80F2jI-yS8-D9qEbYKqaqWvlDIOE8JtVVdFpE3NvYlhTkCvrv3jcdETgbi04p';

 
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

const filePath = path.join(__dirname, 'GangaSingh.jpg');
async function uploadFile(){
    try{
        const response = await drive.files.create({
            requestBody:{
                name: 'Ganga-Singh.jpg',
                mimeType: 'image/jpg'
            },
            media:{
                mimeType: "image/jpg",
                body: fs.createReadStream(filePath)
            }
        })
        console.log(response.data);
    }
    catch(error){
        console.log(error.message)
    }
}

// uploadFile()

async function generatePublicUrl(){
    try{
        const fileId = '1cXHh0iabxLEWV4a4R61IZiTOANDE02g7';
        await drive.permissions.create({
            fileId: fileId,
            requestBody:{
                role: 'reader',
                type: 'anyone'
            }
        })
    
        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink,webContentLink',
        })
        console.log(result.data);
    } catch(error){
        console.log(error.message)
    }
}

generatePublicUrl()
  