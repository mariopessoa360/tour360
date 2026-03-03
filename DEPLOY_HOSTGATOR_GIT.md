# 🚀 Deploy via Git no HostGator

## ✅ Pré-requisitos
- ✓ Acesso Git no HostGator (você já tem!)
- ✓ SSH habilitado no HostGator
- ✓ npm instalado no servidor (normalmente já vem)

---

## 📋 Passo a Passo

### **PASSO 1: Configurar o Repositório Local**

No seu computador, execute:

```bash
cd c:\projetos\tour360

# Ver o remote atual
git remote -v

# Se não tiver origin, adicionar
git remote add origin https://github.com/mariopessoa360/tour360.git

# Ver branches
git branch -a
```

---

### **PASSO 2: Fazer Push para GitHub**

```bash
# Estar na branch que quer (você está em feature/nova-branch)
git branch

# Adicionar todas as mudanças
git add .

# Commit
git commit -m "Deploy para produção com website iframe"

# Fazer push
git push origin feature/nova-branch
```

---

### **PASSO 3: No HostGator - Clonar o Repositório**

1. **Acesse SSH do HostGator:**
   - Abra terminal/PowerShell
   - Conecte: `ssh seu-usuario@seu-dominio.com` ou `ssh seu-usuario@seu-ip-hostgator`
   - Ou use cPanel → Terminal

2. **No terminal do HostGator, execute:**

```bash
# Vá para a pasta public_html
cd ~/public_html

# Limpe se houver arquivos antigos
rm -rf *

# Clone o repositório
git clone https://github.com/mariopessoa360/tour360.git .

# Verifique se clonou
ls -la
```

---

### **PASSO 4: Construir o Projeto no HostGator**

```bash
# Instalar dependências
npm install

# Gerar build de produção
npm run build

# Copiar website para raiz
cp website/index.html .
cp website/styles.css .
cp website/script.js .
cp website/.htaccess .

# Copiar tour 360 para subpasta
mkdir -p tour360
cp -r dist/* tour360/
cp -r public tour360/

# Verificar estrutura
ls -la
```

---

### **PASSO 5: Atualizar a URL do Tour**

```bash
# Editar o script.js para apontar para seu domínio
nano script.js

# Procure por esta linha:
# const tourUrl = isDevelopment 
#     ? 'http://localhost:5173/' 
#     : 'https://seu-dominio.com/tour360/';

# Mude para seu domínio real:
# const tourUrl = isDevelopment 
#     ? 'http://localhost:5173/' 
#     : 'https://corsatube360.com.br/tour360/';

# Salve: Ctrl+O, Enter, Ctrl+X
```

---

### **PASSO 6: Verificar Permissões**

```bash
# Dar permissão de leitura para tudo
chmod -R 755 .

# Dar permissão de leitura/escrita para pastas específicas se necessário
chmod -R 755 tour360
chmod -R 755 public_html
```

---

### **PASSO 7: Testar o Site**

Abra no navegador:
- `https://seu-dominio-hostgator.com/`

Se vir o website com o iframe carregando, **parabéns!** 🎉

---

## 🔄 Atualizações Futuras

Toda vez que quiser atualizar o site:

**No seu computador:**
```bash
cd c:\projetos\tour360

# Fazer suas mudanças...

# Depois:
git add .
git commit -m "Atualização: sua mensagem"
git push origin feature/nova-branch
```

**No HostGator (via SSH):**
```bash
cd ~/public_html

# Puxar as mudanças
git pull origin feature/nova-branch

# Reconstruir se alterou código
npm run build

# Copiar para raiz (se necessário)
cp website/index.html .
cp website/styles.css .
cp website/script.js .
```

---

## 🐛 Troubleshooting

### **Problema: "npm: command not found"**
```bash
# HostGator pode usar nvm, tente:
source ~/.bashrc
npm --version

# Se ainda não funcionar, converse com suporte HostGator
```

### **Problema: Imagens 360 não carregam**
```bash
# Certifique-se que public_html foi copiada para tour360/
ls -la tour360/public/

# Se vazio, copie:
cp -r public/* tour360/public/
```

### **Problema: Site em branco/erro 500**
```bash
# Checar logs do HostGator
cat ~/public_html/.htaccess

# Se vazio, copiar novamente:
cp website/.htaccess .
```

### **Problema: URL do tour 360 errada**
```bash
# Editar novamente
nano script.js

# Procure: const tourUrl = isDevelopment
# Atualize a URL de produção
# Ctrl+O, Enter, Ctrl+X para salvar
```

---

## 📞 Próximos Passos

1. **Teste em desenvolvimento:**
   ```bash
   npm run dev
   # Acesse: http://localhost:8000
   ```

2. **Faça push para GitHub:**
   ```bash
   git push origin feature/nova-branch
   ```

3. **Clone no HostGator e siga os passos acima**

4. **Atualize a URL em script.js com seu domínio real**

5. **Acesse https://seu-dominio.com e aproveite!**

---

## 💡 Dica

Se o HostGator tiver **GitHub Actions**, você pode automatizar:
- Fazer push → GitHub
- GitHub Actions executa build → Faz deploy automático

Mas por enquanto, manual funciona perfeitamente!

**Precisa de ajuda com algum passo? Avise qual!**
