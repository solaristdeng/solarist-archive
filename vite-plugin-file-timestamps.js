import { statSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

export default function fileTimestampsPlugin() {
  const virtualModuleId = 'virtual:file-timestamps';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'file-timestamps',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const postsDir = resolve(process.cwd(), 'src/posts');
        const timestamps = {};
        
        try {
          const files = readdirSync(postsDir).filter(f => f.endsWith('.md'));
          
          files.forEach(file => {
            const filePath = join(postsDir, file);
            const stats = statSync(filePath);
            const fileName = file.replace('.md', '');
            
            timestamps[fileName] = {
              // birthtime: 文件创建时间（发布时间）
              created: stats.birthtime.toISOString(),
              // mtime: 文件最后修改时间
              modified: stats.mtime.toISOString()
            };
          });
        } catch (err) {
          console.error('Error reading file timestamps:', err);
        }
        
        return `export default ${JSON.stringify(timestamps, null, 2)}`;
      }
    }
  };
}
