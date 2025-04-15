# Por Trás da Orla

Uma reportagem Longform sobre as percepções e impactos da Orla Domingos Canoeiro no bairro Amapá, em Marabá-PA.

## Sobre o Projeto

Este projeto apresenta uma reportagem multimídia que investiga o impacto da construção da Orla 'Domingos Canoeiro' no bairro Amapá, em Marabá-PA. A reportagem é baseada em entrevistas e materiais audiovisuais, buscando entender como as mudanças no espaço afetaram a vida dos moradores e suas relações com o local.

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e flexbox/grid)
- JavaScript
- Bibliotecas: jQuery, Owl Carousel, Animate.css, Font Awesome
- Sistema de build com npm

## Instalação e Execução

### Requisitos

- Node.js (versão 14 ou superior)
- npm (normalmente vem com o Node.js)

### Instalação

1. Clone o repositório:
   ```
   git clone [URL_DO_REPOSITÓRIO]
   ```

2. Navegue até a pasta do projeto:
   ```
   cd longForm-Mirela
   ```

3. Instale as dependências:
   ```
   npm install
   ```

### Execução em Desenvolvimento

Para executar o projeto em modo de desenvolvimento:

```
npm start
```

Isso iniciará um servidor local na porta 8080. Acesse http://localhost:8080 no seu navegador.

### Build para Produção

Para criar uma versão otimizada para produção, use um dos métodos abaixo:

**Usando npm:**
```
npm run build
```

**Usando o script shell (recomendado):**
```
./build.sh
```

Os arquivos otimizados serão gerados na pasta `dist/`.

**Para testar a versão de produção:**
```
cd dist && npx http-server
```

## Estrutura do Projeto

- `index.html` - Página principal da reportagem
- `css/` - Arquivos de estilo
  - `style.css` - Estilos principais
  - `mobile.css` - Estilos responsivos para dispositivos móveis
- `js/` - Scripts JavaScript
  - `index.js` - Script principal
  - `navbar.js` - Funcionalidades da barra de navegação
  - `gallery.js` - Visualizador de imagens da galeria
  - `lazy-loading.js` - Carregamento otimizado de imagens
- `img/` - Imagens e recursos visuais

## Autora

Mirella Carvalho - Jornalista em formação pela Universidade Federal do Sul e Sudeste do Pará (Unifesspa).

## Licença

Este projeto está licenciado sob a licença ISC.