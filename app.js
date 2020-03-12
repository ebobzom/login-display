new Vue({
    el: '#app',
    template: '#main-template',
    data: {
        text: '',
        password: '',
        realEmail: '',
        realPassword: '',
        displayResult: false,
        error: false
    },
    methods: {
        showResult(){
            if(this.text && this.password){
                this.error = false;
                this. realEmail = this.text;
                this.realPassword = this.password;
                this.password = '';
                this.text = '';
                this.displayResult = true;
            }
            else{
                this.error = true;
                this.displayResult = false;
            }
        },
        reset(){
            this.displayResult = false;
            this.password = '';
            this.text = '';
        }
    }
})