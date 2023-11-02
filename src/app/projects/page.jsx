'use client'
import { TitlePage } from "@/components";
import { ShapePages } from "@/layouts"
import { fetchAirtableData } from "@/lib/APICalls";
import { useEffect } from "react";


const ProjectsPage = () => {
    const imgHead = '/images/HeadPage/projects.png';
    

    useEffect(() => {
        const prueba = async()=>{
            const airtableDB = await fetchAirtableData();
            console.log(airtableDB);
        }
        prueba();
    }, [])
    

    return (
        <ShapePages stylePage={ 'bg-gradient-to-b from-ciberBluedark to-black' }>
            <TitlePage name={ 'Proyectos' }  sizeName={ 'text-8xl' } styleNames={'justify-end'} imgPage={ imgHead } hImg={ 200 } wImg={ 200 }/>
            <div className="mt-8 border-t-2 border-ciberBluedark">

            </div>
        </ShapePages>
    )
}
export default ProjectsPage
