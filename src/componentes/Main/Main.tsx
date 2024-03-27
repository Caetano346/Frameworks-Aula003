import './Main.css'
import Estudante from './Estudante/Estudante'

function Main() {
    const estudantes = [
        {
            nome:"João Victor da Silva Caetano",
            imagem:"https://github.com/joaovscaetano.png",
            descricao:"Estudante do IFMS nas matérias de Desenvolvimento - Desenvolvimento Web",
            githubLink:"https://github.com/joaovscaetano",
          },
        {
            nome: "Marcela Santos de Oliveira",
            imagem: "https://github.com/marcelaoliveira2.png",
            descricao: "Estudante do IFMS",
            githubLink: "https://github.com/marcelaoliveira2",
        },
        {
            nome:"Guilherme Figueiredo Terenciani",
            imagem:"https://github.com/guilhermeterenciani.png",
            descricao:"Professor do IFMS nas matérias de Desenvolvimento - Desenvolvimento Web",
            githubLink:"https://github.com/guilhermeterenciani",
        },
        {
            nome:"Guilherme Pinheiro",
            imagem:"https://github.com/GuiPiinheiro.png",
            descricao:"Estudante do IFMS que não aguenta mais essa vida!",
            githubLink:"https://github.com/GuiPiinheiro",
          },
          {
            nome:"Lucas",
            imagem:"https://github.com/lucasfelipeoliveira2022.png",
            descricao:"Estudante do IFMS em Técnico de Informática para Internet",
            githubLink:"http://github.com/lucasfelipeoliveira2022",
          }, 
          {
            nome:"Maria Clara",
            imagem:"https://github.com/mariFeldk.png",
            descricao:"estudante do IFMS informatica para internet",
            githubLink:"https://github.com/mariFeldk",
          },
          {
            nome:"MarcUs Gamer",
            imagem:"https://github.com/linss22.png",
            descricao:"Gamer do IFMS hahahahahahah",
            githubLink:"https://github.com/linss22",
          },
          {
            nome:"Gustavo A.",
            imagem:"https://github.com/torneira.png",
            descricao:"GG",
            githubLink:"https://github.com/torneira",
          },
          {
            nome:"Victor Hugo Da Costa Bueno",
            imagem:"https://github.com/victor17y.png",
            descricao:"estudante do ifms nas materias ",
            githubLink:'href:"https://github.com/victor17y',
          },
          {
            nome:"Luis Guilherme",
            imagem:"http://github.com/sh0uwzz.png",
            descricao:"Presidente do Brasil",
            githubLink:"http://github.com/sh0uwzz",
          },
          {
            nome:"Vinicius Eduardo",
            imagem:"https://github.com/vinixxsdj.png",
            descricao:"Estudante do IFMS",
            githubLink:"https://github.com/vinixxsdj",
          },
          {
            nome:"Felipe Santos",
            imagem:"https://github.com/Felipe10222b.png",
            descricao:"vampetinhacria",
            githubLink:"https://github.com/Felipe10222b",
          },
          {
            nome:"Rikelme de Freitas",
            imagem:"https://github.com/rikelme1810.png",
            descricao:"Estudante vagabundo",
            githubLink:"https://github.com/rikelme1810",
          },
    
          {
            nome:"Gustavo Oliveira Silva",
            imagem:"https://github.com/Gustavoif12.png",
            descricao:"Aluno do IFMS nas matérias de Desenvolvimento / Desenvolvimento Web",
            githubLink:"https://github.com/Gustavoif12",
          },
          {
            nome:"Suellyn",
            descricao:"Estudante IFMS - curso integrado Técnico de Informática para a Internet",
            imagem:"https://github.com/suxxc.png",
            githubLink:"https://github.com/suxxc",
          },
          {
            nome:"Ryan Cristian",
            imagem:"https://github.com/trycsr.png",
            descricao:"Estudante do IFMS cursando a area de TI",
            githubLink:"https://github.com/trycsr",
          },
          {
            nome:"Ana Clara Eleutério",
            imagem:"https://github.com/annawlyzz.png",
            descricao:"Aluna do IFMS, no 5° semestre do Curso Técnico de Informática para Internet",
            githubLink:"https://github.com/annawlyzz",
          },
          {
            nome:"Gabriela Silva Palma",
            imagem:"https://github.com/gabisp28.png",
            descricao:"Estudante do Instituto Federal do Mato Grosso do Sul, estou no 5º Semestre, cursando Técnico em Informática para Internet",
            githubLink:"https://github.com/gabisp28",
          },
          {
            nome:"Vitória Dangui Siqueira",
            imagem:"https:////github.com/vitoriasiqueira.png",
            descricao:"Estudante de Informática para Internet no 5° Semestre",
            githubLink:"https://github.com/vitoriasiqueira",
          },
          {
            nome:"Guilherme Finoto",
            imagem:"https://github.com/FinotoZx.png",
            descricao:"Estudante do IFMS",
            githubLink:"https://github.com/FinotoZx",
          },
          {
            nome:"Felipe Brito Ferreira",
            imagem:"https://github.com/FelipeBrito1234.png",
            descricao:"Estudante do IFMS nas matérias de Desenvolvimento - Desenvolvimento Web",
            githubLink:"https://github.com/FelipeBrito1234",
          },
          {
            nome:"Maria Rodrigues",
            imagem:"https://github.com/07174293182.png",
            descricao:"Estudante do IFMS",
            githubLink:"https://github.com/07174293182",
          },
          {
            nome:"Rebeca Navier Coutinho",
            imagem:"https://github.com/NavierK.png",
            descricao:"Remeleca lore estudante do IFMS",
            githubLink:"https://github.com/NavierK",
          },
          {
            nome:"Isabely Antunes da Silva",
            imagem:"https://github.com/IsabelyAntunes.png",
            descricao:" Estudante do IFMS nas matérias de Desenvolvimento - Desenvolvimento Web",
            githubLink:"https://github.com/IsabelyAntunes",
          },
          {
            nome:"Emilly Geovana",
            imagem:"https://github.com/emyy8.png",
            descricao:"ctapimbas",
            githubLink:"https://github.com/emyy8",
          },
          {
            nome:"Marcos Antonio Magalhães Neto",
            imagem:"https://github.com/MarcosNeto23.png",
            descricao:"Estudante do Ifms",
            githubLink:"https://github.com/MarcosNeto23",
          },
          {
            nome:"Guilherme De Souza",
            imagem:"https://github.com/GuilhermeTheGrego.png",
            descricao:"O Aluno Mais !Lindo Do IF",
            githubLink:"https://github.com/GuilhermeTheGrego",
          },
          {
            nome:"Maria",
            imagem:"https://github.com/Maria762663114.png",
            descricao:"Aluna IFMS",
            githubLink:"https://github.com/Maria762663114",
          }
        ]

    return(
        <main>
            {
                estudantes.map( (estudante) => {
                    return(
                        <Estudante
                            nome={estudante.nome}
                            imagem={estudante.imagem}
                            descricao={estudante.descricao}
                            githubLink={estudante.githubLink}
                        /> 
                    )
                })
            }
        </main>
    )
}

export default Main