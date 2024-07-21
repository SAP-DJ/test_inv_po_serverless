sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.invenio.serverlesspo1',
            componentId: 'POSetObjectPage',
            contextPath: '/POSet'
        },
        CustomPageDefinitions
    );
});