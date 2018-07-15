import app from './main/app'
import { router } from './main/router/index'
import { store } from './main/store';
import _ from  'lodash';


if(window.__INITIAL_STATE__){

    let initial_state = window.__INITIAL_STATE__;
    for(let prop in initial_state){
        store.state[prop] = _.assign(
            store.state[prop],
            initial_state[prop]
        );
    }
}

router.onReady(() => {
    app.$mount('#app')
});