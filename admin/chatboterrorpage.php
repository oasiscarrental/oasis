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

       <script type="text/javascript">
                function erase(){
                         botTalk = JSON.parse(localStorage.getItem("bot"));
                         trainData = JSON.parse(localStorage.getItem("data"));
                         botTalk.pop();
                         trainData.pop()
                         localStorage.setItem("bot", JSON.stringify(botTalk));
                         localStorage.setItem("data", JSON.stringify(trainData));
                         commands = localStorage.getItem("neurons");	
                         var nb = commands - 1; 
                          localStorage.setItem("neurons",nb);
                          alert("Data restored!");
                }
                   </script><center>    <font size="4"><br><br>
           <a href="oasischatbot.php"><button style="font-size : 20px;" class="btn btn-success">Start OASIS</button></a><br><br>
           <p>Sometimes when you train OASIS, the page becomes unresponsive, here you can delete the last array data to fix the bug.</p> 
           <button onclick="erase()" style="font-size : 20px;" class="btn btn-danger" >Delete last data!</button>    </center>
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


