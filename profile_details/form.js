
var formPanelPassword = Ext.create('Ext.form.Panel', {
    //title: 'Password Form',
    width: 650,
   // height: 500,
   // renderTo: Ext.getBody(),
    //style: 'margin: 50px',
    items: [{

        xtype:'container',
        layout:'column',
        id:'col_con1',
        items:[{
            xtype:'container',
            layout:'form',
            id:'species_con',
            items:[{ xtype:'combo'
                ,fieldLabel:'Species',labelStyle:'margin-right:38px;color:blue;margin-left:6px;font-size:small'
                ,store:['Item 1', 'Item 2']}]
        },{
            xtype:'container',layout:'form',id:'breed_con',
            items:[{ xtype:'combo'
                ,fieldLabel:'Breed',labelStyle:'color:blue;font-size:small'
                ,store:['Item 1', 'Item 2']}]
        }]

    }, {
        xtype : 'container',
        layout: 'column',
        id:'col_con',
        items : [{xtype:'label',text:'Stats:',id:'stats'},

            {
                xtype : 'container',
                layout : 'form',
                id:'weight_con',
                items : [
                    {
                        xtype       : 'textfield',
                        fieldLabel: 'Weight',
                        name: 'state',
                        labelStyle:'margin-right:-35px;color:blue;font-size:small'

                    }
                ]
            },
            {
                xtype: 'container',
                layout:'form',
                id:'size_con',
                items:[{
                    xtype: 'textfield',fieldLabel:'Size',name:'zip', labelStyle:'margin-right:-50px;color:blue;font-size:small'
                }]
            },
            {
                xtype: 'container',
                layout:'form',
                id:'color_con',
                items:[{
                    xtype: 'textfield',fieldLabel:'Color',name:'zip', labelStyle:'margin-right:-50px;color:blue;font-size:small'
                }]
            }
        ]
    },{
        xtype:'container',
        layout:'form',
        id:'play_con',
        items:[{xtype:'textfield',fieldLabel:'Play Requirements',labelStyle:'color:blue;font-size:small;width:145px !important;margin-right:-5px'}]
    },{
        xtype:'container',
        layout:'form',
        id:'special_con',
        items:[{xtype:'textfield',fieldLabel:'Special Requirements',labelStyle:'color:blue;font-size:small;width:145px !important;margin-right:-5px'}]
    },{
        xtype:'container',
        layout:'column',
        id:'col_con3',

        items:[{
            xtype:'container',
            layout:'form',
            id:'default_combo',
            displayField: 'displayValue'
            ,items:[
                { xtype:'combo'
                    ,store:['Item 1', 'Item 2']}]
        },{
            xtype:'container',
            layout:'form',
            id:'phone',
            items:[{xtype:'textfield',fieldLabel:'Phone',
                labelStyle:'color:blue;margin-right:-45px;font-size:small'}]
        },{
            xtype:'container',
            layout:'form',
            id:'contact_con',
            items:[{xtype:'textfield',fieldLabel:'Contact',
                labelStyle:'color:blue;margin-right:-45px;font-size:small'}]
        }]
    },{
        xtype:'container',
        layout:'form',
        id:'email_con',
        items:[{xtype:'textfield',fieldLabel:'Email',labelStyle:'color:blue;font-size:small;margin-right:-48px'}]
    },{
        xtype:'container',
        layout:'column',
        id:'col_con4',
        items:[{
            xtype:'container',
            layout:'form',
            id:'save',
            items:[{xtype:'button',text:'Save'}]
        },{
            xtype:'container',
            layout:'form',
            id:'cancel',
            items:[{xtype:'button',text:'Cancel'}]
        }]
    }]
});