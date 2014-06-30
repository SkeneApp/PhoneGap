	MessageView = Backbone.View.extend(
	{
			//tagName: 'li',
			el: $("#local_skenes_container"),

			initialize: function()
			{
				this.model.on('change', this.render, this);
			},

			render: function()
			{
				var variables = { 
					id_label: this.model.get("id"), 
					time_label: this.model.get("pubTime"), 
					latitude_label: this.model.get("latitude"), 
					longitude_label: this.model.get("longitude"), 
					text_label: this.model.get("text") 
				};

				var template = _.template( $("#message_template").html(), variables );
            	//this.$el.append( template );
            	return template;
				//return this;
			}
		});