/*
	Simulacion de chat con Vue.js 2
	Autor: Cali Rojas
	Blog: http://calirojas.com
	GitHub: https://github.com/calirojas/vuejs2
*/

new Vue({
	el: '#app',
	data: {
	//lista de todos los mensajes
		mensajes: [],
	//mensaje digitado por cada usuario
		nuevoMensaje : {
			izquierda: '',
			derecha: ''
		},
	//maximo numero de mensajes vacios, antes de validar
		limiteMensajesVacios: 5,
	//datos de los usuarios
		usuarios: {
			izquierda: {
				nombre: 'Evan You',
				mensajesEnviados: 0,
				mensajesVacios: 0,
				avatar: 'img/evan.jpg'
			},
			derecha: {
				nombre: 'Cali Rojas',
				mensajesEnviados: 0,
				mensajesVacios: 0,
				avatar: 'img/cali.png'
			}
		}
	},
	methods: {
	//publicar mensaje
		publicarMensaje: function(quienPublica){
			var mensaje = this.nuevoMensaje[quienPublica];

			if(mensaje.trim() != ''){
				this.mensajes.push({
					contenido: mensaje,
					posicion: quienPublica,
					fecha: new Date()
				});

				this.usuarios[quienPublica].mensajesEnviados++;

				this.nuevoMensaje[quienPublica] = '';
				this.scrollConversacion();
			}else{
				this.usuarios[quienPublica].mensajesVacios+=1;

				var mensajesVacios = this.usuarios[quienPublica].mensajesVacios;

				if(mensajesVacios <= this.limiteMensajesVacios){
					this.mensajes.push({
						contenido: [
							'Advertencia #',
							mensajesVacios,
							' para ',
							this.usuarios[quienPublica].nombre,
							': no se permite el envío de mensajes vacíos. ',
							'Comenzaremos a validar tus mensajes cuando tengas ',
							this.limiteMensajesVacios,
							' llamadas de atención.'
						].join(''),
						posicion: 'centro',
						fecha: new Date()
					});

					this.scrollConversacion();
				}

				this.nuevoMensaje[quienPublica] = '';
			}
		},
	//hacer scroll
		scrollConversacion: function(){
			var el = document.getElementById('conversacion');

			el.scrollTop = el.scrollHeight - el.clientHeight;
		},
	//borrar mensajes y resetear contadores
		borrar: function(){
			this.mensajes = [];

			for(var usuario in this.usuarios){
				if(this.usuarios.hasOwnProperty(usuario)){
					this.usuarios[usuario].mensajesEnviados = 0;
					this.usuarios[usuario].mensajesVacios = 0;
				}
			}
		}
	}
});