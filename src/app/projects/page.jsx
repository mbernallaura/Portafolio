'use client'
import { dataProject, dataProjects, gridPage, stateCardPlay, stateMusicPlay } from "@/atoms";
import { Card, TitlePage } from "@/components";
import Loader from "@/components/Loader";
import { ShapePages } from "@/layouts"
import { fetchAirtableData } from "@/lib/APICalls";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

const ProjectsPage = () => {
    const imgHead = '/images/HeadPage/projects.png';
    const allProjects  = useSetRecoilState( dataProjects );
    const [projectsData, setProjectsData] = useState([]);
    const [loader, setLoader] = useState(true); // Establece el valor inicial en true

    const setGridPage  = useSetRecoilState( gridPage );
    const setData  = useSetRecoilState( dataProject );
    const cardPlayActive  = useSetRecoilState( stateCardPlay );
    // const dataMusicPlay = useSetRecoilState( stateMusicPlay );

    useEffect(() => {
        fetchAirtableData()
            .then(data => {
                setProjectsData(data);
                allProjects(data);
                setLoader(false); // Cambia a false cuando los datos se han cargado
            })
            .catch(error => {
                console.error("Error al cargar datos desde Airtable:", error);
                setProjectsData([]); // Establece un valor por defecto en caso de error
                setLoader(false); // También debes cambiar a false en caso de error
            });
    }, [])

    const handlePlayCard =(data)=>{
        setGridPage("col-span-2");
        cardPlayActive( true );
        // dataMusicPlay({title: data.name, image: data.image});
        setData( data );
    }

    return (
        <ShapePages stylePage={'bg-gradient-to-b from-ciberBluedark to-black'}>
            {loader ? (
                <Loader />
            ) : (
                <div>
                    <TitlePage name={'Proyectos'} sizeName={'text-8xl'} styleNames={'justify-end'} imgPage={imgHead} hImg={200} wImg={200} />
                    <div className="mt-8 pt-6 flex flex-wrap gap-5 border-t-2 border-ciberBluedark">
                        {projectsData.map((card) => (
                            <Card key={card.id} data={card} btnVisible="block" handle={() => handlePlayCard(card)}/>
                        ))}
                    </div>
                </div>
            )}
        </ShapePages>
    )
}

export default ProjectsPage;