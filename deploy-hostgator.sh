#!/bin/bash

# Script de Deploy Automático para HostGator
# Uso: bash deploy-hostgator.sh seu-dominio.com

set -e  # Sair se houver erro

DOMAIN="${1:-seu-dominio.com}"
COLORS='\033[0;36m' # Cyan
NC='\033[0m' # No Color

echo -e "${COLORS}"
echo "╔════════════════════════════════════╗"
echo "║   DEPLOY AUTOMÁTICO - HOSTGATOR    ║"
echo "╚════════════════════════════════════╝"
echo -e "${NC}"
echo ""
echo "Domínio: $DOMAIN"
echo ""

# Step 1: Limpar e preparar
echo "📦 [1/7] Limpando pastas antigas..."
rm -rf dist deploy_package
echo "✓ OK"

# Step 2: Build
echo "🔨 [2/7] Gerando build de produção..."
npm run build > /dev/null 2>&1
echo "✓ OK"

# Step 3: Preparar estrutura
echo "📁 [3/7] Preparando estrutura..."
mkdir -p public_html_deploy/tour360
echo "✓ OK"

# Step 4: Copiar arquivos
echo "📋 [4/7] Copiando arquivos..."
cp website/index.html public_html_deploy/
cp website/styles.css public_html_deploy/
cp website/script.js public_html_deploy/
cp website/.htaccess public_html_deploy/
cp -r dist/* public_html_deploy/tour360/
mkdir -p public_html_deploy/tour360/public
cp public/* public_html_deploy/tour360/public/
echo "✓ OK"

# Step 5: Atualizar URL no script.js
echo "🌐 [5/7] Atualizando URL do domínio..."
sed -i "s|https://seu-dominio.com/tour360/|https://$DOMAIN/tour360/|g" public_html_deploy/script.js
echo "✓ URL atualizada para: https://$DOMAIN/tour360/"

# Step 6: Criar .gitignore para ignorar node_modules no host
echo "🔒 [6/7] Criando configurações..."
cat > public_html_deploy/.gitignore << 'EOF'
node_modules/
dist/
.DS_Store
*.log
EOF
echo "✓ OK"

# Step 7: Resumo
echo "✅ [7/7] Deploy pronto!"
echo ""
echo "╔════════════════════════════════════╗"
echo "║         PRÓXIMOS PASSOS             ║"
echo "╚════════════════════════════════════╝"
echo ""
echo "1. Faça upload da pasta 'public_html_deploy/' para o HostGator:"
echo "   ou no SSH do HostGator, execute:"
echo ""
echo "   cd ~/public_html"
echo "   git pull origin feature/nova-branch"
echo "   npm install"
echo "   npm run build"
echo "   cp website/* ."
echo "   mkdir -p tour360"
echo "   cp -r dist/* tour360/"
echo ""
echo "2. Acesse: https://$DOMAIN"
echo ""
echo "3. Pronto! Seu site está online! 🎉"
echo ""
