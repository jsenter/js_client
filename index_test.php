<!doctype html>
<html>
<head>
	<title>Mystalia Online Test</title>
	<link rel="stylesheet" href="css/dark-hive/jquery-ui-1.8.9.custom.css" type="text/css" />
	<link rel="stylesheet" href="css/uistructure.css" type="text/css" />
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jqueryui.js"></script>
	<script type="text/javascript" src="js/otherlogic.js"></script>
	<script type="text/javascript" src="js/maplogic.js"></script>
	<script type="text/javascript" src="js/uilogic.js"></script>
	<script type="text/javascript" src="js/playerlogic.js"></script>
	<!--<script type="text/javascript" src="js/loading.js"></script>-->
	<script type="text/javascript" src="js/socket.io.js"></script>
	<!--<script type="text/javascript" src="js/client.js"></script>-->
</head>
<body onResize="MoveAllPlayersOnResize()">
<script language="javascript">
  var socket = io.connect('http://127.0.0.1:88');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
</script>
</body>
</html>
