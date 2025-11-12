const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'data.ts'), 'utf8');
function extractArray(name){
  const re = new RegExp(`export const ${name}:[\s\S]*?=\s*\[([\s\S]*?)\]\n`, 'm');
  const m = src.match(re);
  return m ? m[1] : '';
}
function findProjects(){
  const body = extractArray('projects');
  const entries = body.split(/\},\s*\{/) // rough split
    .map(s => s.replace(/^[\s\{\}]+|[\s\{\}]+$/g,'')).filter(Boolean);
  const titles = entries.map(e=>{
    const m = e.match(/title:\s*"([^"]+)"/);
    return m ? m[1].trim() : null;
  }).filter(Boolean);
  return dupReport('projects (title)', titles);
}
function findCerts(){
  const body = extractArray('certifications');
  const names = Array.from(body.matchAll(/name:\s*"([^"]+)"/g), m=>m[1]);
  return dupReport('certifications (name)', names);
}
function findTools(){
  const body = extractArray('tools');
  const names = Array.from(body.matchAll(/"([^"]+)"/g), m=>m[1]);
  return dupReport('tools (value)', names);
}
function findExperiences(){
  const body = extractArray('experiences');
  const roles = Array.from(body.matchAll(/role:\s*"([^"]+)"/g), m=>m[1]);
  const companies = Array.from(body.matchAll(/company:\s*"([^"]+)"/g), m=>m[1]);
  const pairs = roles.map((r,i)=>`${r} @ ${companies[i]||'?'}`);
  return dupReport('experiences (role@company)', pairs);
}
function findAchievements(){
  const body = extractArray('achievements');
  const titles = Array.from(body.matchAll(/title:\s*"([^"]+)"/g), m=>m[1]);
  return dupReport('achievements (title)', titles);
}
function dupReport(name, arr){
  const map = {};
  arr.forEach(x=>{ if(x){ map[x] = (map[x]||0)+1; }});
  const dups = Object.entries(map).filter(([k,v])=>v>1);
  return {name, total: arr.length, unique: Object.keys(map).length, duplicates: dups};
}
const results = [findProjects(), findCerts(), findTools(), findExperiences(), findAchievements()];
console.log(JSON.stringify(results, null, 2));
process.exit(0);
