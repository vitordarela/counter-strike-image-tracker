# Counter-Strike Image Tracker

Este projeto hospeda e visualiza imagens do Counter-Strike 2 extraídas dos arquivos do jogo.

## 🚀 Deploy no Vercel

### Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- [Vercel CLI](https://vercel.com/cli) instalado (opcional)

### Passos para Deploy

#### Opção 1: Deploy via Interface Web do Vercel

1. Faça commit de todas as alterações:
```bash
git add .
git commit -m "Preparar para deploy no Vercel"
git push
```

2. Acesse [vercel.com](https://vercel.com) e faça login

3. Clique em "Add New Project"

4. Importe seu repositório do GitHub

5. Clique em "Deploy"

#### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel
```

## 🌐 Estrutura do Projeto

```
counter-strike-image-tracker/
├── public/
│   ├── index.html             # Interface web (100% estática)
│   └── static/
│       ├── images_inventory.json  # Mapeamento de imagens do inventário
│       ├── images_market.json     # Mapeamento de imagens do market
│       └── panorama/
│           └── images/
│               └── econ/          # Imagens do CS2 (servidas estaticamente)
├── vercel.json                    # Configuração do Vercel
└── package.json
```

## 📦 Funcionalidades

- ✅ Visualização de imagens organizadas por tipo (Inventário/Market)
- ✅ Interface moderna e responsiva
- ✅ Busca em tempo real
- ✅ Modal para visualizar imagens em tamanho maior
- ✅ Cache otimizado para performance
- ✅ 100% estático - sem serverless functions
- ✅ Lazy loading de imagens
- ✅ CORS habilitado para uso externo
- ✅ Fallback para imagens indisponíveis

## 🎮 Fontes de Dados

### Inventário (`images_inventory.json`)
Mapeia nomes técnicos de itens para URLs da CDN do Steam:
```json
{
  "econ/characters/customplayer_ctm_diver_varianta": "https://community.akamai.steamstatic.com/economy/image/..."
}
```

### Market (`images_market.json`)
Mapeia nomes de itens do mercado para URLs da CDN:
```json
{
  "AK-47 | Aquamarine Revenge (Factory New)": "https://community.akamai.steamstatic.com/economy/image/..."
}
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar localmente com Vercel Dev
npm run dev
```

Acesse: http://localhost:3000

## 📝 Notas

- **Sem API serverless**: Tudo é servido estaticamente para evitar limites de tamanho
- As imagens da pasta `public/static/panorama/` são servidas diretamente pelo CDN do Vercel
- Os JSONs (`images_inventory.json` e `images_market.json`) apontam para a CDN do Steam
- Imagens são cacheadas por 1 ano para melhor performance
- A interface é totalmente responsiva
- CORS habilitado, permitindo acesso de qualquer origem
- **Importante**: A pasta `static/` deve estar dentro de `public/` para o Vercel servi-la automaticamente

## 🔗 Acessando Recursos

### Imagens Locais
```
https://seu-dominio.vercel.app/static/panorama/images/econ/weapon_cases/crate_esl14_promo_de_overpass_png.png
```

### JSONs de Mapeamento
```
https://seu-dominio.vercel.app/static/images_inventory.json
https://seu-dominio.vercel.app/static/images_market.json
```

## 🔧 Scripts Originais

Os scripts originais para baixar imagens do Steam ainda estão disponíveis:

- `index.js` - Download de imagens do Steam
- `images.js` - Processamento de imagens
- `extract-thumbnails.js` - Extração de thumbnails
- `cleanup-images.js` - Limpeza de imagens

## 📄 Licença

Veja o arquivo LICENSE para mais detalhes.


