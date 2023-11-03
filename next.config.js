/** @type {import('next').NextConfig} */

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
const nextConfig = {
    
}

module.exports = {
    env:{
        API_KEY_AIRTABLE: process.env.API_KEY_AIRTABLE,
        BD_ID: process.env.BD_ID
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
}
