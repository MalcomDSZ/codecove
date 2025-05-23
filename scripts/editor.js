// scripts/editor.js
import * as monaco from 'https://cdn.jsdelivr.net/npm/monaco-editor@0.34.1/+esm';

// Optional fallback for no-worker mode
self.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    return new Worker(URL.createObjectURL(new Blob([`
      self.MonacoEnvironment = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.34.1/min/' };
      importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.34.1/min/vs/base/worker/workerMain.js');
    `], { type: 'application/javascript' })));
  }
};

export function initEditor() {
  const editorContainer = document.getElementById('code-editor');
  editorContainer.innerHTML = ''; // Clear placeholder

  window.editor = monaco.editor.create(editorContainer, {
    value: `function loopFix() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}`,
    language: 'javascript',
    theme: 'vs-dark',
    fontSize: 14,
    automaticLayout: true,
    minimap: { enabled: false },
    lineNumbers: 'on'
  });
}
