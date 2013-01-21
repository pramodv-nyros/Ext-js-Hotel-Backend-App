// Ext.define('Invoice', {
//     extend: 'Ext.data.Model',
//     idProperty: 'InvoiceID',
//     fields: [{
//         name: 'InvoiceID',
//         type: 'string'
//     }, {
//         name: 'Client',
//         type: 'string'
//     }, {
//         name: 'Description',
//         type: 'string'
//     }, {
//         name: 'Date',
//         type: 'date',
//         dateFormat: 'c'
//     }, {
//         name: 'Amount',
//         type: 'float'
//     }, {
//         name: 'Currency',
//         type: 'string'
//     }, {
//         name: 'Status',
//         type: 'string'
//     }]
// });

Ext.define('Invoice', {
    extend: 'Ext.data.Model',
    idProperty: 'InvoiceID',
    fields: [{
        name: 'InvoiceID',
        type: 'string'
    }, {
        name: 'Facility',
        type: 'string'
    }, {
        name: 'FamilyName',
        type: 'string'
    },{
        name: 'FirstName',
        type: 'string'
    },{
        name: 'Dogs',
        type: 'string'
    },{
        name: 'Cats',
        type: 'string'
    }, {
        name: 'Phone',
        type: 'string'
    }, {
        name: 'Email',
        type: 'string'
    }, {
        name: 'City',
        type: 'string'
    },{
        name: 'State',
        type: 'string'
    }]
});
