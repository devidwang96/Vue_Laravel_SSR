import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueMask from 'vue-the-mask';
import { Validator } from 'vee-validate';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component(
    'app-header',
    require('./components/Parts/Header.vue')
);

Vue.component(
    'app-footer',
    require('./components/Parts/Footer.vue')
);


Validator.extend('truthy', {
    getMessage: field => 'The ' + field + ' value is not truthy.',
    validate: value => !!value && value != 0
});

if(process.BROWSER){
    Vue.use(VueMask);
    Vue.use(require('vue-scrollto'));
    Vue.component('datepicker', require('vue-flatpickr-component'));
    require('.././additional-plugins/jquery.initialize');
    require('bootstrap-select');
    require('bootstrap-notify');
}


Vue.component(
    'app',
    require('./components/App.vue')
);

let eventHub = new Vue();


// if(process.BROWSER){
//     window.axios.defaults.headers.common['Locale'] = Laravel.currentLocaleChar;
// }


Vue.mixin({
    data(){
        return {
            animateNodes: null,
            charAnimateNodes : null,
            mouseMoveAnimateNodes : null,
            scrollMotionAnimateNodes : null,
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.animateNodes = $('.animate');
            this.charAnimateNodes = $('.char-animate');
            this.mouseMoveAnimateNodes = $('.mouse-move-animate');
            this.scrollMotionAnimateNodes = $('.scroll-motion-animate');

            this.mouseMoveAnimateNodes.each(function() {
                $(this).attr('data-offset-x', - $(this).offset().left);
                $(this).attr('data-offset-y', $(this).offset().top);
            });

            this.scrollMotionAnimateNodes.each(function() {
                $(this).attr('data-offset-y', $(this).offset().top);
            });

            $('body').off('mousemove');
            $('body').on('mousemove', (e) => {
                this.mouseMoveAnimate(e.pageX, e.pageY);
            });
        });
    },
    created(){

    },
    methods : {
        animate(){
            this.animateNodes.each(function() {
                if (!$(this).hasClass('in')) {
                    setTimeout(() => {
                        if ($(this).data('duration') !== undefined) {
                            $(this).css('transition', `all ${$(this).data('duration') / 1000}s`);
                        }
                        $(this).addClass('in');
                    }, $(this).data('delay') !== undefined ? $(this).data('delay') : 0);
                }
            });
        },
        charAnimate(){
            this.charAnimateNodes.each(function() {
                if (!$(this).hasClass('anim-active')) {
                    let animText = $(this).text();
                    let speed = $(this).data('speed');

                    $(this).text('');
                    Array.prototype.forEach.call(animText, (el) => {
                        $(this).append(`<span>${el}</span>`);
                    });
                    setTimeout(() => {
                        if ($(this).data('duration') !== undefined) {
                            $(this).find('span').css('transition', `all ${$(this).data('duration') / 1000}s`);
                        }
                        $(this).find('span').each(function(index) {
                            setTimeout(() => {
                                $(this).addClass('in');
                            }, (speed !== undefined ? speed : 50) * index);
                        });
                        $(this).addClass('anim-active');
                    }, $(this).data('delay') !== undefined ?
                        $(this).data('delay') :
                        0);
                }
            });
        },
        scrollMotionAnimate(scrollTop){
            this.scrollMotionAnimateNodes.each(function(){
                $(this).css('transform', 'translateY('+ ((scrollTop - $(this).data('offset-y')) / $(this).data('sensivity')) +'px)');
            });
        },
        mouseMoveAnimate(screenX, screenY){
            this.mouseMoveAnimateNodes.each(function() {
                let sensivity = $(this).data('sensivity');
                $(this).css('transform', `translateX(${(screenX - $(this).data('offset-x')) / $(this).data('sensivity')}px) translateY(${(screenY - $(this).data('offset-y')) / $(this).data('sensivity')}px)`);
            });
        },
        ...mapActions([
            'change_backend_data',
            'changeStoreReady',
            'handleStoreErrorResponse',
            'handleStoreError',
            'changeStoreRequestIsBeingSent',
            'changeStoreAPIRequestIsBeingSent'
        ])
    },
    computed : {
        ...mapGetters([
            'Laravel',
            'state'
        ])
    }
});

