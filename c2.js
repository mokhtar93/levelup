
$( "button" ).on( "click", function() {
 

        function getId(){
	  	  jQuery.ajax({
			  type: "GET",
			//   data: {array:array},
		  	  url: "https://levelup-assessment-backend-odvoreherl.now.sh/api/getFormSchema" ,
		  			success:function (data, textStatus) {
					//   console.log(data);
					  data.forEach(function (arrayItem) {
						var x = arrayItem.prop1 + 2;
						console.log(x);
					});
				  	},
		  			error: function (req, status, error) {
			  			alertBox("Error: There might be an error in your Internet Connection or Permission issues. Please refresh the page and ty again !", 'error');
		  			}
	  			});
  			}
});

