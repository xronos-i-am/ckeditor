CKEDITOR.dialog.add('code', function (editor) {
    return {
        title: 'Code',
        minWidth: 400,
        minHeight: 200,
        contents: [{
            id: 'tab1',
            label: 'First Tab',
            title: 'First Tab',
            elements: [{
                type: 'html',
                id: 'content',
                html: '<select size="1" name="chili">' +
                    '<option value="ruby">Ruby</option>' +
                    '<option value="haml">HAML</option>' +
                    '<option value="python">Python</option>' +
                    '<option value="yaml">YAML</option>' +
                    '<option value="html">HTML</option>' +
                    '<option value="php">PHP</option>' +
                    '<option value="sql">SQL</option>' +
                    '<option value="js">JavaScript</option>' +
                    '<option value="java">Java</option>' +
                    '<option value="css">CSS</option>' +
                    '</select>',
                validate: function () {
                    CKEDITOR.config.chili_val = this.getValue();
                }
            }, {
                id: 'input1',
                type: 'textarea',
                label: 'Вставьте код:',
                validate: function () {
                    if (!this.getValue()) {
                        alert('Empty Field');
                        return false;
                    }
                    var element = editor.document.createElement('pre');
                    element.setAttribute('class', 'code');
                    element.setAttribute('lang', CKEDITOR.config.chili_val);
                    element.setText(this.getValue());
                    editor.insertElement(element);
                    CKEDITOR.ENTER_BR;
                    return true;
                }
            }]
        }]
    };
});