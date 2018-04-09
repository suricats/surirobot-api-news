'use strict';

const superagent = require('superagent');

require('../config');
var API_KEY = process.env.API_KEY || 'No valid API_KEY';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.getnews = function(args, res, next) {
  /**
   * Get the fresh French news
   * 
   *
   * returns OutputMessages
   **/
    var toReturn = {};
    toReturn['application/json'] = {
        "messages":""
    };
    
    superagent.get('https://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=' + API_KEY)
    .end((r_err, r_res) => {
        res.setHeader('Content-Type', 'application/json');
        if (r_err) {
            console.log(r_err.body);
            res.statusMessage = "Service unavailable";
            res.statusCode = 503;
        }
        else {
			if (!r_res || !r_res.body || !r_res.body.articles) {
				res.statusMessage = "Service unavailable";
	            res.statusCode = 503;
			}
			else {
				var articleReference = getRandomInt(r_res.body.articles.length);
	            toReturn[Object.keys(toReturn)[0]].messages = r_res.body.articles[articleReference].title + ' ' + r_res.body.articles[articleReference].description;
			}
        }
        res.end(JSON.stringify(toReturn[Object.keys(toReturn)[0]] || {}, null, 2));
    });
};
