﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){var a=1,b=2,c=4,d={id:[{type:a,name:'id'}],classid:[{type:a,name:'classid'}],codebase:[{type:a,name:'codebase'}],pluginspage:[{type:c,name:'pluginspage'}],src:[{type:b,name:'movie'},{type:c,name:'src'},{type:a,name:'data'}],name:[{type:c,name:'name'}],align:[{type:a,name:'align'}],title:[{type:a,name:'title'},{type:c,name:'title'}],'class':[{type:a,name:'class'},{type:c,name:'class'}],width:[{type:a,name:'width'},{type:c,name:'width'}],height:[{type:a,name:'height'},{type:c,name:'height'}],hSpace:[{type:a,name:'hSpace'},{type:c,name:'hSpace'}],vSpace:[{type:a,name:'vSpace'},{type:c,name:'vSpace'}],style:[{type:a,name:'style'},{type:c,name:'style'}],type:[{type:c,name:'type'}]},e=['play','loop','menu','quality','scale','salign','wmode','bgcolor','base','flashvars','allowScriptAccess','allowFullScreen'];for(var f=0;f<e.length;f++)d[e[f]]=[{type:c,name:e[f]},{type:b,name:e[f]}];e=['allowFullScreen','play','loop','menu'];for(f=0;f<e.length;f++)d[e[f]][0]['default']=d[e[f]][1]['default']=true;var g=CKEDITOR.tools.cssLength;function h(j,k,l){var r=this;var m=d[r.id];if(!m)return;var n=r instanceof CKEDITOR.ui.dialog.checkbox;for(var o=0;o<m.length;o++){var p=m[o];switch(p.type){case a:if(!j)continue;if(j.getAttribute(p.name)!==null){var q=j.getAttribute(p.name);if(n)r.setValue(q.toLowerCase()=='true');else r.setValue(q);return;}else if(n)r.setValue(!!p['default']);break;case b:if(!j)continue;if(p.name in l){q=l[p.name];if(n)r.setValue(q.toLowerCase()=='true');else r.setValue(q);return;}else if(n)r.setValue(!!p['default']);break;case c:if(!k)continue;if(k.getAttribute(p.name)){q=k.getAttribute(p.name);if(n)r.setValue(q.toLowerCase()=='true');else r.setValue(q);return;}else if(n)r.setValue(!!p['default']);}}};function i(j,k,l){var t=this;var m=d[t.id];if(!m)return;var n=t.getValue()==='',o=t instanceof CKEDITOR.ui.dialog.checkbox;for(var p=0;p<m.length;p++){var q=m[p];switch(q.type){case a:if(!j||q.name=='data'&&k&&!j.hasAttribute('data'))continue;var r=t.getValue();if(n||o&&r===q['default'])j.removeAttribute(q.name);else j.setAttribute(q.name,r);break;case b:if(!j)continue;r=t.getValue();if(n||o&&r===q['default']){if(q.name in l)l[q.name].remove();}else if(q.name in l)l[q.name].setAttribute('value',r);else{var s=CKEDITOR.dom.element.createFromHtml('<cke:param></cke:param>',j.getDocument());s.setAttributes({name:q.name,value:r});if(j.getChildCount()<1)s.appendTo(j);else s.insertBefore(j.getFirst());}break;case c:if(!k)continue;r=t.getValue();if(n||o&&r===q['default'])k.removeAttribute(q.name);
else k.setAttribute(q.name,r);}}};CKEDITOR.dialog.add('flash',function(j){var k=!j.config.flashEmbedTagOnly,l=j.config.flashAddEmbedTag||j.config.flashEmbedTagOnly,m,n='<div>'+CKEDITOR.tools.htmlEncode(j.lang.common.preview)+'<br>'+'<div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div>'+'<div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';return{title:j.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){var A=this;A.fakeImage=A.objectNode=A.embedNode=null;m=new CKEDITOR.dom.element('embed',j.document);var o=A.getSelectedElement();if(o&&o.data('cke-real-element-type')&&o.data('cke-real-element-type')=='flash'){A.fakeImage=o;var p=j.restoreRealElement(o),q=null,r=null,s={};if(p.getName()=='cke:object'){q=p;var t=q.getElementsByTag('embed','cke');if(t.count()>0)r=t.getItem(0);var u=q.getElementsByTag('param','cke');for(var v=0,w=u.count();v<w;v++){var x=u.getItem(v),y=x.getAttribute('name'),z=x.getAttribute('value');s[y]=z;}}else if(p.getName()=='cke:embed')r=p;A.objectNode=q;A.embedNode=r;A.setupContent(q,r,s,o);}},onOk:function(){var y=this;var o=null,p=null,q=null;if(!y.fakeImage){if(k){o=CKEDITOR.dom.element.createFromHtml('<cke:object></cke:object>',j.document);var r={classid:'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000',codebase:'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0'};o.setAttributes(r);}if(l){p=CKEDITOR.dom.element.createFromHtml('<cke:embed></cke:embed>',j.document);p.setAttributes({type:'application/x-shockwave-flash',pluginspage:'http://www.macromedia.com/go/getflashplayer'});if(o)p.appendTo(o);}}else{o=y.objectNode;p=y.embedNode;}if(o){q={};var s=o.getElementsByTag('param','cke');for(var t=0,u=s.count();t<u;t++)q[s.getItem(t).getAttribute('name')]=s.getItem(t);}var v={},w={};y.commitContent(o,p,q,v,w);var x=j.createFakeElement(o||p,'cke_flash','flash',true);x.setAttributes(w);x.setStyles(v);if(y.fakeImage){x.replace(y.fakeImage);j.getSelection().selectElement(x);}else j.insertElement(x);},onHide:function(){if(this.preview)this.preview.setHtml('');},contents:[{id:'info',label:j.lang.common.generalTab,accessKey:'I',elements:[{type:'vbox',padding:0,children:[{type:'hbox',widths:['280px','110px'],align:'right',children:[{id:'src',type:'text',label:j.lang.common.url,required:true,validate:CKEDITOR.dialog.validate.notEmpty(j.lang.flash.validateSrc),setup:h,commit:i,onLoad:function(){var o=this.getDialog(),p=function(q){m.setAttribute('src',q);
o.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(m.getAttribute('src'))+'" type="application/x-shockwave-flash"></embed>');};o.preview=o.getContentElement('info','preview').getElement().getChild(3);this.on('change',function(q){if(q.data&&q.data.value)p(q.data.value);});this.getInputElement().on('change',function(q){p(this.getValue());},this);}},{type:'button',id:'browse',filebrowser:'info:src',hidden:true,style:'display:inline-block;margin-top:17px;',label:j.lang.common.browseServer}]}]},{type:'hbox',widths:['25%','25%','25%','25%','25%'],children:[{type:'text',id:'width',style:'width:95px',label:j.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(j.lang.common.invalidHtmlLength.replace('%1',j.lang.common.width)),setup:h,commit:i},{type:'text',id:'height',style:'width:95px',label:j.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(j.lang.common.invalidHtmlLength.replace('%1',j.lang.common.height)),setup:h,commit:i},{type:'text',id:'hSpace',style:'width:95px',label:j.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(j.lang.flash.validateHSpace),setup:h,commit:i},{type:'text',id:'vSpace',style:'width:95px',label:j.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(j.lang.flash.validateVSpace),setup:h,commit:i}]},{type:'vbox',children:[{type:'html',id:'preview',style:'width:95%;',html:n}]}]},{id:'Upload',hidden:true,filebrowser:'uploadButton',label:j.lang.common.upload,elements:[{type:'file',id:'upload',label:j.lang.common.upload,size:38},{type:'fileButton',id:'uploadButton',label:j.lang.common.uploadSubmit,filebrowser:'info:src','for':['Upload','upload']}]},{id:'properties',label:j.lang.flash.propertiesTab,elements:[{type:'hbox',widths:['50%','50%'],children:[{id:'scale',type:'select',label:j.lang.flash.scale,'default':'',style:'width : 100%;',items:[[j.lang.common.notSet,''],[j.lang.flash.scaleAll,'showall'],[j.lang.flash.scaleNoBorder,'noborder'],[j.lang.flash.scaleFit,'exactfit']],setup:h,commit:i},{id:'allowScriptAccess',type:'select',label:j.lang.flash.access,'default':'',style:'width : 100%;',items:[[j.lang.common.notSet,''],[j.lang.flash.accessAlways,'always'],[j.lang.flash.accessSameDomain,'samedomain'],[j.lang.flash.accessNever,'never']],setup:h,commit:i}]},{type:'hbox',widths:['50%','50%'],children:[{id:'wmode',type:'select',label:j.lang.flash.windowMode,'default':'',style:'width : 100%;',items:[[j.lang.common.notSet,''],[j.lang.flash.windowModeWindow,'window'],[j.lang.flash.windowModeOpaque,'opaque'],[j.lang.flash.windowModeTransparent,'transparent']],setup:h,commit:i},{id:'quality',type:'select',label:j.lang.flash.quality,'default':'high',style:'width : 100%;',items:[[j.lang.common.notSet,''],[j.lang.flash.qualityBest,'best'],[j.lang.flash.qualityHigh,'high'],[j.lang.flash.qualityAutoHigh,'autohigh'],[j.lang.flash.qualityMedium,'medium'],[j.lang.flash.qualityAutoLow,'autolow'],[j.lang.flash.qualityLow,'low']],setup:h,commit:i}]},{type:'hbox',widths:['50%','50%'],children:[{id:'align',type:'select',label:j.lang.common.align,'default':'',style:'width : 100%;',items:[[j.lang.common.notSet,''],[j.lang.common.alignLeft,'left'],[j.lang.flash.alignAbsBottom,'absBottom'],[j.lang.flash.alignAbsMiddle,'absMiddle'],[j.lang.flash.alignBaseline,'baseline'],[j.lang.common.alignBottom,'bottom'],[j.lang.common.alignMiddle,'middle'],[j.lang.common.alignRight,'right'],[j.lang.flash.alignTextTop,'textTop'],[j.lang.common.alignTop,'top']],setup:h,commit:function(o,p,q,r,s){var t=this.getValue();
i.apply(this,arguments);t&&(s.align=t);}},{type:'html',html:'<div></div>'}]},{type:'fieldset',label:CKEDITOR.tools.htmlEncode(j.lang.flash.flashvars),children:[{type:'vbox',padding:0,children:[{type:'checkbox',id:'menu',label:j.lang.flash.chkMenu,'default':true,setup:h,commit:i},{type:'checkbox',id:'play',label:j.lang.flash.chkPlay,'default':true,setup:h,commit:i},{type:'checkbox',id:'loop',label:j.lang.flash.chkLoop,'default':true,setup:h,commit:i},{type:'checkbox',id:'allowFullScreen',label:j.lang.flash.chkFull,'default':true,setup:h,commit:i}]}]}]},{id:'advanced',label:j.lang.common.advancedTab,elements:[{type:'hbox',widths:['45%','55%'],children:[{type:'text',id:'id',label:j.lang.common.id,setup:h,commit:i},{type:'text',id:'title',label:j.lang.common.advisoryTitle,setup:h,commit:i}]},{type:'hbox',widths:['45%','55%'],children:[{type:'text',id:'bgcolor',label:j.lang.flash.bgcolor,setup:h,commit:i},{type:'text',id:'class',label:j.lang.common.cssClass,setup:h,commit:i}]},{type:'text',id:'style',validate:CKEDITOR.dialog.validate.inlineStyle(j.lang.common.invalidInlineStyle),label:j.lang.common.cssStyle,setup:h,commit:i}]}]};});})();
