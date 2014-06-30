		//for debugging purpose only
		var localSkeneRenderCount = 0;

		MapFeedView = Backbone.View.extend(
		{
			//tagName: 'ul',
			el: $("#local_skenes_container"),

			initialize: function()
			{
        		this.listenTo(this.collection, 'sync', this.render);
        	},

	        render: function()
	        {
	        	localSkeneRenderCount ++;
	        	console.log("draws: ", localSkeneRenderCount);
	        	this.$el.html( "<center><b>Local feed:</b></center> <br />" );
	        	var that = this;

	        	var renderContent = "";
	        	this.collection.each(function(item)
	        	{
	        		var messageView = new MessageView({ model: item });
	        		renderContent = renderContent + messageView.render();
	        	}, this);

	        	this.$el.append(renderContent);

			},

			renderOne: function(pos)
			{
				var messageView = new MessageView({ model: this.collection.at(pos)});
				messageView.render();
			}
		});