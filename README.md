<div align="center">

# 🚀 Heitor Martins — Portfólio Pessoal

**Desenvolvedor Full Stack & Sistemas**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

[🌐 Ver o site ao vivo](https://heitornmatual.onrender.com) · [📧 Contato](mailto:heitor.martins@email.com) · [💼 LinkedIn](https://linkedin.com/in/heitornm)

</div>

---

## 📋 Sobre o Projeto

Site de portfólio pessoal desenvolvido com foco em **performance**, **acessibilidade** e **experiência do usuário**. O projeto foi construído do zero com uma stack moderna, sem dependências de backend ou banco de dados — arquitetura 100% estática e otimizada para deploy na Vercel/Netlify.

O design prioriza clareza e profissionalismo, com suporte a tema claro/escuro, animações suaves e layout totalmente responsivo.

---

## ✨ Funcionalidades

- **🌙 Dark / Light Mode** — alternância de tema com detecção automática da preferência do sistema (via `prefers-color-scheme`) e persistência no `localStorage`
- **🎞️ Animações com Framer Motion** — entradas suaves por seção, efeitos hover nos cards e transições de página
- **🔍 Filtro de Projetos** — filtragem dinâmica por tecnologia/categoria na seção de projetos, sem recarregamento de página
- **📅 Timeline de Experiência** — visualização cronológica interativa das experiências profissionais
- **📬 Formulário de Contato** — validação client-side com React Hook Form + Zod, com feedback visual de erro e sucesso
- **📱 Layout Responsivo** — mobile-first, adaptado para smartphones, tablets e desktops
- **⚡ Performance otimizada** — build estático com Vite, sem servidor Node em produção

---

## 🛠️ Stack Tecnológica

### Core
| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev) | 18 | Biblioteca de UI |
| [TypeScript](https://typescriptlang.org) | 5 | Tipagem estática |
| [Vite](https://vitejs.dev) | 5 | Build tool e dev server |
| [Wouter](https://github.com/molefrog/wouter) | — | Roteamento leve (sem React Router) |

### Estilo & UI
| Tecnologia | Finalidade |
|---|---|
| [Tailwind CSS](https://tailwindcss.com) | Utilitários de estilo |
| [shadcn/ui](https://ui.shadcn.com) | Componentes acessíveis prontos |
| [Radix UI](https://radix-ui.com) | Primitivos de UI acessíveis |
| [Lucide React](https://lucide.dev) | Ícones SVG modernos |
| [Font Awesome](https://fontawesome.com) | Ícones adicionais |

### Animações & Formulários
| Tecnologia | Finalidade |
|---|---|
| [Framer Motion](https://framer.com/motion) | Animações declarativas |
| [React Hook Form](https://react-hook-form.com) | Gerenciamento de formulários performático |
| [Zod](https://zod.dev) | Validação de schemas tipada |

---

## 📁 Estrutura do Projeto

```
HeitorModern/
├── client/
│   ├── index.html                  # Template HTML com meta tags SEO completas
│   └── src/
│       ├── components/
│       │   ├── ui/                 # Componentes shadcn/ui (apenas os utilizados)
│       │   ├── hero-section.tsx    # Seção principal com apresentação
│       │   ├── about-section.tsx   # Sobre mim
│       │   ├── experience-section.tsx  # Timeline de experiências
│       │   ├── education-section.tsx   # Formação acadêmica
│       │   ├── skills-section.tsx      # Habilidades técnicas
│       │   ├── projetos-section.tsx    # Projetos com filtro dinâmico
│       │   ├── ProjectCard.tsx         # Card individual de projeto
│       │   ├── contact-section.tsx     # Formulário de contato
│       │   ├── navigation.tsx          # Navbar responsiva
│       │   ├── footer.tsx              # Rodapé
│       │   └── theme-provider.tsx      # Contexto de tema claro/escuro
│       ├── hooks/
│       │   ├── use-mobile.tsx      # Detecta viewport mobile
│       │   ├── use-theme.tsx       # Hook de tema claro/escuro
│       │   └── use-toast.ts        # Hook de notificações toast
│       ├── lib/
│       │   ├── smooth-scroll.ts    # Utilitário de scroll suave
│       │   └── utils.ts            # Funções auxiliares (cn, etc.)
│       ├── pages/
│       │   ├── home.tsx            # Página principal
│       │   └── not-found.tsx       # Página 404
│       ├── App.tsx                 # Roteamento principal
│       ├── index.css               # Estilos globais e variáveis CSS
│       └── main.tsx                # Entry point da aplicação
├── components.json                 # Configuração do shadcn/ui
├── tailwind.config.ts              # Configuração do Tailwind
├── tsconfig.json                   # Configuração do TypeScript
└── vite.config.ts                  # Configuração do Vite
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/heitornm/HeitorModern.git
cd HeitorModern

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

### Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `client/dist/`.

---

## 🌐 Deploy

O projeto é configurado para deploy estático — sem necessidade de servidor Node.js em produção.

### Vercel (recomendado)

```bash
# Via Vercel CLI
npm i -g vercel
vercel
```

Ou conecte o repositório diretamente no [painel da Vercel](https://vercel.com/new).

**Configurações de build:**
```
Build Command:  npm run build
Output Dir:     client/dist
Install Command: npm install
```

### Netlify

```bash
# Via Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=client/dist
```

---

## 🎨 Seções do Portfólio

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com nome, cargo, links de contato e call-to-actions |
| **Sobre Mim** | Resumo pessoal e profissional |
| **Experiência** | Timeline interativa de experiências profissionais |
| **Educação** | Formação acadêmica e certificações |
| **Habilidades** | Competências técnicas organizadas por categoria |
| **Projetos** | Cards com filtro por tecnologia e links para GitHub/demo |
| **Contato** | Formulário validado com React Hook Form + Zod |

---

## 📈 SEO & Performance

- Meta tags completas (Open Graph, Twitter Card, Schema.org JSON-LD)
- URL canônica configurada
- Fonte carregada com `preconnect` para reduzir latência
- Font Awesome carregado de forma não-bloqueante (`media="print"`)
- Build estático — sem cold start de servidor

---

## 📄 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ por Heitor Martins**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-heitornm-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/heitornm)
[![GitHub](https://img.shields.io/badge/GitHub-heitornm-181717?style=flat-square&logo=github)](https://github.com/heitornm)

</div>
