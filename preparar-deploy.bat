@echo off
REM Script para preparar os arquivos para deploy

echo.
echo ===============================================
echo   PREPARANDO ARQUIVOS PARA DEPLOY
echo ===============================================
echo.

REM Criar pasta de saída
if exist deploy_package rmdir /s /q deploy_package
mkdir deploy_package

echo [1/4] Copiando website...
xcopy website\*.* deploy_package\ /Y /I > nul
xcopy website\.htaccess deploy_package\ /Y > nul

echo [2/4] Copiando tour 360 (dist)...
mkdir deploy_package\tour360
xcopy dist\*.* deploy_package\tour360\ /Y /I /S > nul

echo [3/4] Copiando imagens 360...
mkdir deploy_package\tour360\public
xcopy public\*.* deploy_package\tour360\public\ /Y /I > nul

echo [4/4] Criando arquivo de configuração...
(
  echo # Configuração de Deploy
  echo # Atualize a URL do domínio em: website/script.js
  echo # Antes de fazer upload, verifique:
  echo # - URL em script.js apontando para https://seu-dominio.com/tour360/
  echo # - Todos os arquivos foram copiados corretamente
) > deploy_package\README_DEPLOY.txt

echo.
echo ===============================================
echo   ✓ ARQUIVOS PRONTOS!
echo ===============================================
echo.
echo Local: deploy_package\
echo.
echo Próximos passos:
echo 1. Abra deploy_package\script.js
echo 2. Atualize a URL: https://seu-dominio.com/tour360/
echo 3. Faça upload de TUDO para: public_html/
echo 4. Pronto!
echo.
pause
