//npm install inquirer
const { select, input, checkbox } = require('@inquirer/prompts') //
const start = async ()  => {  //O comando await so funciona se tiver um async


  let metas = []

  // Função cadastrar meta
  const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta" });
    

    if(meta.length == 0){ //Verifica se o usúario digitou alguma coisa
      console.log("A meta não pode ser vazia"); 
      //Aqui escolhemos que o programa parasse, mas se eu quisesse obrigar o usúario digitar algo
      //poderia colocar na frente do return CadastrarMeta()
      return
    }

    metas.push(
      { value: meta, checked: false }
    )
  }

  const listarMetas = async () => {
    const respostas = await checkbox({
      message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar esta etapa",
      choices: [...metas], // Esta fazendo a cópia do vetor para não alterarmos as metas originais
      instructions: false
    })

    if(respostas.length == 0){
      console.log("Nenhuma meta selecionada!")
      return
    }

    metas.forEach((m) => {
      m.checked = false
    })

    respostas.forEach((resposta) => {
      const meta = metas.find((m) => {
        return m.value == resposta
      })

      meta.checked = true
    })

    console.log("Meta(s) marcadas concluída(s)")

  }


  while(true){
    
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
          name: "Sair",
          value: "sair"
        }
      ]
    })  // await, faz o programa esperar a pessoa selecionar algo para terminar de executar


    switch(opcao){
      case "cadastrar":
        await cadastrarMeta(); //Funções async sempre recebem await
        console.log(metas)
        break
      case "listar":
        await listarMetas()
        break
      case "sair":
        console.log("Até a proxima!")
        return
    }
  }
}


start()
