import './Estudante.css'

function Estudante(props:{nome:string, imagem:string, descricao:string, githubLink:string}) {
    return (
        <div className='box-estudante'>
            <img src={props.imagem} />
            <h3 className='nome-estudante'>{props.nome}</h3>
            <p className='descricao-estudante'>{props.descricao}</p>
            <a href={props.githubLink}>GitHub</a>
        </div>
    )
}

export default Estudante