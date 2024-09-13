# Gerenciador de Metas - JavaScript (Next Level Week)

Este projeto foi desenvolvido durante a Next Level Week e consiste em um **gerenciador de metas** simples e eficiente utilizando **JavaScript**. Ele oferece funcionalidades para o gerenciamento de metas, desde a criação até a exclusão, permitindo que o usuário tenha total controle sobre seu progresso.

## Funcionalidades

- **Adicionar metas**: Permite ao usuário cadastrar novas metas.
- **Listar metas**: Exibe todas as metas cadastradas e permite marcar ou desmarcar metas como concluídas.
- **Marcar metas como concluídas**: Possibilidade de selecionar metas realizadas.
- **Visualizar metas abertas**: Permite ver metas que ainda não foram concluídas.
- **Excluir metas**: O usuário pode remover metas que não são mais necessárias.
- **Persistência de dados**: As metas são salvas em um arquivo JSON para serem mantidas entre as execuções do programa.

## Projeto Funcionando
https://github.com/user-attachments/assets/39a03ce4-461b-466f-a845-6a08ba70230f

## Tecnologias Utilizadas

- **JavaScript**
- **Node.js**
- **Inquirer.js** (para interações no terminal)
- **File System (fs)** (para leitura e escrita de arquivos JSON)

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone <link-do-repositorio>
    ```
2. Acesse o diretório do projeto:
    ```bash
    cd gerenciador-de-metas
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Execute o projeto:
    ```bash
    node app.js
    ```

## Como Usar

Ao iniciar o programa, o usuário verá um menu com as seguintes opções:

1. **Cadastrar meta**: Insira uma nova meta no sistema.
2. **Listar metas**: Veja todas as metas cadastradas e marque as concluídas.
3. **Realizar metas**: Exibe metas que foram concluídas.
4. **Metas abertas**: Visualiza as metas que ainda estão em andamento.
5. **Deletar metas**: Remove as metas selecionadas.
6. **Sair**: Finaliza o programa.



