document.addEventListener('DOMContentLoaded', async () => {
    const date = new Date(); // 1 Novembre 2024
    date.setDate(10);
    date.setHours(10, 0, 0, 0);

    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        header: false,
        editable: false,
        selectable: false,
        initialDate: '2024-11-01',
        eventClick: function (info) {
            info.jsEvent.preventDefault();
        },
        eventOverlap: false
    });

    AOS.init();

    // Carica Monaco Editor
    require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor/min/vs' } });

    require(['vs/editor/editor.main'], async function () {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
        });

        const editor = monaco.editor.create(document.getElementById('editor'), {
            value: '',
            language: 'javascript',
            theme: 'vs-dark',
            minimap: {
                enabled: false, // Disabilita la minimappa
            },
            overviewRulerLanes: 0, // Disabilita l'overview ruler,
        });

        calendar.render();

        await appendCode(editor, `const { calendarId } = await schedly.createEntity();`, 25);

        await appendCode(editor, `\n\n`);

        // whitelist cronExpression
        await appendCode(editor, `schedly.addException({
    cronExpression: "*/30 16-18 * * 2-6",
    type: "whitelist",
    calendarId
});`, 15, () => {
            calendar.addEvent({
                start: '2024-11-01',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-02',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-05',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-06',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-07',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-08',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-09',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-12',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-13',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-14',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-15',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-16',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-19',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-20',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-21',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-22',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-23',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-26',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-27',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-28',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-29',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-30',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });
        });

        await appendCode(editor, `\n\n`);

        // blacklist cronExpression
        await appendCode(editor, `schedly.addException({
    cronExpression: "* * * * 0-2",
    type: "blacklist",
    calendarId
});`, 20, () => {
            calendar.addEvent({
                start: '2024-11-03',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-04',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });

            calendar.addEvent({
                id: '1',
                start: '2024-11-10',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-11',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-17',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-18',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-24',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });

            calendar.addEvent({
                start: '2024-11-25',
                display: 'background',
                color: '#cf021a',
                allDay: true
            });
        }
        );

        await appendCode(editor, `\n\n`);

        // whitelist specific date
        await appendCode(editor, `schedly.addException({
    date: "${date.toISOString()}",
    type: "whitelist",
    calendarId
});`, 25, () => {
            // Rimuovere un evento specifico dopo la creazione
            const event = calendar.getEventById('1'); // Trova l'evento con ID "1"

            if (event) {
                event.remove(); // Rimuove l'evento dal calendario
            }

            calendar.addEvent({
                start: '2024-11-10',
                display: 'background',
                color: 'darkseagreen',
                allDay: true
            });
        });

        await appendCode(editor, `\n\n`);

        // schedule event
        await appendCode(editor, `schedly.addEvent({
    calendarId,
    reservationDate: "${date.toISOString()}",
    metadata: {
        description: 'Follow-up',
        customerName: 'Claudio',
        customerSurname: 'Cortese',
    }
});`, 15, () => {
            // Rimuovere un evento specifico dopo la creazione
            const event = calendar.getEventById('1'); // Trova l'evento con ID "1"

            if (event) {
                event.remove(); // Rimuove l'evento dal calendario
            }

            calendar.addEvent({
                start: '2024-11-10',
                color: 'white',
                title: 'Follow-up'
            });
        });
    });
});

// Funzione per simulare la digitazione
function appendCode(editor, code, delay = 30, callback = null) {
    return new Promise((resolve) => {
        let index = 0;
        const model = editor.getModel();

        function type() {
            if (index < code.length) {
                const lastLine = model.getLineCount();
                const lastColumn = model.getLineContent(lastLine).length + 1;
                const position = { lineNumber: lastLine, column: lastColumn };

                const nextChar = code[index];
                editor.executeEdits('', [{
                    range: new monaco.Range(
                        position.lineNumber,
                        position.column,
                        position.lineNumber,
                        position.column
                    ),
                    text: nextChar,
                    forceMoveMarkers: true
                }]);

                index++;
                setTimeout(type, delay);
                // Scroll automatico alla fine
                const newPosition = editor.getPosition(); // Ottieni la nuova posizione del cursore
                editor.revealLine(newPosition.lineNumber); // Scrolla alla riga corrente
            } else {
                callback?.(); // Esegui la callback, se fornita
                resolve(); // Risolvi la Promise
            }
        }

        type();
    });
}