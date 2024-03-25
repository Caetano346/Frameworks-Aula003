import './Main.css'
import Estudante from './Estudante/Estudante'

function Main() {
    return(
        <main>
            <Estudante 
                nome="João Victor da Silva Caetano"
                imagem="https://github.com/joaovscaetano.png"
                descricao="Estudante do IFMS nas matérias de Desenvolvimento - Desenvolvimento Web"
                githubLink="https://github.com/joaovscaetano"
            />
        </main>
    )
}

export default Main