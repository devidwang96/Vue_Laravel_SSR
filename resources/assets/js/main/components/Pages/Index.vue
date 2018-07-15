<template>
    <div>
        <div class="main-content">
            <!--<transition name="page" v-on:before-enter="beforePageEnter">-->
                <router-view/>
             <!--</transition>-->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){

        },
        methods: {
            // Router transition

            // beforePageEnter(){
            //
            // }
        },
        // computed: {
        //     backend_data(){
        //         return this.state.backend_data[this.$route.name]
        //     }
        // },
        // Server XHR
        // backend_created(router, store, Component){
        //     return store.state.ServerXHR
        //         .open('get', Laravel.getLocalizedUrl('https://jsonplaceholder.typicode.com/posts/1'))
        //         .then(
        //             response => {
        //                 store.state.backend_data[router.currentRoute.name] = JSON.parse(response.responseText);
        //             }
        //         );
        // },
        // created(){
        //     // Client XHR
        //     if(process.BROWSER) {
        //         this.$http.get(
        //             this.Laravel.getLocalizedUrl('https://jsonplaceholder.typicode.com/posts/1')
        //         )
        //             .then(
        //                 response => {
        //                     this.change_backend_data({route_name: this.$route.name, backend_data: response.body});
        //                 }
        //             );
        //     }
        // }
    }
</script>
