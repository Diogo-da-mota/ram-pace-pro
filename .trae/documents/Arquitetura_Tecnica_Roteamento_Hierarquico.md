# Documento de Arquitetura Técnica - Sistema de Roteamento Hierárquico Dashboard

## 1. Arquitetura de Design

```mermaid
graph TD
    A[User Browser] --> B[React Router]
    B --> C[DashboardLayout Component]
    C --> D[Dashboard Sub-Routes]
    
    subgraph "Frontend Layer"
        B
        C
        D
    end
    
    subgraph "Dashboard Sub-Routes"
        E[CorridasPage]
        F[CalendarioPage]
        G[RedesSociaisPage]
        H[OutrosPage]
        I[BackgroundPage]
    end
    
    subgraph "Shared Components"
        J[Existing Dashboard Logic]
        K[Hooks & State Management]
        L[UI Components]
    end
    
    D --> E
    D --> F
    D --> G
    D --> H
    D --> I
    
    E --> J
    F --> J
    G --> J
    H --> J
    I --> J
    
    J --> K
    J --> L
```

## 2. Descrição da Tecnologia

- **Frontend:** React@18 + React Router@6 + TypeScript + Tailwind CSS + Vite
- **Backend:** Supabase (mantém configuração atual)
- **Autenticação:** Supabase Auth (via ProtectedRoute)

## 3. Definições de Rotas

| Rota | Propósito |
|------|-----------|
| `/dashboard` | Layout principal, redireciona para `/dashboard/corridas` |
| `/dashboard/corridas` | Página de gerenciamento de corridas |
| `/dashboard/calendario` | Página de eventos do calendário |
| `/dashboard/rede-sociais` | Página de configuração de redes sociais |
| `/dashboard/outros` | Página de outros conteúdos |
| `/dashboard/background` | Página de upload de backgrounds (desktop apenas) |

## 4. Definições de API

### 4.1 APIs Principais

O sistema mantém todas as APIs existentes sem modificações:

**Corridas**
```typescript
// Hooks existentes mantidos
const { loading, criarCorrida, editarCorrida, excluirCorrida, buscarCorridas, toggleVisibilidade } = useCorridas();
```

**Calendário**
```typescript
// Hooks existentes mantidos  
const { loading, criarEvento, editarEvento, excluirEvento, buscarEventos } = useCalendario();
```

**Redes Sociais**
```typescript
// Hooks existentes mantidos
const { loading, criarRedeSocial, editarRedeSocial, excluirRedeSocial, buscarRedesSociais } = useRedesSociais();
```

**Outros**
```typescript
// Hooks existentes mantidos
const { loading, criarOutro, editarOutro, excluirOutro, buscarOutros } = useOutros();
```

## 5. Arquitetura do Servidor

```mermaid
graph TD
    A[React Router] --> B[Route Protection Layer]
    B --> C[DashboardLayout Container]
    C --> D[Page Components]
    
    subgraph "Component Layer"
        D
        E[Shared Dashboard Logic]
        F[Form Components]
        G[List Components]
    end
    
    subgraph "Hook Layer"
        H[useCorridas]
        I[useCalendario] 
        J[useRedesSociais]
        K[useOutros]
        L[useAuthSession]
    end
    
    subgraph "Service Layer"
        M[Supabase Client]
    end
    
    D --> E
    E --> F
    E --> G
    F --> H
    F --> I
    F --> J
    F --> K
    G --> H
    G --> I
    G --> J
    G --> K
    
    H --> M
    I --> M
    J --> M
    K --> M
    L --> M
```

## 6. Modelo de Dados

### 6.1 Definição do Modelo de Dados

O sistema mantém todos os modelos de dados existentes sem alterações:

```mermaid
erDiagram
    CORRIDAS ||--o{ CORRIDA_DATA : contains
    EVENTOS ||--o{ EVENTO_DATA : contains
    REDES_SOCIAIS ||--o{ REDE_SOCIAL_DATA : contains
    OUTROS ||--o{ OUTRO_DATA : contains
    BACKGROUND_CONFIGS ||--o{ BACKGROUND_CONFIG : contains

    CORRIDA_DATA {
        string id PK
        string titulo
        string data_evento
        string local
        string imagem_principal
        string link_externo
        string texto_rodape
        string descricao
        boolean visivel
        timestamp created_at
        timestamp updated_at
    }
    
    EVENTO_DATA {
        string id PK
        string titulo
        string data_evento
        string local
        string regiao
        array distancias
        string link_externo
        timestamp created_at
        timestamp updated_at
    }
    
    REDE_SOCIAL_DATA {
        string id PK
        string titulo
        string link
        string icone
        string titulo_secao
        timestamp created_at
        timestamp updated_at
    }
    
    OUTRO_DATA {
        string id PK
        string titulo
        string link_externo
        timestamp created_at
        timestamp updated_at
    }
    
    BACKGROUND_CONFIG {
        string id PK
        string url
        string tipo
        timestamp created_at
        timestamp updated_at
    }
```

### 6.2 Linguagem de Definição de Dados

O sistema mantém todas as tabelas existentes do Supabase sem modificações. Não são necessárias alterações no banco de dados para implementar o roteamento hierárquico.

## 7. Implementação Técnica

### 7.1 Estrutura de Componentes

```typescript
// Novo componente DashboardLayout
interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Componentes de página extraídos do Dashboard atual
interface CorridasPageProps {}
interface CalendarioPageProps {}
interface RedesSociaisPageProps {}
interface OutrosPageProps {}
interface BackgroundPageProps {}
```

### 7.2 Configuração de Rotas

```typescript
// App.tsx - Nova configuração de rotas
<Route path="/dashboard" element={
  <ProtectedRoute>
    <DashboardLayout />
  </ProtectedRoute>
}>
  <Route index element={<Navigate to="/dashboard/corridas" replace />} />
  <Route path="corridas" element={<CorridasPage />} />
  <Route path="calendario" element={<CalendarioPage />} />
  <Route path="rede-sociais" element={<RedesSociaisPage />} />
  <Route path="outros" element={<OutrosPage />} />
  <Route path="background" element={<BackgroundPage />} />
</Route>
```

### 7.3 Migração de Estado

```typescript
// Substituir activeSection state por useLocation
const location = useLocation();
const currentSection = location.pathname.split('/').pop() || 'corridas';

// Navegação via React Router
const navigate = useNavigate();
const handleSectionChange = (section: string) => {
  navigate(`/dashboard/${section}`);
};
```

## 8. Plano de Implementação

### 8.1 Fase 1: Preparação
1. Criar componente `DashboardLayout`
2. Extrair lógica de cada seção em componentes separados
3. Configurar novas rotas no `App.tsx`

### 8.2 Fase 2: Migração
1. Substituir sistema de abas por navegação baseada em URL
2. Migrar estado `activeSection` para `useLocation`
3. Atualizar navegação para usar `useNavigate`

### 8.3 Fase 3: Testes
1. Verificar funcionamento de todas as sub-rotas
2. Testar deep links e navegação direta
3. Validar responsividade em mobile
4. Confirmar preservação de funcionalidades existentes

### 8.4 Fase 4: Otimização
1. Implementar lazy loading se necessário
2. Adicionar breadcrumbs se desejado
3. Otimizar performance de navegação