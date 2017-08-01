new Vue({
	el: '#app',
	data: {
		nuevaTarea: '',
		tareas: [],
		mensajeTareaAgregada: false
	},
	methods: {
		agregarTarea: function(){
			this.tareas.push({
				nombre: this.nuevaTarea.trim(),
				fecha: new Date(),
				finalizada: false
			});

			this.nuevaTarea = '';
			this.mensajeTareaAgregada = true;
		},
		eliminarTarea: function(tarea){
			var indice = this.tareas.indexOf(tarea);

			this.tareas.splice(indice, 1);
		}
	}
});