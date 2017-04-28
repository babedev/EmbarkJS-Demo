$(document).ready(function() {
    $("#write").click(function() {
        var id = parseInt($("#id").val(), 10);
        var detail = $("#detail").val();

        Report.write(id, detail);
    });

    $("#read").click(function() {
        var id = parseInt($("#read_id").val(), 10);

        Report.getReport(id).then(function(detail) {
            if (detail) {
                $("#result").text(detail)
            } else {
                $("#result").text("** Empty **")
            }
        });
    });

    // var abiObject = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialValue","type":"uint256"}],"payable":false,"type":"constructor"}];
    // var myContract = new EmbarkJS.Contract({abi: abiObject, address: "ff93a2f623135333ebacd50652899083418bf914"});

    // myContract.get().then(function(value) {
    //   console.log("value is " + value)
    // });
});
