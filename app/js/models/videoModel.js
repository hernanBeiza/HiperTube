(function(namespace) {


	namespace.VideoModel = function(id, title, desc, thumb, video, duration, type, channelTitle, date) {
		this.setID(id);
		this.setTitle(title);
		this.setDesc(desc);
		this.setThumb(thumb);
		this.setDuration(duration);
		this.setVideo(video, type);
		this.setChannelTitle(channelTitle);
		this.setDate(date);
	};

	namespace.VideoModel.prototype = {
		setID: function(id){
			this._id=id;
		},
		getID: function(){
			return this._id;
		},
		setTitle: function(title) {
			this._title = title;
		},
		getTitle: function() {
			return this._title;
		},
		setDesc: function(desc) {
			this._desc = desc;
		},
		getDesc: function() {
			return this._desc;
		},
		setThumb: function(thumb) {
			this._thumb = thumb;
		},
		getThumb: function() {
			return this._thumb;
		},
		setVideo: function(video, type) {
			this._video = video;
      		this._videoType = type;
		},
		getVideo: function() {
			return this._video;
		},
		getVideoType: function() {
			return this._videoType;
	    },
		setDuration: function(duration) {
			if (!isNaN(+duration)) {
				this._duration = duration;
      		} else if (typeof(duration) === "string") {
				var hours = parseInt(duration.substr(0, 2),10),
				minutes = parseInt(duration.substr(3, 2),10),
				seconds = parseInt(duration.substr(6, 2),10);
				this._duration = hours * 3600 + minutes * 60 + seconds;
			}
		},
		getDuration: function() {
			return this._duration;
		},
		setChannelTitle: function(channelTitle) {
			this._channelTitle = channelTitle;
		},
		getChannelTitle: function() {
			return this._channelTitle;
		},
		setDate: function(date) {
			//console.log(date);
			var originalString = new String(date);
			//console.log(originalString);
			var finalString = originalString.replace(/\D/g," "); 
			//console.log(finalString);
			var dtcomps = finalString.split(" ");
			//console.log(dtcomps);
			//console.log(dtcomps);
			// modify month between 1 based ISO 8601 and zero based Date dtcomps[1]--;
			//this._date = new Date(Date.UTC(dtcomps[0],dtcomps[1],dtcomps[2],dtcomps[3],dtcomps[4],dtcomps[5]));
			this._date = new Date(Date.UTC(dtcomps[0],dtcomps[1],dtcomps[2],dtcomps[3],dtcomps[4],dtcomps[5]));
		},
		getDate: function() {
			var dateString = ('0' + this._date.getDate()).slice(-2) + '/'
             + ('0' + (this._date.getMonth())).slice(-2) + '/'
             + this._date.getFullYear();
			return dateString;
		}
	};

})(window.VTNS);

