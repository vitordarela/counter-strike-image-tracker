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

5. Configure o projeto:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: `echo 'Build completed'`
   - **Output Directory**: public

6. Clique em "Deploy"

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
├── api/
│   └── list.js            # Serverless function para listar imagens
├── public/
│   └── index.html         # Interface web para visualizar imagens
├── static/
│   └── panorama/
│       └── images/
│           └── econ/      # Imagens do CS2 (servidas estaticamente)
├── vercel.json            # Configuração do Vercel
└── package.json
```

## 📦 Funcionalidades

- ✅ Visualização de imagens organizadas por categoria
- ✅ Interface moderna e responsiva
- ✅ Modal para visualizar imagens em tamanho maior
- ✅ Cache otimizado para performance
- ✅ Imagens servidas estaticamente (super rápido!)
- ✅ API serverless apenas para listar/indexar
- ✅ Lazy loading de imagens
- ✅ CORS habilitado para uso externo

## 🎮 Categorias Disponíveis

- Characters
- Default Generated
- Music Kits
- Patches
- Season Icons
- Set Icons
- Status Icons
- Stickers
- Tools
- Weapons
- Weapon Cases
- Tournaments
- Premier Seasons
- Keychains

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar localmente com Vercel Dev
npm run dev
```

Acesse: http://localhost:3000

## 📝 Notas

- As imagens são servidas **estaticamente** diretamente da pasta `static/` (não passam por serverless function)
- Apenas a listagem de imagens usa Vercel Serverless Functions (`/api/list`)
- Imagens são cacheadas por 1 ano para melhor performance
- A interface é totalmente responsiva
- CORS habilitado, permitindo que as imagens sejam acessadas de qualquer origem

## 🔗 Acessando Imagens Diretamente

Você pode acessar qualquer imagem diretamente via URL:

```
https://seu-dominio.vercel.app/static/panorama/images/econ/weapon_cases/crate_esl14_promo_de_overpass_png.png
```

Ou via API para listar imagens:

```
GET /api/list - Lista todas as categorias
GET /api/list?category=stickers - Lista todas as imagens de uma categoria
```

## 🔧 Scripts Originais

Os scripts originais para baixar imagens do Steam ainda estão disponíveis:

- `index.js` - Download de imagens do Steam
- `images.js` - Processamento de imagens
- `extract-thumbnails.js` - Extração de thumbnails
- `cleanup-images.js` - Limpeza de imagens

## 📄 Licença

Veja o arquivo LICENSE para mais detalhes.

