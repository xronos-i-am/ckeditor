/*********************************************************************************************************/
/**
 * highslide plugin for CKEditor 3.x (Author: Lajox ; Email: lajox@19www.com)
 * CKEditor 3.x Highslide JS plugin
 * version:     1.0
 * Released: On 2009-12-11
 * Download: http://code.google.com/p/lajox
 */
/*********************************************************************************************************/

CKEDITOR.plugins.add('highslide', {
    requires: ['dialog'],
    lang: ['en', 'ru'],
    init: function (editor) {
        var b = "highslide";
        var c = editor.addCommand(b, new CKEDITOR.dialogCommand(b));
        c.modes = {wysiwyg: 1, source: 0};
        c.canUndo = false;
        editor.ui.addButton("highslide", {
            label: editor.lang.highslide.title,
            command: b,
            icon: this.path + "icon.png"
        });
        CKEDITOR.dialog.add(b, this.path + "dialogs/hs.js")
    }
});