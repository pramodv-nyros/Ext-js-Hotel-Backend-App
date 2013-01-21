var invoiceStore = Ext.create('Ext.data.Store', {
    autoLoad: true,
    autoSync: false,
    model: 'Invoice',
    groupField: 'Facility',
    proxy: {
        type: 'ajax',
        url: 'invoices.json',
        reader: {
            type: 'json',
            root: 'rows'
        },
     
        writer: {
            type: 'json',
            writeAllFields: false
        }
       
}    

});

