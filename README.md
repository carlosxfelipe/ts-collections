# ts-collections

Estruturas de Dados inspiradas em `java.util` para TypeScript/Bun/Node.js

## Visão Geral

Este projeto oferece uma coleção de **estruturas de dados clássicas**, inspiradas no pacote [`java.util`](https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html) do Java, porém implementadas em **TypeScript** e prontas para uso em projetos Bun, Node.js ou TypeScript puro.

Ideal para quem sente falta das coleções do Java, ou quer aprender/ensinar fundamentos de estrutura de dados de forma moderna e multiplataforma!

## Como rodar o projeto

Para rodar com Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

```bash
bun run main.ts
```

## Estruturas Disponíveis

- **Listas:**

  - `ArrayList<T>`
  - `LinkedList<T>`

- **Pilhas e Filas:**

  - `Stack<T>`
  - `Queue<T>`
  - `PriorityQueue<T>`

- **Conjuntos (Sets):**

  - `HashSet<T>`
  - `LinkedHashSet<T>`
  - `TreeSet<T>`

- **Mapas (Dicionários):**
  - `HashMap<K, V>`
  - `LinkedHashMap<K, V>`
  - `TreeMap<K, V>`

## Motivação

Essas implementações são pensadas para:

- Desenvolvedores que vêm do Java e querem familiaridade com as collections clássicas
- Estudos, ensino e prática de algoritmos em TypeScript
- Projetos onde se deseja maior controle ou previsibilidade nas estruturas de dados

## Observação

Estas estruturas são **inspiradas** no Java, mas escritas do zero em TypeScript, adaptadas às particularidades da linguagem (por exemplo, não possuem sincronização interna como as versões legacy do Java).  
São voltadas para uso didático, estudos e projetos onde estruturas clássicas são bem-vindas.

---

MIT License
