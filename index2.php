<script src="js/socket.io2.js"></script>
<script>
  var socket = io.connect('localhost:8080');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
