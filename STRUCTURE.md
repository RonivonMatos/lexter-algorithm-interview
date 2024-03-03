# Entendendo decisões arquiteturais e a estrutura do projeto

## Estrutura do projeto

- `./src/index`: Principal arquivo de configuração e execução do projeto.
- `./src/controllers`: Neste arquivo estão os `controllers` com as definições do que deve ser entregue ao client
- `./src/models`: Onde estão definidas as principais classes e métodos que são executados
- `./src/routes`: Aqui estão todas as definições de rotas e os respectivos redirecionamentos de acordo com o método de chamada
- `./src/views`: Onde estão localizados os componentes ejs, que estruturam a tela a ser mostrada no client
- `./src/utils`: Arquivo onde estão funções a serem disponibilizadas para toda aplicação

## Principais Libs adicionadas durante o desenvolvimento

#### ejs

- EJS (Embedded JavaScript templating) é um template que permite gerar HTML juntamente com JavaScript

#### Hjson

- Hjson permite formatar um texto para o formato JSON, assim como o `JSON.parse()`, mas com o adicional de corrigir alguns erros, como acrescentar `aspas duplas` onde não há.

#### express

- Express é um framework que, dentre outras funcionalidades, facilita bastante a configuração do app e das rotas.
