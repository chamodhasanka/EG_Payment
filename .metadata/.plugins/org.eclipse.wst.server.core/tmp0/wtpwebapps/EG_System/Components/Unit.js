$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

/*
//SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateUnitForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid------------------------
	var type = ($("#hidUnitIDSave").val() == "") ? "POST" : "PUT";
	var formData = new FormData($("#formUnits")[0]);
	console.log(formData);
	$.ajax({
		url : "UnitsAPI",
		type : type,
		data :formData,
		dataType : "text",
		complete : function(response, status) {
			onUnitSaveComplete(response.responseText, status);
		}
	});
});

function onUnitSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divUnitsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidUnitIDSave").val("");
	$("#formUnits")[0].reset();
}

*/
//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide(); 
	 
	// Form validation-------------------
	 var status = validateUnitForm();
	 if (status != true)
		 {
		  $("#alertError").text(status);
		  $("#alertError").show();
		  return;
	 }
	 //If status equals to true
	 var type = ($("#hidUnitIDSave").val() == "") ? "POST" : "PUT";
	 var formData = new FormData($("#formUnits")[0]);
	 console.log(formData);
	 $.ajax(
	 {
		 url : "UnitsAPI",
		 type : type,
		 data : formData,
		 enctype : "multipart/form-data",
		 complete : function(response, status)
		 {
			 onUnitSaveComplete(response.responseText, status);
		 },
		 processData : false,
		 contentType :false
	 }); 
});




function onUnitSaveComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divUnitsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		}
	 } else if (status == "error")
	 {
			 $("#alertError").text("Error while saving.");
			 $("#alertError").show();
	 } else
	 {
			 $("#alertError").text("Unknown error while saving..");
			 $("#alertError").show();
	 } 
	
	 $("#hidUnitIDSave").val("");
	 $("#formUnits")[0].reset();
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	 $("#hidUnitIDSave").val($(this).data("unitid")); 
	 $("#mnValue").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#mxValue").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#modifiedDate").val($(this).closest("tr").find("td:eq(2)").text());
	 $("#price").val($(this).closest("tr").find('td:eq(3)').text());
});

//client-model
function validateUnitForm()
{
	// Min Value
	if ($("#mnValue").val().trim() == "")
	{
		return "Insert Min Unit Value.";
	}
	// Max Value
	if ($("#mxValue").val().trim() == "")
	{
		return "Insert Max Unit Value.";
	}
	// Modified Date
	if ($("#modifiedDate").val() == "0")
	{
		return "Insert Modified Date.";
	}
	// Price
	 var tmpPrice = $("#price").val().trim();
	 if (!$.isNumeric(tmpPrice)) 
	 {
		 return "Insert Price.";
	 }
	
	return true;
}

$(document).on("click", ".btnRemove", function(event)
{
		$.ajax(
		 {
			 url : "UnitsAPI",
			 type : "DELETE",
			 data : "unitID=" + $(this).data("unitid"),
			 dataType : "text",
			 complete : function(response, status)
			 {
				 onUnitDeleteComplete(response.responseText, status);
			 }
		 });
});


function  onUnitDeleteComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
			 $("#divUnitsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		}
	 } else if (status == "error")
	 {
			 $("#alertError").text("Error while deleting.");
			 $("#alertError").show();
	 } else
	 {
			 $("#alertError").text("Unknown error while deleting..");
			 $("#alertError").show();
	 }
}


