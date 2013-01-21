
var store = Ext.create('Ext.data.TreeStore', {
    root : {
        expanded : true,
        children : [  {
            text : "Family Profile(0)",
            leaf : true
        }, {
            text : "Reservation(0)",
            leaf : true
        }, {
            text : "Opearations",
            leaf : true
        }, {
            text : "Managements",
            leaf : true
        } ]
    }
});

var westPanel = Ext.create('Ext.tree.Panel', {
    title : 'List',

    //margins : '0 5 0 0',
    collapsible: true,
    id:'tree1',
    width:180,border:0,
    store : store,
    rootVisible : false

});
