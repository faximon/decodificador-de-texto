# Decodificador de Texto

Este é um projeto proposto pela **Alura** para finalizar a **formação de Iniciante em Programação** dentro do programa **One Next Education**. O objetivo do projeto é oferecer decodificação e decodificação de texto. criado utilizando HTML, CSS e JavaScript. 
Ele permite que os usuários insiram um texto e o codifique, ou faça o inverso, decodificando o texto.


## Regras e Funcionamento
Todos caracteres inseridos para codificação e decodificação serão padronizados com **`toLowerCase()`** para que tudo fique em  **caixa baixa**,  **`replace(/[\u0300-\u036f]/g, '')`** para remover todos os **diacríticos** (acentos, cedilhas, etc) dos caracteres, juntamente com **`normalize('NFD')`** para normalizar o Unicode.

- Decodificação e Codificação de texto inserido
- Interface de usuário simples e amigável
- Estilo básico com CSS

### A criptografia funciona da seguinte forma:

| **Letras** | **Codificado** |
|---|---|
| A | ai |
| E | enter |
| I | imes |
| O | ober |
| U | ufat |

## Como usar

### - Acesse o Deploy pelo navegador [clicando AQUI](https://decodificador-de-texto-lchthbn8j-vitors-projects-197662e8.vercel.app/)

### - Clone o repositório:
   ```bash
   git clone https://github.com/faximon/decodificador-de-texto

