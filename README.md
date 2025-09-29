# Webinar Blue Cap

**Webinar Blue Cap** é um projeto front-end desenvolvido com **Next.js**, construído com foco em **clean code**, **SOLID principles** e **arquitetura baseada em features inspirada em DDD**. O projeto é modular e escalável, com responsabilidades bem definidas e separação clara de escopos.

---

## 🏗 Estrutura do Projeto

O projeto segue uma arquitetura por **features**, garantindo isolamento e fácil manutenção.

```
src/
├── api/                    # Chamadas de API globais
├── app/                    # Roteamento
├── components/             # Componentes reutilizáveis
├── configs/                # Configurações e providers
├── constants/              # Constantes globais
├── features/               # Funcionalidades com escopo bem definido
│   ├── user-enrollments/
│   ├── webinar-details/
│   └── webinars/
│       ├── api/
│       ├── components/
│       ├── interfaces/
│       └── webinars.tsx
├── helpers/                # Funções utilitárias
├── hooks/                  # Custom hooks
└── interfaces/             # Tipagens globais
```

## ⚙️ Tecnologias Utilizadas

### Dependências

- **React 19**, **Next.js 15**
- **React Query** (`@tanstack/react-query`) para gerenciamento de estado e cache
- **Axios** para requisições HTTP
- **React Hook Form** e **Yup** para validação de formulários
- **PrimeReact**, **PrimeIcons** e **PrimeFlex** para UI
- **Day.js** para manipulação de datas
- **React Hot Toast** para notificações

## 🚀 Funcionalidades

- Sistema de cadastro e login (gerenciamento de usuários)
- Listagem de webinars
- Detalhes completos de cada webinar
- Incrição em webinars

## 📦 Estrutura por Features

Cada feature possui:

- **Components**: componentes específicos da feature
- **API**: chamadas e integração com backend
- **Interfaces**: tipagens da feature
- **Pages/TSX**: páginas ou blocos de UI específicos

Garante isolamento, escalabilidade e aderência a **SOLID**.

## 💻 Scripts Disponíveis

```bash
# Instalar dependências
yarn install

# Rodar em modo de desenvolvimento
yarn dev

# Build para produção
yarn build

# Rodar servidor de produção local
yarn start
```

## 📖 Boas Práticas Adotadas

- **Clean Code**: código legível, organizado e de fácil manutenção
- **SOLID Principles**: separação de responsabilidades, fácil testabilidade
- **DDD Inspired**: features isoladas, escopos bem definidos e modularidade
- **Responsabilidade Única**: cada módulo e componente tem função única
- **Reutilização**: componentes e hooks reutilizáveis em todo o projeto

---
