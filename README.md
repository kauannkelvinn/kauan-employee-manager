# Kauan Systems Employee Manager

Gerencie funcionários de forma simples, com autenticação segura usando Firebase.  
CRUD completo, design responsivo e fácil de usar.

![Screenshot](./screenshotcrud.png)

## 📝 Sobre o Projeto

Este sistema foi desenvolvido para facilitar o gerenciamento de funcionários dentro de uma empresa ou equipe.  
Com ele, você pode cadastrar novos funcionários, visualizar suas informações, editar dados existentes e remover funcionários que não fazem mais parte do time. Tudo isso com segurança, pois o acesso ao sistema é protegido por autenticação via Firebase.

## 🎯 Para que serve?

- Controlar e organizar a lista de funcionários  
- Atualizar informações pessoais e profissionais facilmente  
- Facilitar a administração de recursos humanos em pequenos ou médios negócios  
- Proporcionar uma interface simples e intuitiva para gerenciar o time  

## 🚀 Como usar o site

1. Faça login com seu usuário e senha cadastrados (via Firebase Authentication).  
2. Após o login, você será direcionado ao dashboard onde pode:  
   - Visualizar todos os funcionários cadastrados  
   - Adicionar novos funcionários preenchendo o formulário de cadastro  
   - Editar dados de funcionários existentes clicando no botão de editar  
   - Excluir funcionários com confirmação para evitar exclusões acidentais  
3. Para sair do sistema, utilize o botão de logout, que pede confirmação para garantir que você não saia sem querer.  

## 📋 Funcionalidades

- ✅ Login com autenticação Firebase  
- ✅ Dashboard com CRUD de funcionários (Create, Read, Update, Delete)  
- ✅ Interface responsiva  
- ✅ Confirmação de logout e exclusão  
- ✅ Feito com React + Styled Components + Firebase

## 🚀 Como rodar localmente

```bash
# Clone o projeto
git clone https://github.com/kauannkelvinn/seu-repo-aqui.git

# Entre na pasta
cd seu-repo-aqui

# Instale as dependências
npm install

# Crie um arquivo .env com suas credenciais Firebase (exemplo .env.example)
# REACT_APP_FIREBASE_API_KEY=...
# REACT_APP_FIREBASE_AUTH_DOMAIN=...
# REACT_APP_FIREBASE_PROJECT_ID=...
# REACT_APP_FIREBASE_STORAGE_BUCKET=...
# REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
# REACT_APP_FIREBASE_APP_ID=...

# Rode o projeto
npm run dev

📄 Licença
Este projeto está licenciado sob a Licença MIT — veja o arquivo LICENSE para detalhes.

👤 Autor
Feito por @kauannkelvinn