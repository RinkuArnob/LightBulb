/**
 * Manage statuses in Facebook.
 */
(function() {
    LightBulb.statuses = {
        currentToken:"",
        /**
         * User must set the page token to retrieve statuses from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token) {
            LightBulb.statuses.currentToken = token;
            return true;
        },
        removeToken:function() {
            LightBulb.statuses.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function() {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.statuses.currentToken) token = LightBulb.statuses.currentToken;
            return token;
        },
        getStatuses:function(userId, message,callback) {
            var accessToken = LightBulb.statuse.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/" + userId + '/statuses';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {

            }
        },
        getStatus:function(statusId,callback) {
            var accessToken = LightBulb.statuse.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/" + statusId;

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {

            }
        },
        getComments:function(statusId,callback) {
            var accessToken = LightBulb.statuse.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/" + statusId + '/comments';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {

            }
        },
        getLikes:function(statusId,callback) {
            var accessToken = LightBulb.statuse.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/" + statusId + '/likes';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {

            }
        }
    }})
    ();