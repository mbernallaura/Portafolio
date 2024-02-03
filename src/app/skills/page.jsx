import { Card, TitlePage } from "@/components"
import { ShapePages } from "@/layouts"

const SkillsPage = () => {
    const imgHead = '/images/HeadPage/skills.png';
    const skills = [
        { id: 1, name: 'Next.js', image: './images/Skills/nextjs.svg' },
        { id: 2, name: 'React', image:'./images/Skills/react.svg' },
        { id: 3, name: 'JavaScript', image: './images/Skills/javascript.svg' },
        { id: 4, name: 'Html', image: './images/Skills/html.svg' },
        { id: 5, name: 'Css', image: './images/Skills/css.svg' },
        { id: 6, name: 'Sass', image: './images/Skills/sass.svg' },
        { id: 7, name: 'Tailwind', image: './images/Skills/tailwind.svg' },
        { id: 8, name: 'MySql', image: './images/Skills/mysql.svg' },
        { id: 9, name: 'Firebase', image: './images/Skills/firebase.svg' },
        { id: 10, name: 'Git', image: './images/Skills/git.svg' },
        { id: 11, name: 'Github', image: './images/Skills/github.svg' },
    ]

    return (
        <ShapePages stylePage={ 'bg-gradient-to-b from-ciberPurple from-20% to-black to-80%' }>
            <TitlePage name={ 'Habilidades' }  sizeName={ 'text-8xl' } styleNames={'justify-end'} imgPage={ imgHead } hImg={ 200 } wImg={ 200 }/>
            <div className="mt-8 pt-6 flex flex-wrap gap-5 border-t-2 border-ciberPurple">
                {
                    skills.map((data)=>(
                        <Card key={ data.id } data={data} btnVisible="none"/>
                    ))
                }
            </div>
        </ShapePages>
    )
}

export default SkillsPage
