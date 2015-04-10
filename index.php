<?php
session_start();

?>
<?php header("Content-Type: text/html; charset=utf-8");
header("Cache-Control: Private"); ?>

<!DOCYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
	<!-- Fav icon -->
 	<link rel="shortcut icon" type="image/ico" href="./img/favicon.ico" />
    <title>Investors Trust Application</title>

    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <link href="bootstrapFormValidation/bootstrapFormValidationV3-1.0.2.css" rel="stylesheet">
    <!-- include the core styles -->
    <link rel="stylesheet" href="js/alertify.js-0.3.11/themes/alertify.core.css" />
    <!-- include a theme, can be included into the core instead of 2 separate files -->
    <link rel="stylesheet" href="js/alertify.js-0.3.11/themes/alertify.default.css" />
    <link rel="stylesheet" href="js/alertify.js-0.3.11/themes/alertify.bootstrap.css" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

  <div id="loader"><img src="./img/716.GIF"  alt="Loading..." /></div><div id="fade"></div>
  <div class="container">

<h1>シモシモツールテスト中じゃ！</h1>
    <!-- Bootstrapのフォーム -->
   <form id="regform" class="form-horizontal" role="form" action="edit.php" method="POST">
		<input type='text' name='url' />


  <div class="form-group" >
    <div class="col-sm-12" style="text-align:center;">
      <input id="submit_button" type="submit" class="btn btn-lg btn-block btn-primary" value="次　へ" valCheck="submit">
    </div>        
  </div>
</form>

</div> <!-- container -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/load.js"></script> <!--jsフォルダ内の場合-->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" charset="UTF-8" src="bootstrapFormValidation/bootstrapFormValidationV3-1.0.2.min.js"></script>
    <script src="js/alertify.js-0.3.11/lib/alertify.min.js"></script>
    <script type="text/javascript" src="js/myjquery.js"></script> <!--jsフォルダ内の場合-->

  <script type="text/javascript" charset="UTF-8">
  $(document).ready(function() {
    $('#regform').bootstrapFormValidation({
    'checkRealtime': 'true'
     'requiredMessage': 'URLを打つのじゃ！',
    });
  });
  </script>

  </body>
</html>