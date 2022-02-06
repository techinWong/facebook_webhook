import React from 'react'
import axios from 'axios'
// import request from 'request';

const callSendAPI = (response)=> {
    // Construct the message body
    let request_body = {
        "messaging_type":"RESPONSE",
        "recipient": {
        "id": '7437728859585528'
        },
        "message": {
            "text": response
        }
    }

    let PAGE_ACCESS_TOKEN = 'EAAJdkmsqOxcBAH7W6ZBB3DSYoYjg8piL9Gq3Ih1I5WZClQXo8AEfKFdOZBPiDOrrxZAFr810LZCqCPLA55AObvjwk7mFdzwZAU6DgR4s43TTm4tcZCZCXEfurL1itUsqVN7ZAZCziXDggcAErB8wZC3jrSuPJFWXJDPQx0K7ghSg5YGWurFS3I8I6JR'

    let url = `https://graph.facebook.com/v2.6/me/messages?access_token=${PAGE_ACCESS_TOKEN}`

    axios.post(url,request_body)
    .then(console.log('message_sent!'))

    

    // Send the HTTP request to the Messenger Platform
    // request({
    //     "uri": "https://graph.facebook.com/v2.6/me/messages",
    //     "qs": { "access_token": 'EAAJdkmsqOxcBAH7W6ZBB3DSYoYjg8piL9Gq3Ih1I5WZClQXo8AEfKFdOZBPiDOrrxZAFr810LZCqCPLA55AObvjwk7mFdzwZAU6DgR4s43TTm4tcZCZCXEfurL1itUsqVN7ZAZCziXDggcAErB8wZC3jrSuPJFWXJDPQx0K7ghSg5YGWurFS3I8I6JR' },
    //     "method": "POST",
    //     "json": request_body
    // }, (err, res, body) => {
    //     if (!err) {
    //     console.log('message sent!')
    //     } else {
    //     console.error("Unable to send message:" + err);
    //     }
    // }); 
  }

  export default callSendAPI;