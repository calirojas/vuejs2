/*
	Svuetify
	Autor: Cali Rojas
	Blog: http://calirojas.com
	GitHub: https://github.com/calirojas/vuejs2
*/

const router = new VueRouter({
	routes: [
		{path: '/', component: Inicio},
		{path: '/artista/:artista', component: Artista},
		{path: '*', component: NoEncontrado}
	]
});

const app = new Vue({
	router,
	data(){
		return {
			artistas: json.artistas,
			mostrarFormulario: false,
			nuevoArtista: {
				imagen: '',
				nombre: '',
				descripcion: ''
			}
		}
	},
	methods: {
		agregarArtista: function(){
			this.artistas.push({
				id: json.artistas.length + 1,
				nombre: this.nuevoArtista.nombre,
				imagen: this.nuevoArtista.imagen,
				descripcion: this.nuevoArtista.descripcion,
				discos: []
			});

			this.limpiarFormulario();
		},
		limpiarFormulario: function(){
			this.nuevoArtista = {
				imagen: '',
				nombre: '',
				descripcion: ''
			};
		}
	}
}).$mount('#app');