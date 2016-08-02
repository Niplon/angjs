(function(){
	'use strict';

	LocalStorage.$inject = ['$window'];
	function LocalStorage($window){ /* Class starts with Uppercase */
		this._$window = $window;
	}

	LocalStorage.prototype = { /* It's better to give same function names as native fucntional */
		getItem: function getItem(key){
			var value = this._$window.localStorage.getItem(key);

			if(value){
				try{
					value = JSON.parse(value);
				} catch (e) {
					value = null;
				}
			}

			return value;
		},
		setItem: function setItem(key, value){

			window.localStorage.setItem(key, value); /* add window to give browser indication where to search the object */

			if(value){
				value = JSON.stringify(value);
			}

			this._$window.localStorage.setItem(key, value);

		},
		removeItem: function removeItem(key){
			this._$window.localStorage.removeItem(key);
		}
	};

	SessionStorage.$inject = ['$window'];
	function SessionStorage($window){ /* Class starts with Uppercase */
		this._$window = $window;
	}

	SessionStorage.prototype = { /* It's better to give same function names as native fucntional */
		getItem: function getItem(key){
			var value = this._$window.sessionStorage.getItem(key);

			if(value){
				try{
					value = JSON.parse(value);
				} catch (e) {
					value = null;
				}
			}

			return value;
		},
		setItem: function setItem(key, value){

			window.sessionStorage.setItem(key, value); /* add window to give browser indication where to search the object */

			if(value){
				value = JSON.stringify(value);
			}

			this._$window.sessionStorage.setItem(key, value);

		},
		removeItem: function removeItem(key){
			this._$window.sessionStorage.removeItem(key);
		}
	};

	/* angular>module>service>localstorage.service>LocalStorage adding service structure by placement */
	angular.module('storage', []) 
		.service('localstorage.service', LocalStorage)
		.service('sessionStorage.service', SessionStorage);

})();