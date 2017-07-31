new Vue({
	el: '#app',
	data: {
		usuarios: []
	},
	created: function(){
		this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(response){
			this.usuarios = response.data;
		});
	}
});