const modules = {};

const keyModules = (r => r.keys().map(key => ({
  name : key.split('/')[1],
  value : r(key).default
})))(require.context('./', true, /^\.\/((?!\/)[\s\S])+\/index\.js$/));

keyModules.forEach(item => modules[item.name] = item.value);

export default modules
