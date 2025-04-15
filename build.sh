#!/bin/bash

echo "Iniciando processo de build..."

# Limpar diretório dist se existir
if [ -d "dist" ]; then
  echo "Limpando diretório dist existente..."
  rm -rf dist
fi

# Criar diretórios necessários
echo "Criando diretórios..."
mkdir -p dist/css
mkdir -p dist/js
mkdir -p dist/img
mkdir -p dist/js/owl-carousel

# Copiar arquivos HTML
echo "Copiando arquivos HTML..."
cp index.html dist/

# Minificar CSS
echo "Minificando CSS..."
npx postcss css/style.css --no-map -o dist/css/style.min.css
npx postcss css/mobile.css --no-map -o dist/css/mobile.min.css

# Minificar JavaScript
echo "Minificando JavaScript..."
npx uglify-js js/index.js -o dist/js/index.min.js
npx uglify-js js/navbar.js -o dist/js/navbar.min.js
npx uglify-js js/gallery.js -o dist/js/gallery.min.js
npx uglify-js js/lazy-loading.js -o dist/js/lazy-loading.min.js

# Copiar bibliotecas de terceiros
echo "Copiando bibliotecas de terceiros..."
cp -r js/owl-carousel/* dist/js/owl-carousel/

# Copiar imagens
echo "Copiando imagens..."
cp -r img/* dist/img/

# Atualizar referências no HTML
echo "Atualizando referências no HTML..."
sed -i 's/css\/style.css/css\/style.min.css/g' dist/index.html
sed -i 's/css\/mobile.css/css\/mobile.min.css/g' dist/index.html
sed -i 's/js\/index.js/js\/index.min.js/g' dist/index.html
sed -i 's/js\/navbar.js/js\/navbar.min.js/g' dist/index.html
sed -i 's/js\/gallery.js/js\/gallery.min.js/g' dist/index.html
sed -i 's/js\/lazy-loading.js/js\/lazy-loading.min.js/g' dist/index.html

echo "Build concluído! Os arquivos estão na pasta 'dist'."
echo "Para testar, execute: cd dist && npx http-server"
