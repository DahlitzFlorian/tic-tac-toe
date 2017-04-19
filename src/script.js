$(document).ready(function() {
    /*
        handles program flow
     */
    var counter = 2;
    var end = false;
    $("#tbody").find("td").on('click', function(event) {
        if(!end) {
            if($(this).text() === "") {
                if(counter % 2 === 0) {
                    $(this).text("X");
                }
                else {
                    $(this).text("O");
                }

                counter++;
                checkGame();

                if(counter === 11) {
                    end = true;
                    $("#restart").css('display', 'block');
                    alert("Game over! Nobody wins.");
                }
            }
        }
    });

    /*
        check if someone won
     */
    var checkGame = function() {
        if($("#square11").text() !== "") {

            if($("#square12").text() === $("#square11").text()) {
                if($("#square11").text() === $("#square13").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square11").addClass('red');
                    $("#square12").addClass('red');
                    $("#square13").addClass('red');
                    alert($("#square11").text() + " wins!");
                }
            }
            
            if($("#square21").text() === $("#square11").text()) {
                if($("#square11").text() === $("#square31").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square11").addClass('red');
                    $("#square21").addClass('red');
                    $("#square31").addClass('red');
                    alert($("#square11").text() + " wins!");
                }
            }

            if($("#square22").text() === $("#square11").text()) {
                if($("#square11").text() === $("#square33").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square11").addClass('red');
                    $("#square22").addClass('red');
                    $("#square33").addClass('red');
                    alert($("#square11").text() + " wins!");
                }
            }
        }
        
        if($("#square21").text() !== "") {
            if($("#square22").text() === $("#square21").text()) {
                if($("#square21").text() === $("#square23").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square21").addClass('red');
                    $("#square22").addClass('red');
                    $("#square23").addClass('red');
                    alert($("#square21").text() + " wins!");
                }
            }
        }
        
        if($("#square31").text() !== "") {

            if($("#square32").text() === $("#square31").text()) {
                if($("#square31").text() === $("#square33").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square31").addClass('red');
                    $("#square32").addClass('red');
                    $("#square33").addClass('red');
                    alert($("#square31").text() + " wins!");
                }
            }

            if($("#square22").text() === $("#square13").text()) {
                if($("#square31").text() === $("#square13").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square31").addClass('red');
                    $("#square22").addClass('red');
                    $("#square13").addClass('red');
                    alert($("#square13").text() + " wins!");
                }
            }
        }

        if($("#square12").text() !== "") {
            if($("#square22").text() === $("#square12").text()) {
                if($("#square12").text() === $("#square32").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square12").addClass('red');
                    $("#square22").addClass('red');
                    $("#square32").addClass('red');
                    alert($("#square12").text() + " wins!");
                }
            }
        }

        if($("#square13").text() !== "") {
            if($("#square23").text() === $("#square13").text()) {
                if($("#square33").text() === $("#square13").text()) {
                    end = true;
                    $("#restart").css('display', 'block');
                    $("#square13").addClass('red');
                    $("#square23").addClass('red');
                    $("#square33").addClass('red');
                    alert($("#square13").text() + " wins!");
                }
            }
        }
    };

    /* 
        restart
     */
    $("#restart").on('click', function() {
        location.reload();
    });
});