#!/bin/bash

# Limpar a pasta dist se existir
if [ -d "dist" ]; then
  echo "Limpando diretório dist existente..."
  rm -rf dist
fi

# Criar diretório dist
echo "Criando diretório dist..."
mkdir -p dist

# Copiar arquivos HTML
echo "Copiando arquivos HTML..."
cp index.html dist/

# Copiar arquivos CSS
echo "Copiando arquivos CSS..."
mkdir -p dist/css
cp css/*.css dist/css/

# Copiar arquivos JavaScript
echo "Copiando arquivos JavaScript..."
mkdir -p dist/js
cp -r js/* dist/js/

# Copiar imagens
echo "Copiando imagens..."
mkdir -p dist/img
cp -r img/* dist/img/

echo "Deploy preparado! Os arquivos estão na pasta 'dist'."
echo "Para fazer o deploy na Vercel, execute: vercel dist"
