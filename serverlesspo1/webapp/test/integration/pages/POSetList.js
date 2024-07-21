sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.invenio.serverlesspo1',
            componentId: 'POSetList',
            contextPath: '/POSet'
        },
        CustomPageDefinitions
    );
});