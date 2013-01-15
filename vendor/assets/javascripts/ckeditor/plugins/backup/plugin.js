CKEDITOR.plugins.add( 'backup',{
	init:function(editor){
		editor.on( 'instanceReady', function(e) { 
			var div = document.createElement('div'),
				style =  'display:inline-block; margin-left:10px;position:relative;margin-top:5px;overflow:hidden;float:right;',
				bname =  'backup_'+editor.name, init = true, oldtext = '';
			div.setAttribute('style',style);
			if( localStorage.getItem( bname) == undefined )
				localStorage.setItem( bname,'{}'); // создаем наше хранилище
			var format = function(_time){
				var n = new Date(parseInt(_time));
				var frm = function(dd){
					if ( dd < 10 ) dd = '0' + dd;
					return dd;
				};
				return n.getHours()+'.'+frm(n.getMinutes())+'.'+frm(n.getSeconds());
			};
			editor.backup = function(del){
				var chages = false,now = new Date().getTime(),bu = {};
				if(del!='del'){
					var text = editor.getSnapshot();
					if( text!='' ){
						if( localStorage.getItem( bname) && oldtext && text!=oldtext ){
							bu = JSON.parse(localStorage.getItem( bname));
							bu[now] = text;
							localStorage.setItem( bname,JSON.stringify(bu));
							chages = true;
						}
					}
				}else{
					if( confirm('Вы уверены, что хотите удалить весь бекап?') ){
						localStorage.setItem( bname,'{}');
						chages = true;
					}
				}
				if( chages || init){
					if(init&&localStorage.getItem( bname)){
						bu = JSON.parse(localStorage.getItem( bname));
					}
					var opt = '<option>---</option>';
					for(var r in bu)
						opt+='<option value="'+r+'">'+format(r)+'</option>';
					document.getElementById('backuper_'+editor.name).innerHTML = opt;
					init = false;
				}
				oldtext = text;
			},
			editor.restore = function(){
				var text = editor.getSnapshot();
				var val = document.getElementById('backuper_'+editor.name).value;
				var bu = JSON.parse( localStorage.getItem( bname) );
				if( bu[val]!=undefined && (text==''||confirm('Вы уверены, что хотите заменить имеющийся текст, текстом из бекапа?')) ){
					editor.loadSnapshot( bu[val] );
				}
			};
			editor.on( 'change',editor.backup);
			div.innerHTML = '<select style="margin-top:-5px;" id="backuper_'+editor.name+'"></select>&nbsp;<input type="image" value="del" onclick="CKEDITOR.instances[\''+editor.name+'\'].backup(\'del\'); return false;" src="'+CKEDITOR.basePath+'plugins/backup/clear.png"/>';
			document.getElementById( 'cke_bottom_'+editor.name ).appendChild(div);
			document.getElementById('backuper_'+editor.name).onchange = editor.restore;
			editor.backup();
		});
	}
});