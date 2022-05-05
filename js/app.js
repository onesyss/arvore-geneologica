			var family = new FamilyTree ( document . getElementById ( "tree" ), { 
				mouseScrool: FamilyTree.action.scroll,			
				nodeTreeMenu : true , 
				mode: "dark",
				editForm: {readOnly: true},
				showXScroll: FamilyTree.scroll.visible,
        		showYScroll: FamilyTree.scroll.visible,
        		mouseScrool: FamilyTree.action.ctrlZoom,
				enableSearch: false,
    			scaleInitial: FamilyTree.match.boundary,

				nodeBinding: {
        			"field_0": "relation"
    				},
            	nodeBinding : { 
                		field_0: "name",
						field_1: "gender",
						field_2: "nameParent",		
					},
				menu : { 
            		pdf : { text : "Exportar PDF" }, 
 				}, 
        		nodeMenu :                
         				{ 
            		pdf : { text : "Exportar PDF" }, 
					details: { text: "Details" },
        			edit: { text: "Edit" }
 				},
 				editForm: {
					titleBinding: "nome",
					photoBinding: "Foto",
					generateElementsFromFields: false,
					addMore: 'Adicione mais elementos',
					addMoreBtn: 'Adicionar elemento',
					addMoreFieldName: 'Nome do elemento',
					elements: [
							{ type: 'textbox', label: 'Nome Completo', binding: 'name' },
						[
							{ type: 'date', label: 'Data de nascimento', binding: 'birthDate' },
							{ type: 'date', label: 'Data de óbito', binding: 'deathDate' }
						],
						[
							{ type: 'textbox', label: 'País', binding: 'pais' },
							{ type: 'textbox', label: 'Cidade', binding: 'cidade' },
						],
							// { type: 'textbox', label: 'Foto', binding: 'ImgUrl', btn: 'Upload' },
							{ type: 'textbox', label: 'Parentesco', binding: 'gender' },
						],
						},
            		nodes : [ { id: 1, pids: [2], name: "Editar", gender: "male", },
						{ id: 2, pids: [1], name: "Editar", gender: "female"},			
					]
				});
