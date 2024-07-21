sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/invenio/serverlesspo1/test/integration/FirstJourney',
		'com/invenio/serverlesspo1/test/integration/pages/POSetList',
		'com/invenio/serverlesspo1/test/integration/pages/POSetObjectPage',
		'com/invenio/serverlesspo1/test/integration/pages/POISetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POSetList, POSetObjectPage, POISetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/invenio/serverlesspo1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOSetList: POSetList,
					onThePOSetObjectPage: POSetObjectPage,
					onThePOISetObjectPage: POISetObjectPage
                }
            },
            opaJourney.run
        );
    }
);