'use client'
import { Card, Logo, TitlePage } from "@/components";
import { ShapePages } from "@/layouts"
import { fetchAirtableData } from "@/lib/APICalls";
import { useEffect, useState } from "react";


const ProjectsPage = () => {
    const imgHead = '/images/HeadPage/projects.png';
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        fetchAirtableData().then(data => {
            setProjectsData(data);
        }).catch(error => {
            console.error("Error al cargar datos desde Airtable:", error);
            setProjectsData([]); // Establecer un valor por defecto en caso de error
        });
    }, [])
    
    // console.log(projectsData);

    return (
        <ShapePages stylePage={ 'bg-gradient-to-b from-ciberBluedark to-black' }>
            <TitlePage name={ 'Proyectos' }  sizeName={ 'text-8xl' } styleNames={'justify-end'} imgPage={ imgHead } hImg={ 200 } wImg={ 200 }/>
            <div className="mt-8 pt-6 flex flex-wrap gap-5 border-t-2 border-ciberBluedark">
                {
                    projectsData.map(({id, name, image})=>(
                        <Card key={ id } name={ name } img={ image }/>
                    ))
                }
            </div>
        </ShapePages>
    )
}
export default ProjectsPage
