const {createApp} = Vue

createApp({
    data(){
        return{
            productos:[],
            url:'https://magalrztto.pythonanywhere.com/productos',
            cargando:true,
            error: false
        }    
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err); //console.error = console.log pero en color rojo
                this.error = true;
            })
        },
        borrar(id){
        const url = 'https://magalrztto.pythonanywhere.com/productos/'+ id;
        
        let options = {
            method: 'DELETE'
        }
        fetch(url, options)
        .then(response => response.json())
        .then(response => {
            location.reload();
        })
        .catch(err => {
            console.error(err)
        })
    },
},    
    created(){
        this.fetchData(this.url);

    }
}).mount('#app')