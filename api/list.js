// Vercel Serverless Function para listar imagens
import fs from 'fs';
import path from 'path';

function listFilesRecursively(dir, baseDir = dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(listFilesRecursively(filePath, baseDir));
    } else if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const relativePath = path.relative(baseDir, filePath).replace(/\\/g, '/');
      results.push(relativePath);
    }
  }

  return results;
}

export default function handler(req, res) {
  const { category } = req.query;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    const baseEconPath = path.join(process.cwd(), 'static', 'panorama', 'images', 'econ');

    // Se nenhuma categoria, retorna todas as categorias disponíveis
    if (!category) {
      const categories = fs.readdirSync(baseEconPath)
        .filter(item => {
          const itemPath = path.join(baseEconPath, item);
          return fs.statSync(itemPath).isDirectory();
        })
        .sort();
      
      return res.status(200).json({ categories });
    }

    // Se tem categoria, lista todos os arquivos dessa categoria
    const categoryPath = path.join(baseEconPath, category);
    
    if (!fs.existsSync(categoryPath)) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }

    const files = listFilesRecursively(categoryPath, categoryPath)
      .map(file => ({
        name: path.basename(file),
        path: file,
        url: `/static/panorama/images/econ/${category}/${file}`
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return res.status(200).json({ 
      category, 
      count: files.length,
      files 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Erro ao processar requisição', 
      details: error.message 
    });
  }
}

