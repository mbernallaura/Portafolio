'use client';
import { Card, TitlePage } from "@/components";
import { ShapePages } from "@/layouts";
const ContactPage = () => {
    const imgHead = '/images/HeadPage/contact.jpg';
    const redes = [
        {id: 1, name: 'Linkedin', image: './images/Redes/linkedin.svg', web: 'https://www.linkedin.com/in/ingeniera-laura-bernal/'},
        {id: 2, name: 'Github', image: './images/Skills/github.svg', web : 'https://github.com/mbernallaura'},
        {id: 3, name: 'Curriculum', image: './images/Redes/resume.svg', web: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:5a6a8fa4-ae26-4033-9652-682cc828dc84'}
    ]

    const handleHref = (data)=> {
        window.open(data.web, '_blank');
    }

    return (
        <ShapePages stylePage={ 'bg-gradient-to-b from-ciberBluemedium from-20% to-black to-80%' }>
            <TitlePage name={ 'Contactame' }  sizeName={ 'text-8xl' } styleNames={'justify-end'} imgPage={ imgHead } hImg={ 200 } wImg={ 200 }/>
            <div className="mt-8 pt-6 flex flex-wrap gap-5 border-t-2 border-ciberBluemedium">
                {
                    redes.map((data)=>(
                        <Card key={ data.id } data={data} btnVisible="block" handle={()=>handleHref(data)}/>
                    ))
                }
            </div>
        </ShapePages>
    )
}

export default ContactPage;
