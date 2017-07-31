Vue.component('componente-tablas', {
	template: `
		<div class="c-tablas">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">Tablas de multiplicar</h3>
				</div>
				<div class="panel-body">
					<form @submit.prevent="calcularTabla">
						<div class="form-group">
							<label for="num" class="control-label">Introduzca un n&uacute;mero:</label>
							<input type="number" id="num" class="form-control" v-model="numero" autofocus>
						</div>
					</form>
					<table class="table table-bordered table-hover table-condensed" v-show="numero">
						<tbody>
							<tr v-for="n in 10" class="text-center">
								<td>{{ numero }}</td>
								<td>x</td>
								<td>{{  n }}</td>
								<td>=</td>
								<td>{{ numero * n }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	`,
	data(){
		return {
			numero: ''
		}
	}
});