CKEDITOR.plugins.add( 'ipsum',
{
	init: function( editor )
	{
		editor.addCommand( 'loremIpsumDialog', new CKEDITOR.dialogCommand( 'loremIpsumDialog' ) );
		editor.ui.addButton( 'ipsum',
		{
			label: 'Add Lorem Impsum text',
			command: 'loremIpsumDialog',
			icon: this.path + 'icon.png'
		} );
        var li = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.';
		CKEDITOR.dialog.add( 'loremIpsumDialog', function( editor )
		{
			return {
				title : 'Lorem Impsum',
				minWidth : 400,
				minHeight : 100,
				contents :
				[
					{
						id : 'general',
						label : 'Settings',
						elements :
						[
							{
								type : 'html',
								html : 'Select the number of paragraphs (1-7) and click Okay.'
							},

							{
								type : 'select',
								id : 'contents',
								label : 'Paragraphs',
								items : 
								[
									[ 'One', li ],
									[ 'Two', li + ' ' + li ],
									[ 'Three',  li + ' ' + li + ' ' + li ],
								],
								commit : function( data )
								{
									data.contents = this.getValue();
								}
							},

						]
					}
				],
				onOk : function()
				{
					var dialog = this,
						data = {},
						link = editor.document.createElement( 'p' );
					this.commitContent( data );

					link.setHtml( data.contents );
					editor.insertElement( link );
				}
			};
		} );
	}
} );