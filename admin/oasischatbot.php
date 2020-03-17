<!doctype html>
<html lang="en" class="no-js">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="theme-color" content="#3e454c">
	
	<title>OASIS | Train Chatbot   </title>

	<!-- Font awesome -->
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<!-- Sandstone Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<!-- Bootstrap Datatables -->
	<link rel="stylesheet" href="css/dataTables.bootstrap.min.css">
	<!-- Bootstrap social button library -->
	<link rel="stylesheet" href="css/bootstrap-social.css">
	<!-- Bootstrap select -->
	<link rel="stylesheet" href="css/bootstrap-select.css">
	<!-- Bootstrap file input -->
	<link rel="stylesheet" href="css/fileinput.min.css">
	<!-- Awesome Bootstrap checkbox -->
	<link rel="stylesheet" href="css/awesome-bootstrap-checkbox.css">
	<!-- Admin Stye -->
	<link rel="stylesheet" href="css/style.css">
         <link rel="shortcut icon" href="images/favicon-icon/icons8-car-40.png">
  <style>
		.errorWrap {
    padding: 10px;
    margin: 0 0 20px 0;
    background: #fff;
    border-left: 4px solid #dd3d36;
    -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
.succWrap{
    padding: 10px;
    margin: 0 0 20px 0;
    background: #fff;
    border-left: 4px solid #5cb85c;
    -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
		</style>

</head>

<body>
	<?php include('includes/header.php');?>

	<div class="ts-main-content">
		<?php include('includes/leftbar.php');?>
<div class="content-wrapper">
			<div class="container-fluid">

				<div class="row">
					<div class="col-md-12">
                                            	<h2 class="page-title">OASIS Chatbot</h2>
<script src="js/brain.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

 
</head>
<font size="4">
<body onload="myFunction()" style="margin:0;">
<p id="ph" align="center" style="color: white;">Starting OASIS</p><div id="loader"></div>
<div style="display:none;" id="myDiv" class="animate-bottom">

	<div class="panel panel-default">
	<div class="panel-heading">Train OASIS Chatbot</div>
	<div class="panel-body">
    	<div class="form-group">
     <table style="width:100%">
     <tr>
         <td class="left_side">
        <div>USER: <span id="user"></span></div><br>
	<div>OASIS: <span id="chatbot"></span></div>
        <br>
        <div><div id="sq"><input id="textBox" type="text" placeholder="Ask me something!" autocomplete="off" class="form-control" required/><br><button id="chatButton" class="btn btn-dark" style="font-size : 20px;">ASK</button></div></div></br></td>
<td class="right_side"><div id="trainArea"></div>
   </th>
  </tr>
    </table>
        </div>
        </div>
        </div>
     

    
<div class="panel panel-default">
	<div class="panel-heading">Enter the required answer here.</div>
	<div class="panel-body">
    	<div class="form-group">
     <table style="width:100%">
         <tr>
         <td class="left_side">
             <div id="confirmation">Was the answer satisfactory?</div><br>


		<button class="btn btn-danger" id="noButton" style="font-size : 20px;">No, I would like to change it!</button>
		<button class="btn btn-success" id="yesButton" style="font-size : 20px;">Yes, it was perfect!</button>
                <br><br>
		<input id="helpBox" type="text" placeholder="Enter the required answer to the query!" autocomplete="off" class="form-control" required/></br></br>
                <button class="btn" id="helpButton" style="font-size : 20px;">Train OASIS</button><br><br>
                 </th>
  </tr>
            </table>
             </div>
            </div>
        </div>
       

                                    
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    <script type="text/javascript" src="js/ai.js"></script>

<div id="mv"></div>
 <script>
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 0);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  
  document.getElementById("ph").style.display = "none";
  
}
</script>
                                       
                      

	<!-- Loading Scripts -->
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap-select.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.dataTables.min.js"></script>
	<script src="js/dataTables.bootstrap.min.js"></script>
	<script src="js/Chart.min.js"></script>
	<script src="js/fileinput.js"></script>
	<script src="js/chartData.js"></script>
	<script src="js/main.js"></script>
</body>
</html>


