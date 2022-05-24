# Rush.js

## Install Reference

Setup Project: https://rushjs.io/pages/maintainer/setup_new_repo/

## Commands

> **WARN**: Sempre que um arquivo package.json for alterado lembre de utilizar o comando rush update. 

- **rush update**
    - Verifica as politicas que atualizem arquivos **common/config**.
    - Compara arquivos packagejson do seu projeto e do arquivo shrinkwrap comum do repositorio para ver se ele é válido.
    - Se estiver desatualiado, o gerenciador de pacotes instala toadas as dependencias na pasta **common/temp/node_modules**.
    - Instala todas as dependencias na pasta **common/temp/node_modules**.
    - Enfim o Rush constroi uma pasta node_module local para cada projeto, criando links simbolicos com o **common/temp/node_modules**.

- **rush install**
    - Semelhante ao rush update porem ele nao atualizara nenhum arquivo, em vez disso ele falhará em sua construcao de PR se algo estiver desatualizado, para que voce saiba que esqueceu de executar rush update ou esqueceu de confirmar o resultado. 

- **rush rebuild**
    - Faz uma compilacao completa e limpa o build de cada projeto no repository
    - Se sua cadeia de ferramentas oferecer suporte a compilações incrementais, você também poderá usar o rush build para compilar apenas os projetos que foram alterados.

- **rush check**
    - Depois de editar um arquivo package.json, você pode executar o rush check para ver se vários projetos dependem de diferentes versões da mesma biblioteca. Em um ambiente monorepo, isso é indesejável. Muitos repositórios usarão a verificação rápida como uma etapa de compilação de CI, para que possam falhar na compilação de PR se você introduzir versões lado a lado.

- **rush change**
    - Se você trabalha em bibliotecas que são publicadas como pacotes NPM, seu repositório provavelmente exige que você inclua entradas de log de alterações como parte de seu PR. Você saberá porque sua construção de PR falhará na etapa de mudança rápida --verificação.

    - 

> **Referencias**: Todos essa documento foi feito om base a documentacao ofiial do Rush.js recomendo ler diretamente da [docs].(https://rushjs.io/pages/developer/everyday_commands/) 

## Cenários comuns

```
# Puxe as últimas alterações do Git
$ git pull

# Instale os pacotes NPM conforme necessário
$ rush update

# Faça uma reconstrução limpa de tudo
$ rush rebuild

# Trabalhe em um projeto
$ cd ./my-project

# Vamos supor que haja um script "start" no package.json.
# (Para ver os comandos disponíveis, digite "rushx" sozinho.)
$ rushx start
```

## Tips

Evite usar comandos que altere apenas um modulo dentro do mono repo, como por exemplo npm install, npm update, npm link, npm dedupe, o unico que funcionara bem sera o npm rush. 

Caso precise executar o comando de um modulo em especifico é mais comum entramos via cli dentro da pasta deste modulo e utilizar o comando rushx e o script esperado. Por exemplo rushx storybook.

O Rush.js utiliza links simbolicos e estes comandos atrabalham o funcionamento do mesmo. Com isso sempre que precisar usar estes comandos sera melhor remover os links (rush unlink) antes do comando.

Caso exista uma duvida se tudo instalou corretamente dentro de um comando rush, prefira utilizar o comando rush update --purge que forcara a reinstalacao completa de seus pacotes e geralmente o colocara de voltar em um bom estado. 