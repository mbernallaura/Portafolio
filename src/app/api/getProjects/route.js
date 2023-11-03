import { NextResponse } from "next/server";
import airtableBD from "@/lib/airtableConexion";

export async function GET(request) {
    try {
        const records = await airtableBD("projects").select().all();
        const objects = records.map((r) => ({
            ...r.fields,
        }));

        return NextResponse.json( objects.sort((a, b) => a.id - b.id) );
    } catch (error) {
        console.log(airtableBD);
        console.error("Error al obtener los registros:", error);
        return NextResponse.json({ error });
    }
}