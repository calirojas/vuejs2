new Vue({
	el: '#app',
	data: {
		botonesPequenos: true,
		colorCaja: 'color-verde',
		desactivar: true
	},
	methods: {
		cambiarColor: function(color){
			this.colorCaja = 'color-' + color;
		},
		cambiarEstadoBotones: function(){
			this.desactivar = !this.desactivar;
		}
	}
});