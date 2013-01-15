CKEditor Plugin Backup
=============
With any change in the text of the plugin automatically saves in browser storage all text marked time. Also in the status bar of the browser plug-in creates a drop-down list where you can select from the history of edits the text. This story will not be removed even when the browser is closed emergency, including Force majeure situation as BSOD or blackout
Install
------------
Create folder `ckeditor/plugins/backup` and unpack archive to 

File `ckeditor/config.js`

	CKEDITOR.editorConfig = function( config ){
		config.extraPlugins = 'backup,onchange'; // add plugin
	};
	
Required
------------
Plugin [onchange][onchange]

1. [Demo][demo]
2. [Author][author]
3. [more ckeditor Plugins][more]
[demo]: http://xdan.ru/project/ckplugins/#demo_backup
[author]: http://xdan.ru/user/profile/Leroy
[more]: http://xdan.ru/project/ckplugins/
[onchange]: https://github.com/xdan/ck_onchange