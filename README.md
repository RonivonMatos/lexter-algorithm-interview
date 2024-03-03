## Introdução

Este projeto se trata da minha resolução para o seguinte problema: [Confira aqui](./DESCRIPTION.md)

## Sobre

- [Como o projeto está estruturado](./STRUCTURE.md)

## Como funciona

#### Sucesso

- Inserindo inputs válidos, como no exemplo em `src/input.ts`, será apresentado em tela o resultado no formato do exemplo em `src/output.ts`

#### Erros

- Inputs inválidos irão retornar a mensagem "Invalid input"

- Exemplos de `inputs inválidos`:
  - texto simples: `hello, world`
  - objetos vazios: `[{}]`
  - entryId undefined: `[{ path: ["root1"] }]`
  - path undefined: `[{ entryId: "1" }]`
  - path vazio: `[{ entryId: "1", path: [] }]`
  - formatação incorreta: `[entryId: "1", path: ["root1"]]`

## Screeenshots

![image](https://github.com/RonivonMatos/lexter-algorithm-interview/assets/55556872/c2bd9619-93cb-4b62-b131-3853047dea97)

![image](https://github.com/RonivonMatos/lexter-algorithm-interview/assets/55556872/775354ea-a4a6-4279-b3ae-ffc3b01b63ad)
