import './Estudante.css'

function Estudante(){
    return (
        <div className='box-estudante'>
                <img src="https://github.com/Caetano346.png" alt="Foto Estudante" />
                <h3 className='nome-estudante'>João Victor da Silva Caetano</h3>
                <p className='descricao-estudante'>Estudante do IFMS nas matérias de Desenvolvimento - Desenvolvimento Web</p>
                <a href="https://github.com/Caetano346">GitHub</a>
            </div>
    )
}

export default Estudante