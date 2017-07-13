import Ember from 'ember';

export default Ember.Controller.extend({
    selectedBarId:null,
    store:Ember.inject.service(),
    actions:{
        updateBar(value){
            let selectedBar=this.get('store').peekRecord('bar',this.get('selectedBarId'));
            let selectedBarValue=selectedBar.get('value');
            let limit=selectedBar.get('limit');
            let minValue=selectedBar.get('minValue');
            let result=selectedBarValue+value;

            if(result>limit){
                selectedBar.set('value',limit);
            }
            else if(result<minValue){
                selectedBar.set('value',minValue);
            }
            else{
                selectedBar.set('value',result);
            }
        }
    }
});
