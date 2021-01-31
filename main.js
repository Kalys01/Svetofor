const App = {
    data () {
        return {
            timer: 10,
            active: 'go'
        }
    },
    mounted: function () {
        setInterval(() => {
            if (this.timer < 5){
                // this.active = null ? this.timer % 2 : 'prepare'
                if (this.timer % 2){
                    this.active = null
                } else {this.active = 'prepare'}

                if (this.timer < 1){
                    this.timer = 11
                    this.active = 'go' ? 'stop' : 'go'
                } 
            }
            this.timer--;
        }, 1000);
    }
}

Vue.createApp(App).mount('#app')
