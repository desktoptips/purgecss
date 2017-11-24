webpackJsonp([70567207989415],{396:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Purgecss is a tool to remove unused css. It can be used as part of your development workflow. Purgecss comes with a Javascript API, a CLI and plugins for popular build tools.</p>\n<p>Here are a couple of ways to use Purgecss:</p>\n<ul>\n<li><a href="#cli">CLI</a></li>\n<li>[Javascript API](#javascript-api</li>\n<li><a href="#webpack">Webpack</a></li>\n<li><a href="#gulp">Gulp</a></li>\n<li><a href="#rollup">Rollup</a></li>\n</ul>\n<h2 id="cli"><a href="#cli" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CLI</h2>\n<p>You can install the CLI in two ways. By installing purgecss globaly or using npx.</p>\n<h3 id="install-globally"><a href="#install-globally" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install globally</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>npm i -g purgecss</code></pre>\n      </div>\n<p>You can then use it with</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>purgecss --css <css> --content <content> [option]</code></pre>\n      </div>\n<h3 id="using-npx"><a href="#using-npx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using npx</h3>\n<p><a href="https://www.npmjs.com/package/npx">npx</a> allows you to run cli locally without installing the package globally.\nYou can install purgecss as a dev dependency</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>npm i -D purgecss</code></pre>\n      </div>\n<p>You can then use it with</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>npx purgecss --css <css> --content <content> [option]</code></pre>\n      </div>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>If you want to use npx, npm 5.2.0+ must be installed</p>\n</blockquote>\n<h2 id="javascript-api"><a href="#javascript-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Javascript API</h2>\n<p>Start by installing Purgecss as a development dependency.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>npm i -D purgecss</code></pre>\n      </div>\n<p>You can then use purgecss inside a javascript file.</p>\n<h3 id="es6-with-import"><a href="#es6-with-import" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES6 with import</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> Purgecss <span class="token keyword">from</span> <span class="token string">\'purgecss\'</span>\n<span class="token keyword">const</span> purgeCss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Purgecss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  content<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'**/*.html\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  css<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'**/*.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> purgecssResult <span class="token operator">=</span> purgecss<span class="token punctuation">.</span><span class="token function">purge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3 id="es5-with-require"><a href="#es5-with-require" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES5 with require</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> Purgecss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'purgecss\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> purgecss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Purgecss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  content<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'**/*.html\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  css<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'**/*.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> purgecssResult <span class="token operator">=</span> purgecss<span class="token punctuation">.</span><span class="token function">purge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2 id="webpack"><a href="#webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webpack</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> glob <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'glob\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> PurgecssPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../../\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> PATHS <span class="token operator">=</span> <span class="token punctuation">{</span>\n  src<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          fallback<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n          use<span class="token punctuation">:</span> <span class="token string">\'css-loader?sourceMap\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">\'[name].css?[hash]\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">PurgecssPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      paths<span class="token punctuation">:</span> glob<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>PATHS<span class="token punctuation">.</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/*`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      styleExtensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.css\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="gulp"><a href="#gulp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gulp</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> purgecss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp-purgecss\'</span><span class="token punctuation">)</span>\n\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'purgecss\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> gulp\n    <span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'src/**/*.css\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n      <span class="token function">purgecss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        content<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'src/**/*.html\'</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'build/css\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2 id="rollup"><a href="#rollup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rollup</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> rollup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rollup\'</span>\n<span class="token keyword">import</span> purgecss <span class="token keyword">from</span> <span class="token string">\'rollup-plugin-purgecss\'</span>\n\n<span class="token function">rollup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'main.js\'</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token function">purgecss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'index.html\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>',frontmatter:{title:"Introduction",next:"cli.html",prev:null},fields:{path:"docs/introduction.md",slug:"docs/introduction.html"}}},pathContext:{slug:"docs/introduction.html"}}}});
//# sourceMappingURL=path---docs-introduction-html-a70cea1f8e2c37194ebb.js.map