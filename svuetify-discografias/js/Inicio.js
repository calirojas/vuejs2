/*
	Svuetify
	Autor: Cali Rojas
	Blog: http://calirojas.com
	GitHub: https://github.com/calirojas/vuejs2
*/

const Inicio = {
	template: `
		<div class="c-inicio">
			<h1 class="text-center">SPA creada con Vue.js</h1>
			<img src="img/vue.png" class="img-responsive center-block">

			<p>
				Esta "single-page application" est&aacute; desarrollada con Vue.js,
				vue-router y Bootstrap. No tiene alguna cosa fuera de lo com&uacute;n,
				pero si combina muchas de las funcionalidades de Vue.js. Entre ellas:
			</p>
			<ul>
				<li>Watchers</li>
				<li>Routing</li>
				<li>B&uacute;squeda y filtrado de datos</li>
				<li>Modelos</li>
				<li>Lifecycle hooks</li>
				<li>M&eacute;todos</li>
				<li>Binding</li>
				<li>Eventos</li>
			</ul>


			<div class="text-right">
				<h2>M&aacute;s ejemplos</h2>
				<p>Blog: <a href="http://calirojas.com/">http://calirojas.com/</a></p>
				<p>GitHub: <a href="https://github.com/calirojas/vuejs2">https://github.com/calirojas/vuejs2</a></p>
				<p><span class="label label-success">Desarrollado por Cali Rojas</span></p>
			</div>
		</div>
	`,
	data(){
		return {
			datos: {}
		}
	}
};