const i18n = new VueI18n({
  locale: 'hr', // set locale
  messages: translations, // set locale messages
})

new Vue({
    el: '#app',
	vuetify: new Vuetify(),
    i18n,
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