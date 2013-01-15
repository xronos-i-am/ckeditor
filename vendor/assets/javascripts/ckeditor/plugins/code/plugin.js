(function () {
    var pluginName = 'code';
    // Регистрируем имя плагина .
    CKEDITOR.plugins.add(pluginName, {
        init: function (editor) { //Добавляем команду на нажатие кнопки
            editor.addCommand(pluginName, new CKEDITOR.dialogCommand('code'));
            //Указываем где скрипт окна диалога.
            CKEDITOR.dialog.add(pluginName, this.path + 'code/code.js');
            // Добавляем кнопочку
            editor.ui.addButton('Code', {
                label: 'Code', //Title кнопки
                command: pluginName,
                icon: this.path + 'images/code.png' //Путь к иконке
            });
        }
    });
})();