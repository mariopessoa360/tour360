# 📤 Deploy via cPanel File Manager (HostGator)

## ✅ Sua Situação
- ✓ Domínio: psicologialaviahumanista.com.br
- ✓ Usuário: psi64072
- ✓ SSH não está habilitado (sem problema!)
- ✓ Usaremos File Manager do cPanel

---

## 🚀 Passo a Passo

### **PASSO 1: Acessar cPanel**

1. Acesse: `https://psicologialaviahumanista.com.br/cpanel`
2. Login: `psi64072` + sua senha
3. Procure por **"File Manager"** (em "Files" ou "Advanced")
4. Clique em **"File Manager"**

---

### **PASSO 2: Estrutura de Pastas Esperada**

Você precisa que fique assim no seu servidor:

```
public_html/
├── index.html (website)
├── styles.css (website)
├── script.js (website) ← com seu domínio
├── .htaccess (arquivo importante!)
├── assets/ (CSS e JS do tour)
├── tour360/
│   ├── index.html
│   ├── assets/ (CSS e JS compilados)
│   └── public/
│       ├── salavista1.jpg
│       ├── salavista2.jpg
│       └── ... (todas as 360 imagens)
```

---

### **PASSO 3: Deletar Arquivos Antigos (se houver)**

No File Manager:
1. **Selecione TUDO** (Ctrl+A)
2. Clique em **"Delete"**
3. Confirme

(Isso limpa o que havia antes)

---

### **PASSO 4: Upload dos Arquivos do Website**

1. **No seu PC**, vá para: `c:\projetos\tour360\website\`
2. **Selecione e copie:**
   - index.html
   - styles.css
   - script.js (este já tem seu domínio!)
   - .htaccess

3. **No File Manager do cPanel:**
   - Certifique-se que está em `public_html`
   - Clique em **"Upload"** ou **"Choose Files"**
   - Selecione os 4 arquivos acima
   - Clique em **"Upload"**

✓ Pronto! Agora você tem o website funcionando.

---

### **PASSO 5: Criar Pasta tour360 e Upload dos Arquivos**

1. **No File Manager, dentro de `public_html`:**
   - Clique em **"Create New Folder"**
   - Digite: `tour360`
   - Clique em **"Create"**

2. **Entre na pasta `tour360`:**
   - Dê duplo clique em `tour360`

3. **No seu PC, vá para: `c:\projetos\tour360\dist\`**
   - **Selecione TUDO** (Ctrl+A)
   - **Copie**

4. **No File Manager do cPanel (dentro da pasta `tour360`):**
   - Clique em **"Upload"**
   - Selecione todos os arquivos da pasta `dist`
   - Clique em **"Upload"**

---

### **PASSO 6: Upload da Pasta public (Imagens 360)**

1. **No seu PC, vá para: `c:\projetos\tour360\public\`**
   - Selecione TODOS os .jpg (as imagens 360)
   - Copie

2. **No File Manager do cPanel (dentro de `tour360`):**
   - Clique em **"Create New Folder"**
   - Digite: `public`
   - Entre na pasta

3. **Faça upload das imagens:**
   - Clique em **"Upload"**
   - Selecione todas as imagens
   - Clique em **"Upload"**

---

### **PASSO 7: Verificar Permissões**

No File Manager do cPanel:

1. **Selecione `public_html`**
2. Clique com botão direito → **"Change Permissions"** (ou ícone de engrenagem)
3. Certifique-se que tem `755` (padrão)

---

### **PASSO 8: Testar!**

Abra no navegador:
```
https://psicologialaviahumanista.com.br
```

Você deve ver:
- ✅ O website com design profissional
- ✅ O iframe com o tour 360 em tamanho grande
- ✅ As imagens carregando normalmente

---

## 🐛 Se Algo Não Funcionar

### **Problema: "Site não encontrado" ou erro 404**
- Verifique se `index.html` está em `public_html`
- Verifique se está em HTTPS (psicologialaviahumanista.com.br)

### **Problema: Imagens 360 não carregam**
- Verifique se a pasta é `public` (não `images` ou outro nome)
- Verifique o caminho: `tour360/public/salavista1.jpg`

### **Problema: Iframe aparece em branco**
- Abra console (F12) e veja o erro
- Verifique se `tour360/index.html` existe
- Teste direto: `https://psicologialaviahumanista.com.br/tour360/`

### **Problema: Erro de permissão**
- Contacte suporte HostGator
- Peça para verificar permissões da pasta `public_html`

---

## 📞 Ativar SSH (Próximo Passo - Opcional)

Se quiser fazer deploy futuro mais rápido via SSH:
1. **Contacte suporte HostGator**
2. **Peça para ativar:**
   - Shell/SSH access
   - OU Git Version Control

Depois será muito mais fácil!

---

## ✅ Checklist Final

- [ ] Acessou cPanel com sucesso
- [ ] Deletou arquivos antigos de `public_html`
- [ ] Fez upload de: index.html, styles.css, script.js, .htaccess
- [ ] Criou pasta `tour360`
- [ ] Fez upload de tudo da pasta `dist` para `tour360`
- [ ] Criou pasta `tour360/public`
- [ ] Fez upload de todas as imagens .jpg para `tour360/public`
- [ ] Testou em: https://psicologialaviahumanista.com.br
- [ ] Teste em mobile também!

---

**Conseguiu? Me avisa quando estiver online! 🚀**
