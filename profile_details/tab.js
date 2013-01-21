var tabPanel = Ext.create('Ext.tab.Panel', {
    width:650,
    border:0,
    // height: 400,
    //style: 'margin: 12px 20px 2px 20px', // move panel off browser’s edge
    // renderTo: Ext.getBody(),
    items: [{
        title: 'Master Info',
        items:[formPanelPassword]
    }, {
        title: 'Preference',
        html: 'Preference'
    }, {
        title: 'Vaccination',
        html: 'Vaccination'
    }, {
        title: 'Visit History',
        html: 'Visit History'
    }, {
        title: 'Service History',
        html: 'Service History'
    }, {
        title: 'Notes',
        html:'notes'
    }]
});