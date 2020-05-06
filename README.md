This repo contains a demonstration that [snyk-resolve-deps](https://github.com/snyk/resolve-deps) can work with alias versions, for https://github.com/iandotkelly/nlf/issues/62.

You'll need a version of npm/yarn that's recent enough to understand alias versions:

https://classic.yarnpkg.com/en/docs/cli/add/#toc-yarn-add-alias

E.g. the version of npm that you get if use the version of node in checked-in [.node-version], using nvm or nodenv etc.

Then run:

```
npm install
npm test
```