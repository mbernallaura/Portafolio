import { Card, TitlePage } from "@/components"
import { ShapePages } from "@/layouts"

const SkillsPage = () => {
    const imgHead = '/images/HeadPage/skills.png';
    const skills = [
        { id: 1, name: 'Next.js', img: './images/Skills/nextjs.svg' },
        { id: 2, name: 'React', img:'./images/Skills/react.svg' },
        { id: 3, name: 'JavaScript', img: './images/Skills/javascript.svg' },
        { id: 4, name: 'Html', img: './images/Skills/html.svg' },
        { id: 5, name: 'Css', img: './images/Skills/css.svg' },
        { id: 6, name: 'Sass', img: './images/Skills/sass.svg' },
        { id: 7, name: 'Tailwind', img: './images/Skills/tailwind.svg' },
        { id: 8, name: 'MySql', img: './images/Skills/mysql.svg' },
        { id: 9, name: 'Firebase', img: './images/Skills/firebase.svg' },
        { id: 10, name: 'Git', img: './images/Skills/git.svg' },
        { id: 11, name: 'Github', img: './images/Skills/github.svg' },
    ]

    return (
        <ShapePages stylePage={ 'bg-gradient-to-b from-ciberPurple from-20% to-black to-80%' }>
            <TitlePage name={ 'Habilidades' }  sizeName={ 'text-8xl' } styleNames={'justify-end'} imgPage={ imgHead } hImg={ 200 } wImg={ 200 }/>
            <div className="mt-8 pt-6 flex flex-wrap gap-5 border-t-2 border-ciberPurple">
                {
                    skills.map(({id, name, img})=>(
                        <Card key={ id } name={ name } img={ img }/>
                    ))
                }
            </div>
        </ShapePages>
    )
}

export default SkillsPage
