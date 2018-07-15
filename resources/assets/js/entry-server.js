import app from './main/app';
import { router } from './main/router'
import { store } from './main/store';

new Promise((resolve, reject) => {

    router.push(url);

    router.onReady(() => {
        const matchedComponents = router.getMatchedComponents();
        if (!matchedComponents.length) {
            return reject({ code: 404 })
        }

        // store.state.SEO = _.cloneDeep(store.state.SEO_template);

        Promise.all(matchedComponents.map(Component => {
            if (Component.backend_created) {
                return Component.backend_created(router, store, Component)
            }
        })).then(() => {
            resolve(app);
        }).catch(reject)
    }, reject);

}).then(app => {
    renderVueComponentToString(app, (err, res) => {
        if(err)
            print(err);
        else{
            print(res);
            print("<script>window.__INITIAL_STATE__= " + JSON.stringify(store.state) + "</script>");
        }
    });
}).catch((err) => {
    print(err);
});
