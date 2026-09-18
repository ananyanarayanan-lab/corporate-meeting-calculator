const button = document.getElementById("calculateButton");

button.addEventListener("click", function () {

    const people = Number(document.getElementById("people").value);
    const salary = Number(document.getElementById("salary").value);
    const minutes = Number(document.getElementById("minutes").value);

    const hourlySalary = salary / 2080;

    const meetingCost =
        people * hourlySalary * (minutes / 60);

    document.getElementById("result").textContent =
        "$" + meetingCost.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    const verdict = document.getElementById("verdict");

    if (meetingCost < 250) {
        verdict.textContent =
            "Acceptable corporate damage. Carry on.";

    } else if (meetingCost < 1000) {
        verdict.textContent =
            "Okay... someone better have taken notes.";

    } else if (meetingCost < 3000) {
        verdict.textContent =
            "This meeting is becoming a financial event.";

    } else if (meetingCost < 7500) {
        verdict.textContent =
            "This absolutely could have been an email.";

    } else if (meetingCost < 15000) {
        verdict.textContent =
            "We hope the PowerPoint was incredible.";

    } else {
        verdict.textContent =
            "Please notify the CFO immediately.";
    }

});