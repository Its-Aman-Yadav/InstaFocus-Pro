(async () => {
  const src = chrome.runtime.getURL("./modules/main.js");
  const contentScript = await import(src);
  contentScript.main();
})();
