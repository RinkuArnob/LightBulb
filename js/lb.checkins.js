/**
 * Helper functions to manage Facebook checkins using LightBulb.
 */
(function() {
    LightBulb.checkins = {

        /**
         * creates checkin, if create is successfull, new checkin Id generated and passed to callback
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param placeId string containing the ID of the Place Page, for example 110506962309835 for Facebook HQ
         * @param latitude string containing latitude
         * @param longitude string containing longitude
         * @param userIdsCSV Comma separated list of USER_IDs
         * @param message string message for checkin
         * @param link string url provided
         * @param picture string checkin picture
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        create: function(user, placeId, latitude, longitude, userIdsCSV, message, link, picture, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;

            if (accessToken) {
                var eventData = {
                    "access_token": accessToken,
                    "place" : placeId,
                    "coordinates":{
                        latitude: latitude,
                        longitude: longitude
                    },
                    "tags" : userIdsCSV,
                    "message" : message,
                    "link":link,
                    "picture":picture

                }
                FB.api("/" + user + "/checkins", 'post', eventData, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }

        }
    };
})();