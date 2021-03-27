// ==UserScript==
// @name         mermaid-github
// @namespace    dana520
// @version      0.1
// @description  mermaid github support
// @author       dana520
// @require      https://unpkg.com/mermaid@8.9.2/dist/mermaid.min.js
// @require1      https://cdn.jsdelivr.net/npm/whatwg-fetch@3.6.2/dist/fetch.umd.js
// @match        *://github.com/*
// ==/UserScript==
;(function (d) {
  "use strict"

  const init = () => {
    console.log("init")
    setTimeout(() => {
      window.mermaid.init(undefined, "pre[lang=mermaid] code")
    }, 0)
  }

  const replaceState = history.replaceState

  history.replaceState = function () {
    replaceState.apply(history, arguments)
    window.dispatchEvent(new Event("replaceState"))
    window.dispatchEvent(new Event("locationchange"))
  }

  window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("locationchange"))
  })

  window.addEventListener("locationchange", function () {
    init()
  })
  init()
})(document)
