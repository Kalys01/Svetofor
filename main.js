const App = {
    data () {
        return {
            timer: 10,
            active: 'go'
        }
    },
    mounted: function () {
        setInterval(() => {
            if (this.timer < 1){
                this.active == 'stop'
                this.timer = 11
            }
            this.timer--;
        }, 1000);
    }
}

Vue.createApp(App).mount('#app')
