//npm install inquirer
const { select } = require('@inquirer/prompts') //
const start = async ()  => {  //O comando await so funciona se tiver um async



  while(true){
    
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
        console.log("Vamos cadastrar");
        break
      case "listar":
        console.log("Vamos listar");
        break
      case "sair":
        console.log("Até a proxima!")
        return
    }
  }
}


start()
