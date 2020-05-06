const resolveDeps = require('snyk-resolve-deps');
const asTree = require('snyk-tree');

const options = { dev: true };

resolveDeps(process.cwd(), options).
  then(tree => console.log(asTree(tree)).asTree).
  catch(error => {
    console.log(error.stack);
    process.exit(1);
  });

