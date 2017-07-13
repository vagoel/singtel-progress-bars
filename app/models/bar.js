import DS from 'ember-data';

export default DS.Model.extend({
    value:DS.attr('number',{
        defaultValue:0
    }),
    limit:DS.attr('number',{
        defaultValue:100
    }),
    minValue:DS.attr('number',{
        defaultValue:0
    })
});
