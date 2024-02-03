'use client'
import { Card, TitlePage } from "@/components";
import Loader from "@/components/Loader";
import { ShapePages } from "@/layouts"
import { fetchAirtableData } from "@/lib/APICalls";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
    const imgHead = '/images/HeadPage/projects.png';
    const [projectsData, setProjectsData] = useState([]);
    const [loader, setLoader] = useState(true); // Establece el valor inicial en true

    useEffect(() => {
        fetchAirtableData()
            .then(data => {
                setProjectsData(data);
                setLoader(false); // Cambia a false cuando los datos se han cargado
            })
            .catch(error => {
                console.error("Error al cargar datos desde Airtable:", error);
                setProjectsData([]); // Establece un valor por defecto en caso de error
                setLoader(false); // También debes cambiar a false en caso de error
            });
    }, [])

    return (
        <ShapePages stylePage={'bg-gradient-to-b from-ciberBluedark to-black'}>
            {loader ? (
                <Loader />
            ) : (
                <div>
                    <TitlePage name={'Proyectos'} sizeName={'text-8xl'} styleNames={'justify-end'} imgPage={imgHead} hImg={200} wImg={200} />
                    <div className="mt-8 pt-6 flex flex-wrap gap-5 border-t-2 border-ciberBluedark">
                        {projectsData.map((card) => (
                            <Card key={card.id} data={card} btnVisible="block" />
                        ))}
                    </div>
                </div>
            )}
        </ShapePages>
    )
}

export default ProjectsPage;