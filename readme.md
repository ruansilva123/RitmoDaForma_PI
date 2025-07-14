# Ritmo da Forma - Site Oficial

Este site é uma aplicação fullstack desenvolvida para a academia Ritmo da Forma, feita por estudantes da Universidade Univille. Este sistema foi uma iniciativa iniciada durante o Projeto Integrador, uma matéria do curso que visa levar soluções que agregam valor a comunidades de diferentes setores, de forma totalmente gratuita.

Link do site: <b><a>https://ritmodaforma.vercel.app/</a></b>

![image](https://github.com/user-attachments/assets/6bfa9d74-ff61-4b87-a303-0660ff01b435)

## Tecnologias Utilizadas :hammer:
* [Typescript](https://www.typescriptlang.org/) - Linguagem
* [React](https://react.dev/) - Framework frontend
* [StyledComponents](https://styled-components.com/) - Framework CSS
* [Redux](https://redux.js.org/) - Tecnologia para o gerenciamento de estado

## Dependências :arrow_up:
    Node - Versão: ^20.14.0
    Npm - Versão: ^10.7.0

Bibliotecas utilizadas: [package.json](frontend/package.json)

## Como executar o projeto :mortar_board:

Certifique-se de possuir o <b>git</b> instalado e configurado, além de um editor de texto compatível, recomendamos o <b>Visual Studio Code</b>.

#### 🔴 1. Clonar Repositório
No terminal, primeiro selecione um diretório o qual você irá adicionar o projeto, então execute o seguinte comando abaixo. Em seguida você pode abrir o projeto com o editor de sua preferência.

    git clone https://github.com/ruansilva123/RitmoDaForma_PI.git

#### 🔴 2. Instalar dependências
Certifique-se de possuir o NPM e o Node configurados. Na raiz do proejeto navegue até o diretório frontend e realize a instalação das dependências.

    cd frontend
    npm install

#### 🔴 3. Executar frontend localhot
Ainda no diretório "/frontend" execute o comando:

    npm run dev

Com isso todo o sistema já estará em execução e você pode conferir o site.

## Informações importantes sobre a aplicação 📌

#### Redux
Nem todo gerenciamento de estado da aplicação está utilizando o Redux, estruturas mais simples também fazem parte, como a API context para os modais, além do hook useState. Porém, o redux centraliza todos os estados e elementos que interagem diretamente com o backend, como os vídeos de treinamentos, o calendários das aulas, planos de pagamento e contatos.

#### Sessão de Admin e Usuário
O site consta com sessões e páginas para o usuário final e para o administrador, resposável por cadastrar os vídeos e outras dinâmicas, e isto se reflete também na organização do código o qual constará diretórios de <b>"admin"</b>, direcionados para os componentes relacionados ao sistema do administrador e diretórios de <b>"site"</b>, direcionados ao usuário final.

<img width="212" alt="image" src="https://github.com/user-attachments/assets/d9b364d1-c4da-47c1-827c-2615fe4590a7">


## Licença :page_with_curl:

O site Ritmo da Forma está sob a licença [MIT LICENSE](LICENCE).

## Autores :black_nib:

[@ruansilva123](https://github.com/ruansilva123) - Desenvolvedor Backend <br>
[@daniwells](https://github.com/daniwells) - Desenvolvedor Frontend <br>
[@lewinott](https://github.com/lewinott) - Desenvolvedor Frontend <br>
[@gabrilhos](https://github.com/gabrilhos) - Facilidador/Comunicador <br>
[@guiycatsu](https://github.com/guiycatsu) - Facilidador/Comunicador <br>

## Gratidão :gift:

A equipe agradece todo o apoio da academia Ritmo da Forma e o suporte da Univille, é gratificante poder contribuir com comunidades engajadas em projetos como esse!
