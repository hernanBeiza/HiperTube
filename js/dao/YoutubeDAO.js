(function(namespace) {

	namespace.YoutubeDAO = function() {
		console.log("YoutubeDAO");
	};

	function buscar(modelo) {

	}


	namespace.YoutubeDAO.prototype = {
		buscar: function(searchModelo,callbackResultado){

			console.log("buscar:",searchModelo);
			if(searchModelo.getText()!=""){
			    var request = gapi.client.youtube.search.list({
					q: searchModelo.getText(),
					part: 'snippet', 
					maxResults: 10
			    });
			    request.execute(function(response)  {   
					console.log("response",response);                                                                                 
					var resultados = response.result.items;    
					var modelos =[];
					//console.log(resultados);
					for (var i = 0; i<resultados.length; i++) {
						var item = resultados[i];
						console.log(item);
						var id = item.id.videoId;
						if(id){
							var titulo = item.snippet.title;
							var mini = item.snippet.thumbnails.default.url;
							var descripcion = item.snippet.description;
							//console.log(id,titulo,mini);
							var modelo = new namespace.VideoModel(id,titulo,descripcion,mini,id,"duración","tipo");
							modelos.push(modelo);
						}
					}

					callbackResultado(modelos, "Búsqueda con éxito :)");                  
				
				});
			} else {
				console.error("No buscar. Llegó vacío");
				callbackResultado(null,"Escribe algo para poder buscar");                  
			}

		}
		
	};

})(window.VTNS);