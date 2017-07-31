Number.prototype.formatMoney = function(c, d, t){
	var n = this,
		c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = n < 0 ? "-" : "",
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

new Vue({
	el: '#app',
	data: {
		productos: [
			{
				'producto': 1,
				'descripcion': 'Ethyl Alcohol',
				'precio': '11391.86'
			},
			{
				'producto': 2,
				'descripcion': 'Meloxicam',
				'precio': '9772.01'
			},
			{
				'producto': 3,
				'descripcion': 'Guaifenesin and Dextromethorphan Hydrobromide',
				'precio': '16593.02'
			},
			{
				'producto': 4,
				'descripcion': 'Homosalate, Octocrylene, Octisalate, Avobenzone',
				'precio': '10418.63'
			},
			{
				'producto': 5,
				'descripcion': 'Docusate sodium',
				'precio': '10312.71'
			},
			{
				'producto': 6,
				'descripcion': 'Oxycodone Hydrochloride',
				'precio': '9840.61'
			},
			{
				'producto': 7,
				'descripcion': 'Titanium Dioxide and Zinc Oxide',
				'precio': '17706.35'
			},
			{
				'producto': 8,
				'descripcion': 'Ciprofloxacin',
				'precio': '18955.56'
			},
			{
				'producto': 9,
				'descripcion': 'Acetaminophen',
				'precio': '16196.34'
			},
			{
				'producto': 10,
				'descripcion': 'Codfish',
				'precio': '11802.94'
			}
		],
		usuarios: [
			{usuario: 'calirojas', contrasena: 'cali'}
		],
		facturacion: {
			productoSeleccionado: {
				producto: '',
				cantidad: 1
			},
			productosAgregados: []
		},
		login: {
			usuario: '',
			contrasena: '',
			validado: false,
			mensaje: {
				texto: 'Por favor, introduzca su nombre de usuario y contraseña para ingresar:',
				clase: 'default'
			}
		}
	},
	methods: {
		agregarLinea: function(){
			var productoSeleccionado = this.facturacion.productoSeleccionado,
			existe = this.facturacion.productosAgregados.find(function(el){
				return el.producto == productoSeleccionado.producto;
			});

			if(!existe){
				this.facturacion.productosAgregados.push({
					producto: productoSeleccionado.producto,
					descripcion: productoSeleccionado.descripcion,
					precio: productoSeleccionado.precio,
					cantidad: productoSeleccionado.cantidad
				});
			}else{
				var lineaFactura = this.facturacion.productosAgregados.find(function(el){
					if(el.producto == productoSeleccionado.producto){
						return el.cantidad;
					}
				});

				console.log(lineaFactura)

				lineaFactura.cantidad += productoSeleccionado.cantidad;
			}
		},
		infoProductoSeleccionado: function(){
			var producto = this.facturacion.productoSeleccionado.producto;

			if(producto){
				info = this.productos.find(function(linea){
					if(linea.producto == producto){
						return linea;
					}
				});

				this.facturacion.productoSeleccionado.descripcion = info.descripcion;
				this.facturacion.productoSeleccionado.precio = info.precio;
			}
		},
		eliminarLinea: function(indice){
			this.facturacion.productosAgregados.splice(indice, 1);

		},
		validarUsuario: function(){
			var login = this.login;

			var elUsuarioExiste = this.usuarios.find(function(el){
				if(el.usuario == login.usuario && el.contrasena == login.contrasena){
					return true;
				}
			});

			if(elUsuarioExiste){
				this.login.validado = true;
				this.login.mensaje.texto = 'Por favor, introduzca su nombre de usuario y contraseña para ingresar:';
				this.login.mensaje.clase = 'default';
			}else{
				this.login.mensaje.texto = 'Acceso denegado. Por favor, verifique su nombre de ' +
				'usuario y/o contraseña y vuelva a intentarlo.';
				this.login.mensaje.clase = 'danger';
			}
		}
	},
	computed: {
		totalLineas: function(){
			var total = 0;

			this.facturacion.productosAgregados.forEach(function(el){
				total += el.cantidad * el.precio;
			});

			return (total).formatMoney(2, '.', ',');
		}
	}
});