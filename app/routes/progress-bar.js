import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    model(){
        this.get('store').unloadAll('bar');
        return this.get('ajax').request('http://pb-api.herokuapp.com/bars');
    },
    afterModel(model){
        let {bars,buttons,limit}=model;

        console.log(bars,buttons,limit);
        for(let i of bars){
            this.store.createRecord('bar',{
                id:Math.floor(Math.random() * 10000100001),
                value:i,
                limit:limit
            });
        }
    },
    setupController(controller,model){
        this._super(controller,model);
        controller.set('bars',this.store.peekAll('bar'));
    }
});
