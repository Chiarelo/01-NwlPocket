//npm install inquirer
const { select, input, checkbox } = require('@inquirer/prompts') //
const fs  = require("fs").promises

  let mensagem = "Bem vindo ao app de metas!";
  let metas 

  const carregarMetas = async () => {
    try {
      const dados = await fs.readFile("metas.json", "utf-8")
      metas = JSON.parse(dados)
    }
    catch(erro){
      metas = []
    }
  }

  const salvarMetas = async () => {
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
  }


  // Função cadastrar meta
  const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta" });
    

    if(meta.length == 0){ //Verifica se o usúario digitou alguma coisa
      mensagem = ("A meta não pode ser vazia"); 
      //Aqui escolhemos que o programa parasse, mas se eu quisesse obrigar o usúario digitar algo
      //poderia colocar na frente do return CadastrarMeta()
      return
    }

    metas.push(
      { value: meta, checked: false }
    )

    mensagem = "Meta cadastrada com sucesso!"
  }

  const listarMetas = async () => {

    if(metas.length === 0){
      mensagem = "Nenhuma meta cadastrada!";
      return;
    }

    const respostas = await checkbox({
      message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar esta etapa",
      choices: [...metas], // Esta fazendo a cópia do vetor para não alterarmos as metas originais
      instructions: false
    })
    
    metas.forEach((m) => {
      m.checked = false
      //deixa o checked como false antes de colocar as metas como concluidas, para conseguirmos desmarcar as metas depois
    })
    
    if(respostas.length == 0){
      mensagem = "Nenhuma meta selecionada!";
      return
    }
  
    respostas.forEach((resposta) => { //para cada resposta ele busca a meta correspondente quando a meta é encontrada o valor dela recebe true
      const meta = metas.find((m) => {
        return m.value == resposta
      })

      meta.checked = true
    })

    mensagem = "Meta(s) marcadas concluída(s)"

  }

  const metasRealizadas = async () => {
    if(metas.length == 0){ 
      mensagem = ("Não existem metas!"); 
      return
    }

    const realizadas  = metas.filter((meta) => {
      return meta.checked 
    })

    if(realizadas.length == 0){
      mensagem = "não existem metas realizadas! :("
      return
    }

    await select ({
      message: "Metas realizadas!" + realizadas.length,
      choices: [...realizadas]
    })
    
  }

  const metasAbertas = async () => {
    if(metas.length === 0){
      mensagem = "Nenhuma meta cadastrada!";
      return;
    }

    const abertas = metas.filter((meta) => {
      return !meta.checked
    })

    if(abertas.length == 0){
      mensagem = "não existem metas em andamento"
      return
    }

    await select ({
      message: "Metas abertas," + abertas.length,
      choices: [...abertas] 
    })

  }

  const deletarMetas = async () => {
    if(metas.length === 0){
      mensagem = "Nenhuma meta cadastrada!";
      return;
    }

    

    const metasDesmarcadas = metas.map((meta) => {
      return { value: meta.value, checked: false}
    })

    const deleteItens = await checkbox({
      message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar esta etapa",
      choices: [...metasDesmarcadas], // Esta fazendo a cópia do vetor para não alterarmos as metas originais
      instructions: false
    })

    if(metasDesmarcadas.length ==  0) {
      mensagem = "Nenhum item para deletar!"
      return
    }

    deleteItens.forEach((item) => {
      metas = metas.filter((meta) => {
        return meta.value != item
      })
    })

    mensagem = "Meta(s) deletada(s) com sucesso!"

  
  }

  const mostrarMensagem = () => {
    console.clear();

    if(mensagem != ""){
      console.log(mensagem)
      console.log("")
      mensagem = ""
    }
  }



const start = async ()  => {  //O comando await so funciona se tiver um async
  await carregarMetas();

  while(true){
    mostrarMensagem()
    await salvarMetas()
    //*Promessa o await espera uma promessa de que o usuario vai escolher alguma das opçoes e que elas vao ser retornados
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar"
        },
        {
          name: "Listar metas",
          value: "listar"
        },
        {
          name: "Realizar metas",
          value: "realizadas"
        },
        {
          name: "Metas abertas",
          value: "abertas"
        },
        {
          name: "Deletar metas",
          value: "deletar"
        },
        {
          name: "Sair",
          value: "sair"
        }
      ]
    })  // await, faz o programa esperar a pessoa selecionar algo para terminar de executar


    switch(opcao){
      case "cadastrar":
        await cadastrarMeta(); //Funções async sempre recebem await
        break
      case "listar":
        await listarMetas()
        break
      case "realizadas":
        await metasRealizadas()
        break
      case "abertas":
        await metasAbertas()
        break
      case "deletar":
        await deletarMetas()
        break
      case "sair":
        console.log("Até a proxima!")
        return
    }
  }
}


start()
