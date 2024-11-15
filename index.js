document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        header: false,
        editable: false,
        selectable: false,
        eventClick: function (info) {
            info.jsEvent.preventDefault();
        },
        eventOverlap: false
    });

    AOS.init();

    // Carica Monaco Editor
    require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor/min/vs' } });

    require(['vs/editor/editor.main'], function () {
        const editor = monaco.editor.create(document.getElementById('editor'), {
            value: '',
            language: 'javascript',
            theme: 'vs-dark',
        });

        // Funzione per simulare la digitazione
        function typeCode(code, delay = 100, callback) {
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
                } else if (index === code.length) {
                    callback?.();
                }
            }

            type();
        }

        const codeSnippet = `await schedly.createEntity();`;

        typeCode(codeSnippet, 50, () => {
            calendar.render();
        });
    });





    // setTimeout(() => {
    //     calendar.addEvent({
    //         title: 'dynamic event',
    //         start: '2024-11-30',
    //         allDay: true
    //     });
    // }, 1000)
});