document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    // Carica Monaco Editor
    require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        const editor = monaco.editor.create(document.getElementById('editor-container'), {
            value: '',
            language: 'javascript',
            theme: 'vs-dark',
        });

        // Funzione per simulare la digitazione
        function typeCode(code, delay = 100) {
            let index = 0;
            function type() {
                if (index < code.length) {
                    editor.executeEdits('', [{
                        range: editor.getModel().getFullModelRange(),
                        text: code.slice(0, index + 1),
                        forceMoveMarkers: true
                    }]);
                    index++;
                    setTimeout(type, delay);
                }
            }
            type();
        }

        const codeSnippet = `function example() {\n  console.log('Hello, Monaco!');\n}`;
        typeCode(codeSnippet, 150);
    })
});