// ==UserScript==
// @name         mermaid-github
// @namespace    dana520
// @version      0.1
// @description  mermaid github support
// @author       dana520
// @require      https://unpkg.com/mermaid@8.9.2/dist/mermaid.min.js
// @grant        window.onurlchange
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

  window.addEventListener("urlchange", function () {
    init()
  })
  init()
})(document)
