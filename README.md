# htm-preact • Agify

The idea for this project is to create a modern web app without using any bundler or other form of build process to develop the app. Only use native ES6 feature that are available in all major browsers. **It's mostly an experiment and I do not recommend this approach for production apps**.

> htm is JSX-like syntax in plain JavaScript - no transpiler necessary.
>
> Develop with React/Preact directly in the browser, then compile htm away for production.
>
> It uses standard JavaScript Tagged Templates and works in all modern browsers.

## Run

You only need a static file serve to serve the `index.html` and the JS modules.

Either use the [VSCode Live Preview extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) or run something yourself:

```
npx serve
```

## Resources

- [HTM](https://github.com/developit/htm)
- [Preact](https://preactjs.com/)

### Articles

- [Building a TODO app without a bundler](https://dev.to/ekeijl/no-build-todo-app-using-htm-preact-209p)

## Comparison

Let's compare the app implemented in this repository to something like a React app bundled with Webpack and Babel.

**Pros**

- Zero build time!
- No build configuration to manage.
- No difference between environments: `development === production`.
- No transpiler. Uses native [ES6 features](http://kangax.github.io/compat-table/es6/) out of the box.
- Automatic lazy-loading modules.

**Cons**

- Slightly more boilerplate than pure JSX. Babel can do some heavy lifting for us and transpile JSX to good old function calls. But we don't have Babel, so we need to do some manual work to achieve a similar DX. This mainly boils down to calling the `htm` function with template strings.
- No tree-shaking. The JS engine cannot statically analyze the contents of a plain object, which means it cannot do some optimizations for static `import` performance.
- No minification. JS could be optimized by removing whitespace and renaming variables.
- Using a third-party service for delivering your modules is a bit of a risk, same as every CDN.
- No new JS language features (ES7+) unless you use polyfills or wait for browser support.
- No TypeScript or PropType validation (React), best we can do is write JSDoc and depend on intellisense of you IDE.
- It's harder to build a Progressive Web App, specifically enabling offline functionality, because we need to list all [urls of cached resources](https://web.dev/learn/pwa/caching/#caching-assets-in-a-service-worker) as a static list. Webpack can automatically generate this for you.
