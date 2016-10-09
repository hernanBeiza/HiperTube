(function(namespace) {
  namespace.VT_CONFIG = {

    /**
     *  Title of an application, show on about page.
     */
    title: 'HiperTube',
    support_email: 'hernan@hiperactivo.cl',

    /**
     *  An URL to fetch data.
     */
    data_url: "videoHB.xml",
    
    /**
     * CHANGEME: Change this method to parse your own data.
     * @categoryList  CategoryList  An object containing all category list where you push newly created Categories.
     * @data          String        ResponseText from XMLHttpRequest for a given data_url
     */

    favorite: false,
        
    prepareData: function(categoryList, data) {
        //Carga desde el XML local
        console.log("prepareData",categoryList);
        // Parse received TEXT data as a XML data
        var XMLParser = new DOMParser();
        var xml = XMLParser.parseFromString(data, "text/xml");
        //	
        // Select all entries from data object  
        var categories = {};        
        var entries = xml.querySelectorAll("item");
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
			var category = entry.querySelector("category").textContent;
			if (!categories[category]) {
				categories[category] = new namespace.Category(category, new namespace.VideoChannel(category));
				categoryList.addCategory(categories[category]);
			}
            var model = new namespace.VideoModel();
            model.setID(entry.querySelector("videoID").textContent);
            model.setTitle(entry.querySelector("title").textContent);
            model.setDesc(entry.querySelector("description").textContent);
            model.setThumb(entry.querySelector("thumbnail").getAttribute('url'));
            model.setVideo(entry.querySelector("content").getAttribute('url'), entry.querySelector("content").getAttribute('type'));
            model.setDuration(entry.querySelector("duration").textContent);
            model.setChannelTitle(entry.querySelector("channelTitle").textContent);
            model.setDate(entry.querySelector("date").textContent);
            categories[category].getChannel().addEntry(model);
        }
    }
  };  
  /**
   *  If you need to modify parts of VideoTemplate core functionality, please do it here by 
   *  extending or replacing core prototypes.
   */
})(window.VTNS);
