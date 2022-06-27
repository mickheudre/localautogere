const axios = require('axios')

export default async function hello(req, res) {

  const instance = axios.create({
    headers: {
      "Authorization": "Bearer " + process.env.NOTION_TOKEN,
      "Notion-Version": "2021-05-13"
    }
  });

  const rep = await instance.get("https://api.notion.com/v1/blocks/aab82b78a1a449bd95bf2fe7a4372379/children")
  
    res.status(200).json({
      data: rep.data
    });

  // var request = require("request");

  // var options = { method: 'POST',
  //   url: 'https://api.notion.com/v1/databases/2479f2f5bc5c444e927810a80062e956/query',
  //   headers: 
  //    { 'Postman-Token': 'c701b813-42a6-47e3-8a47-f437a6987c53',
  //      'cache-control': 'no-cache',
  //      'Notion-Version': '2021-08-16' } };
  
  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);
  
  //   console.log(body);
  // });
   

  }