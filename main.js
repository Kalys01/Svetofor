const App = {
    data () {
        return {
            timer: 10,
            active: 'go',
        }
    },
    methods: {
        timers: function() {
            setInterval(() => {
                this.timer--;
                if (this.timer < 6){
                    this.active = this.timer % 2 ? null : 'prepare' 
                }
                if (this.timer < 0){
                    this.timer = 10;
                    this.active = 'go' ? 'stop' : 'go';
                }
                
            }, 1000);
        },
    },
    mounted() {
        this.timers()
    }
}

Vue.createApp(App).mount('#app')
