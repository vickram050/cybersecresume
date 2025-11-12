const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..');
const ignore = ['node_modules', 'dist', '.git', 'scripts'];

function walk(dir){
  const res = [];
  for(const name of fs.readdirSync(dir)){
    if(ignore.includes(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if(stat.isDirectory()) res.push(...walk(full));
    else res.push(full);
  }
  return res;
}

function hashFile(file){
  const data = fs.readFileSync(file);
  const h = crypto.createHash('sha256').update(data).digest('hex');
  return h;
}

const files = walk(root);
const map = {};
for(const f of files){
  try{
    const h = hashFile(f);
    (map[h] ||= []).push(f);
  }catch(e){/* ignore read errors */}
}
const dupGroups = Object.values(map).filter(a => a.length>1);
console.log(JSON.stringify(dupGroups, null, 2));
