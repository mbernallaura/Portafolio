import Airtable from "airtable";

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.API_KEY_AIRTABLE
});
var airtableBD = Airtable.base(process.env.BD_ID);

export default airtableBD;