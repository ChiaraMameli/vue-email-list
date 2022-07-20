const root = new Vue({
    el: '#root',
    data:{
        emailAddresses: [],
    },
    created(){   
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    const address = res.data.response;
                    this.emailAddresses.push(address);
                })
                }
            }       
    
})