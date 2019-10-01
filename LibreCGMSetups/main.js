new Vue({
    el: '#app',
	vuetify: new Vuetify(),
    data: {
		device: 0,
        master: 0,
        follower: 0,
        usecloud: 0
    },
	methods: {
		metoda: function () {
            return 1;
        }
	}
})