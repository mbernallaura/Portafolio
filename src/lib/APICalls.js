import axios from 'axios';

export async function fetchAirtableData() {
    try {
        const response = await axios.get("/api/getProjects");
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos de Airtable', error);
        return [];
    }
}
