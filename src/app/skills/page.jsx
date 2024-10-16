import { Card, TitlePage } from "@/components"
import { ShapePages } from "@/layouts"

const SkillsPage = () => {
    const imgHead = '/images/HeadPage/skills.png';
    const skills = [
        { id: 1, name: 'Next.js', image: './images/Skills/nextjs.svg' },
        { id: 2, name: 'React', image:'./images/Skills/react.svg' },
        { id: 3, name: 'Redux', image: './images/Skills/redux.svg' },
        { id: 4, name: 'JavaScript', image: './images/Skills/javascript.svg' },
        { id: 5, name: 'Html', image: './images/Skills/html.svg' },
        { id: 6, name: 'Css', image: './images/Skills/css.svg' },
        { id: 7, name: 'Sass', image: './images/Skills/sass.svg' },
        { id: 8, name: 'Tailwind', image: './images/Skills/tailwind.svg' },
        { id: 9, name: 'Material UI', image: './images/Skills/materialUI.svg' },
        { id: 10, name: 'MySql', image: './images/Skills/mysql.svg' },
        { id: 11, name: 'Firebase', image: './images/Skills/firebase.svg' },
        { id: 12, name: 'Airtable', image: './images/Skills/airtable.svg' },
        { id: 13, name: 'Git', image: './images/Skills/git.svg' },
        { id: 14, name: 'Github', image: './images/Skills/github.svg' },
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
