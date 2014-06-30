
Message = Backbone.Model.extend(
{
	url: 'http://whispr.outi.me/api/',

	defaults: 
	{
		"id": 0,
		"latitude": 0,
		"longitude": 0,
		"pubTime": 0,
		"text": ""
	},

	initialize: function(){
	}
});