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
                if (this.timer < 7){
                    this.active = this.timer % 2 ? 'prepare' : null  
                }
                if (this.timer < 1){
                    this.timer = 11;
                    this.active = this.active == 'stop' ? 'go' : 'stop';
                }
                this.timer--;
                
            }, 1000);
        },
    },
    mounted() {
        this.timers()
    }
}

Vue.createApp(App).mount('#app')
