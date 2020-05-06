const resolveDeps = require('snyk-resolve-deps');
const asTree = require('snyk-tree');

const options = { dev: true };

resolveDeps(process.cwd(), options).then(function (tree) {
  console.log(asTree(tree));
});
