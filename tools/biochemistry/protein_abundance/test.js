<html>
  <body>
    <form name="form1">
      <input type=button onClick="test()" value="Open File">
      <br><br>
    </form>
    <script type="text/javascript">
      function test() {
        var Excel = new ActiveXObject("Excel.Application");
        Excel.Visible = true;
        Excel.Workbooks.Open("test.xls");
      }
    </script>
  </body>
</html>