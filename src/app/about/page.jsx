import { TitlePage } from "@/components";
import { ShapePages } from "@/layouts";


const AboutPage = () => {
    const imgHead = '/images/HeadPage/yo.png';

    return (
        <ShapePages stylePage={ 'bg-gradient-to-b from-ciberBluemedium to-black' }>
            <TitlePage name={ 'Sobre mi' }  sizeName={ 'text-8xl' } styleNames={ 'justify-end' } imgPage={ imgHead } hImg={ 200 } wImg={ 200 }/>
            <div className="mt-8 pt-6 flex flex-wrap gap-5 border-t-2 border-ciberBluemedium">
                <p className="text-2xl font-kanit">¡Hola! Soy <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">Laura</b> y estoy encantada de darte la bienvenida a mi portafolio. Aquí, encontrarás una fusión de dos de mis pasiones: la <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">música</b> y la <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">programación</b>.</p>
                <p className="text-2xl font-kanit">Mi objetivo es combinar mis habilidades técnicas con mi pasión por la <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">creatividad</b> para ofrecer <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">soluciones únicas</b> y <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">efectivas</b> a mis clientes. Estoy emocionada por la oportunidad de trabajar en proyectos desafiantes y <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">seguir creciendo</b> en este emocionante mundo digital.</p>
                <p className="text-2xl font-kanit">Soy una persona <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">dedicada</b> y <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">perseverante</b>. Cuando me enfrento a un desafío, <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">no me rindo fácilmente</b>. Mi compromiso con la excelencia y la <b className="text-ciberBluelight underline decoration-4 decoration-ciberPink">mejora constante</b> me impulsa a aprender y crecer en el mundo de la programación web. </p>
                <p className="text-2xl font-kanit">Gracias por visitar mi portafolio, y espero que disfrutes explorando mi trabajo tanto como yo disfruto creándolo. Si tienes alguna pregunta o proyecto en mente, no dudes en ponerte en contacto conmigo. ¡Espero poder colaborar contigo!</p>
            </div>
        </ShapePages>
    )
}

export default AboutPage;