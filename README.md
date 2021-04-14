# Code Challenge Trocafone

Este repositório contém os testes unitários para validação do desafio técnico realizado para admissão.

Implemente as funções necessárias para passar nos testes automatizados e envie para o recrutador.

Utilize o comando abaixo para validar as funções.
```
npm run test
```

Durante o desenvolvimento das funções é provavel que você queira rodar os testes apenas da função que você está implementando no momento, para isso execute:
```
npm run test --test=NOMEDOTESTE
```
Onde `NOMEDOTESTE` pode ser uma parte do nome do arquivo ou o nome completo, por exemplo:
```bash
npm run test --test=sortList # para testar o desafio sortLIst

npm run test --test=camel # para testar o desafio camelCase
...
```
## Como começar

 Clone o repositório e execute:
 ```
 npm install
 ```
 E você estará pronto para começar o desafio.
 
 As funções dos desafios devem ser implementadas nos arquivos correspondentes na pasta `src` e você deve rodar o comando `npm run test` para validar se a função foi corretamente implementada.

Por exemplo, para realizar o desafio `FuelSpent` você deve implementar a função no arquivo `src/fuelSpent.js`, e após isso rodar os testes para validar.
## Desafio #1 fuelSpent
Implemente no arquivo: `src/fuelSpent.js`

O Joãozinho quer calcular e mostrar a quantidade de litros de combustível gasto em uma viagem, usando um carro que faz 12 Km / L. Para isso, ele gostaria que você o ajudasse por meio de um programa simples. Para realizar o cálculo, é necessário ler o tempo gasto (em horas) e a mesma velocidade média (km / h). Desta forma, você pode obter a distância e, em seguida, calcular quantos litros seriam necessários. Mostre o valor inteiro arredondado para cima se necessário, por exemplo: 10.5 litros seria arredondado para 11 litros.

* Entrada: 
A função deve receber dois inteiros. O primeiro é o tempo gasto na viagem (em horas). O segundo é a velocidade média durante a viagem (em Km / h).

* Saída: Deve retornar um inteiro informando a quantidade em litros necessária para realizar a viagem.

```js
fuelSpent(10,85); // deve retornar 71
fuelSpent(2, 92); // deve retornar 15
fuelSpent(22, 67); // deve retornar 123
```

## Desafio #2 Salary Bonus
Implemente no arquivo: `src/salaryBonus.js`

O propósito é implementar uma função que receba o salário fixo de um vendedor e o total de vendido por esse vendedor e retornar o salário + 15% de comissão em cima do total vendido:
```js
salaryBonus(500.00, 1230.30); // resulta em 684.54;
salaryBonus(700.00, 0.00); // resulta em 700.00;
salaryBonus(1700.00, 1230.50); // resulta em 1884.58;
salaryBonus(500.00, 1230.30); // resulta em 684.54;
salaryBonus(700.00, 0.00); // resulta em 700.00;
salaryBonus(1700.00, 1230.50); // resulta em 1884.58;
```

## Desafio #3 DeduplicateSentence
Implemente no arquivo: `src/deduplicateSentence.js`

O propósito é implementar uma função que remova palavras que são duplicadas em sequência e retorne a string final.
Por exemplo:
```js
deduplicateSentence("Hello Bob. Hello Ana.") // resulta "Hello Bob. Hello Ana." mesmo hello repetindo na frase.
deduplicateSentence("Hello Hello Bob") // resulta "Hello Bob"
```

## Desafio #4 FindFirstBiggestWord
Implemente no arquivo: `src/findFirstBiggestWord.js`

O propósito é implementar uma função que encontre a primeira maior palavra de uma sentença e a retorne.
Considerando apenas [palavras](#informações).

```javascript
findFirstBiggestWord("Hello Bob") // resulta em "Hello"
findFirstBiggestWord("You're right!") // resulta em "right"
```
## Desafio #5 WordMesh (Bônus)
Implemente no arquivo: `src/wordMesh.js`

O propósito é implementar uma função que receba uma matriz com N palavras que podem ou não ser "ligadas" e retorne apenas os "conectores" entre as palavras.
Uma ligação de palavras neste desafio é quando o final de uma palavra contém as mesmas letras que o começo de outra. 

Exemplo de palavras ligáveis:
```
apply 	 -> plywood
apple 	 -> each
behemoth -> mother
...
```

Exemplo de palavras não ligáveis:
```
apply -> playground
apple -> peggy
...
```

Caso todas as palavras possam ser ligadas deve retornar apenas os "conectores" das palavras.
Exemplo:

```javascript
wordMesh(["apply", "plywood"]) // resulta em "ply", porque ply é o final de "apply" e o começo de "plywood"
wordMesh(["apple", "each"]) // resulta em "e"
wordMesh(["word", "notmesh"]) // false, porque o final de "word" não é começo de "notmesh"

```
A função deve suportar matrizes com N palavras, ou seja, de tamanho indeterminado, mas o tamanho sempre será par para o propósito do desafio.
```js
wordMesh(["apple", "each", "chainsmoker", "river"]) // echr
```
O resultado é `echr`, porque:
- `apple` e `each` ligam por `e`, 
- `each` e `chainsmoker` ligam por `ch` 
- e `chainsmoker` e `river` ligam por `r`


Se alguma das palavras não "ligar" com a próxima, a função deve retornar `false`.

## Informações
Palavras são conjuntos de letras alfanuméricos. Ou seja símbolos e acentuações como `!@#...` não são considerados palavras para o desafio.

Exemplo:
```
Palavras:
Hello!!! - A palavra é Hello
@Uncle123 - A palavra é Uncle
```
