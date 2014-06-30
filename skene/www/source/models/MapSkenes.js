
MapSkenes = Backbone.Collection.extend(
{
	url: "http://whispr.outi.me/api/get_local_whispers",

	defaults: 
	{
		"min_lat": 0,
		"min_long": 0,
		"max_lat": 0,
		"max_long": 0,
	},

		model: Message
	});