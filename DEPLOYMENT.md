# 📋 Guia de Deployment - Tour 360

## 🚀 Passos para Subir em Produção

### 1️⃣ **Estrutura de Pastas**

Você precisa de duas pastas no seu servidor:

```
seu-dominio.com/
├── index.html (website)
├── styles.css
├── script.js
├── .htaccess (importante para Apache!)
└── tour360/
    ├── index.html
    ├── assets/
    │   ├── index-B-uRORMN.css
    │   └── index-BfPByXsh.js
    └── public/
        ├── salavista1.jpg
        ├── salavista2.jpg
        └── ... (todas as imagens 360)
```

---

### 2️⃣ **Opção A: Usando cPanel (Hostinger, GoDaddy, etc)**

1. **Acesse o cPanel** do seu servidor
2. **Vá para File Manager**
3. **Navegue até a pasta `public_html`**
4. **Faça upload dos arquivos:**
   - Copie `index.html`, `styles.css`, `script.js` e `.htaccess` para `public_html/`
   - Copie a pasta `dist/` (resultado do build) para `public_html/tour360/`
   - Copie a pasta `public/` (imagens 360) para `public_html/tour360/public/`

5. **Atualize a URL no script.js:**
   - Abra `script.js` via cPanel
   - Mude `https://seu-dominio.com/tour360/` para seu domínio real

---

### 3️⃣ **Opção B: Usando FTP (FileZilla, WinSCP)**

1. **Configure a conexão FTP:**
   - Host: ftp.seu-dominio.com
   - Usuário: seu-usuario-ftp
   - Senha: sua-senha-ftp
   - Porta: 21

2. **Navegue até `public_html/`** ou a pasta raiz do site

3. **Faça upload:**
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── .htaccess
   └── tour360/
       ├── (conteúdo da pasta dist/)
       └── public/
           └── (todas as imagens)
   ```

4. **Atualize a URL no script.js**

---

### 4️⃣ **Opção C: Git + Deploy (Recomendado para Developers)**

Se sua hospedagem suporta Git:

```bash
# 1. Crie um repositório na hospedagem
# 2. Configure o remote
git remote add production seu-usuario@seu-servidor.com:/caminho/public_html

# 3. Faça push do código
git push production feature/nova-branch

# 4. No servidor, execute:
npm run build
cp -r dist/* public_html/tour360/
cp website/* public_html/
```

---

### 5️⃣ **Configuração Final**

Depois de fazer upload, **importante:**

1. **Verifique o arquivo `.htaccess`:**
   - Ele precisa estar na raiz (`public_html/`)
   - Permite que o tour 360 funcione corretamente
   - Se usar Nginx, você precisa de configuração diferente (contacte seu host)

2. **Teste as imagens 360:**
   - Certifique-se que a pasta `public/` está em `tour360/public/`
   - As imagens são carregadas de `/tour360/public/nome-da-imagem.jpg`

3. **Teste o HTTPS:**
   - Ative SSL (Let's Encrypt é gratuito)
   - Certifique-se que `script.js` usa `https://` em produção

---

## 🔧 Estrutura do projeto compilado

```
dist/
├── index.html (HTML principal)
├── assets/
│   ├── index-B-uRORMN.css (CSS minificado)
│   └── index-BfPByXsh.js (JavaScript minificado)
```

**Para produção, copie TUDO da pasta `dist/` para `tour360/`**

---

## 📝 Checklist de Deploy

- [ ] Build gerado com `npm run build`
- [ ] Arquivos do website uploadados (index.html, styles.css, script.js, .htaccess)
- [ ] Pasta `dist/` copiada para `tour360/`
- [ ] Pasta `public/` com imagens copiada para `tour360/public/`
- [ ] URL atualizada em `script.js` para seu domínio
- [ ] Testado em navegador (https://seu-dominio.com)
- [ ] Testado no mobile
- [ ] SSL/HTTPS habilitado

---

## 🐛 Troubleshooting

**Problema:** Imagens não carregam
- **Solução:** Verifique se `public/` está em `tour360/public/`

**Problema:** Tour aparece em branco
- **Solução:** Abra o console (F12) e veja os erros
- Pode ser CORS ou caminho incorreto

**Problema:** Erro 404 ao entrar no site
- **Solução:** O `.htaccess` pode não estar funcionando
- Verifique com seu host se mod_rewrite está ativo

**Problema:** Iframe não carrega
- **Solução:** Certifique-se que `tour360/` é acessível via navegador
- Teste direto: `https://seu-dominio.com/tour360/`

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas com sua hospedagem específica, me avise qual você usa (Hostinger, GoDaddy, AWS, etc) que ajudo com as configurações exatas!

