#!/bin/bash
# Script para preparar os arquivos para deploy (Linux/Mac)

echo ""
echo "==============================================="
echo "  PREPARANDO ARQUIVOS PARA DEPLOY"
echo "==============================================="
echo ""

# Criar pasta de saída
rm -rf deploy_package
mkdir -p deploy_package

echo "[1/4] Copiando website..."
cp website/* deploy_package/
cp website/.htaccess deploy_package/ 2>/dev/null

echo "[2/4] Copiando tour 360 (dist)..."
mkdir -p deploy_package/tour360
cp -r dist/* deploy_package/tour360/

echo "[3/4] Copiando imagens 360..."
mkdir -p deploy_package/tour360/public
cp public/* deploy_package/tour360/public/

echo "[4/4] Criando arquivo de configuração..."
cat > deploy_package/README_DEPLOY.txt << 'EOF'
# Configuração de Deploy
# Atualize a URL do domínio em: website/script.js
# Antes de fazer upload, verifique:
# - URL em script.js apontando para https://seu-dominio.com/tour360/
# - Todos os arquivos foram copiados corretamente
EOF

echo ""
echo "==============================================="
echo "  ✓ ARQUIVOS PRONTOS!"
echo "==============================================="
echo ""
echo "Local: deploy_package/"
echo ""
echo "Próximos passos:"
echo "1. Abra deploy_package/script.js"
echo "2. Atualize a URL: https://seu-dominio.com/tour360/"
echo "3. Faça upload de TUDO para: public_html/"
echo "4. Pronto!"
echo ""
