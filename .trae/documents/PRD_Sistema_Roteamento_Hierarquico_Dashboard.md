# Documento de Requisitos do Produto - Sistema de Roteamento Hierárquico Dashboard

## 1. Visão Geral do Produto

Implementação de um sistema de roteamento hierárquico para o Dashboard, convertendo as abas existentes em sub-rotas navegáveis. O sistema manterá toda a funcionalidade atual enquanto adiciona navegação por URL, permitindo deep links e melhor experiência do usuário.

- **Objetivo Principal:** Transformar o sistema de abas atual em rotas navegáveis sem perder funcionalidades existentes
- **Valor de Mercado:** Melhora significativa na experiência do usuário e SEO, permitindo compartilhamento direto de seções específicas

## 2. Funcionalidades Principais

### 2.1 Papéis de Usuário

| Papel | Método de Acesso | Permissões Principais |
|-------|------------------|----------------------|
| Administrador | Login autenticado | Acesso completo a todas as sub-rotas do dashboard |

### 2.2 Módulo de Funcionalidades

O sistema de roteamento hierárquico consiste nas seguintes páginas principais:

1. **Dashboard Layout**: container principal, navegação entre seções, header comum
2. **Corridas**: gerenciamento de corridas, formulário de criação, listagem
3. **Calendário**: eventos do calendário, criação de eventos, visualização
4. **Redes Sociais**: links de redes sociais, configuração de ícones, gerenciamento
5. **Outros**: conteúdos diversos, links externos, materiais adicionais
6. **Background**: upload e gerenciamento de imagens de fundo (desktop apenas)

### 2.3 Detalhes das Páginas

| Nome da Página | Nome do Módulo | Descrição da Funcionalidade |
|----------------|----------------|----------------------------|
| Dashboard Layout | Container Principal | Renderizar layout comum, navegação entre abas, header com logout |
| Corridas | Gerenciamento de Corridas | Criar, editar, excluir e visualizar corridas. Formulário com preview em tempo real |
| Calendário | Eventos do Calendário | Adicionar eventos ao calendário, gerenciar datas, configurar distâncias |
| Redes Sociais | Links Sociais | Configurar links para redes sociais, escolher ícones, organizar por seções |
| Outros | Conteúdos Diversos | Gerenciar links externos e conteúdos adicionais não categorizados |
| Background | Imagens de Fundo | Upload e configuração de imagens de fundo para desktop e mobile |

## 3. Processo Principal

### Fluxo do Administrador

O administrador acessa o dashboard através de login autenticado e navega entre as diferentes seções usando URLs específicas. Cada seção mantém seu estado independente e permite operações CRUD completas.

```mermaid
graph TD
    A[Login] --> B[/dashboard]
    B --> C[/dashboard/corridas]
    B --> D[/dashboard/calendario]
    B --> E[/dashboard/rede-sociais]
    B --> F[/dashboard/outros]
    B --> G[/dashboard/background]
    
    C --> H[Criar/Editar Corrida]
    D --> I[Criar/Editar Evento]
    E --> J[Configurar Redes Sociais]
    F --> K[Gerenciar Outros Conteúdos]
    G --> L[Upload Background]
    
    H --> C
    I --> D
    J --> E
    K --> F
    L --> G
```

## 4. Design da Interface do Usuário

### 4.1 Estilo de Design

- **Cores Primárias:** Manter o esquema atual (dark theme)
- **Estilo dos Botões:** Rounded, com sombras suaves
- **Fonte:** Sistema atual (sans-serif)
- **Layout:** Card-based com navegação por abas convertida em links
- **Ícones:** Lucide React icons para consistência

### 4.2 Visão Geral do Design das Páginas

| Nome da Página | Nome do Módulo | Elementos da UI |
|----------------|----------------|-----------------|
| Dashboard Layout | Navegação Principal | Header fixo, TabsList convertida em navegação, container responsivo |
| Corridas | Formulário de Corridas | Grid responsivo, preview em tempo real, cards para listagem |
| Calendário | Eventos | Formulário inline, seleção de distâncias, cards organizados por data |
| Redes Sociais | Links Sociais | Grid de 2 colunas, ícones coloridos, formulário de criação |
| Outros | Conteúdos Diversos | Lista simples, formulário básico, links externos |
| Background | Upload de Imagens | Interface de upload, preview de imagens, seleção desktop/mobile |

### 4.3 Responsividade

O sistema é desktop-first com adaptação mobile. Em dispositivos móveis, a aba "Background" é ocultada automaticamente. A navegação se adapta para 4 colunas em mobile e 5 em desktop.

## 5. Requisitos Técnicos

### 5.1 Mapeamento de Rotas

- `/dashboard` → Redireciona para `/dashboard/corridas`
- `/dashboard/corridas` → Seção de gerenciamento de corridas
- `/dashboard/calendario` → Seção de eventos do calendário  
- `/dashboard/rede-sociais` → Seção de redes sociais
- `/dashboard/outros` → Seção de outros conteúdos
- `/dashboard/background` → Seção de background (desktop apenas)

### 5.2 Compatibilidade

- Manter React Router atual
- Preservar todos os hooks existentes
- Manter componentes de UI atuais
- Garantir funcionamento em mobile e desktop
- Preservar autenticação via ProtectedRoute

### 5.3 Migração de Estado

- Converter `activeSection` state para URL-based navigation
- Manter todos os estados locais de formulários
- Preservar funcionalidades de CRUD existentes
- Garantir que deep links funcionem corretamente