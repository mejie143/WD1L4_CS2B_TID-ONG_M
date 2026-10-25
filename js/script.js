function showGradeEquivalent() { //Declaration of Function
    // Student names
    //Declare here the 5 Students
    let studentNames = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"]
    //student grades
    let studentGrades = [92, 85, 78, 97, 74];
    
    // table
    let output = "<h2>Grade Equivalents</h2>";
    output += "<table>";
    output += "<tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr>";

    //loop to iterate over the student name array
    for (let i = 0; i < studentNames.length; i++) {
        let name = studentNames[i];
        let grade = studentGrades[i];

        //call the evaluation functions
        let equivalent = getEquivalent(grade);
        let remark = getRemark(grade);
        let leader = getAcademicLeader(equivalent);

        //append the data row to the table layout
        output += "<tr>";
        output += "<td>" + name + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";
        output += "</tr>"
    }

    output += "</table>";
    //show the output result inside the html
    document.getElementById("result").innerHTML = output;
}
    function getRemark(grade) {
    // Ternary operator
    // If the grade is 75 or higher, return "Passed".
    // Otherwise, return "Failed".
    let remark = grade >= 75 ? "Passed" : "Failed";
    return remark;
    }
    
    function getEquivalent(grade) {
    /*
    The getEquivalent() function converts a student's numerical grade
    into its grade equivalent.
    It uses if...else if conditional statements to check the grade range
    and assign the corresponding equivalent.
    A grade of 75 is equivalent to 3.0, while grades below 75
    are marked as Failed.
    */
   //converts grade to its corresponding equivalent
        let equivalent = "";
        if (grade >= 97) {equivalent = "1.0";}
        else if (grade >= 94) {equivalent = "1.25";}
        else if (grade >= 91) {equivalent = "1.5";}
        else if (grade >= 88) {equivalent = "1.75";}
        else if (grade >= 85) {equivalent = "2.0";}
        else if (grade >= 82) {equivalent = "2.25";}
        else if (grade >= 79) {equivalent = "2.5";}
        else if (grade >= 76) {equivalent = "2.75";}
        else if (grade >= 75) {equivalent = "3.0";}
        else {equivalent = "Failed"}
        return equivalent;
    }

    function getAcademicLeader(equivalent) {
    /*
    The getAcademicLeader() function determines the Academic Leader
    classification based on the student's grade equivalent.
    It uses a switch statement to check the equivalent value.
    Equivalents of 1.0 and 1.25 are classified as 1st Class Academic Leader,
    1.5 as 2nd Class Academic Leader, and 1.75 as 3rd Class Academic Leader.
    All other equivalents are marked with "-" because they do not qualify
    for an Academic Leader classification.
    */
   //assigns academic leader ranking
        let leader = "";
        switch (equivalent) {
            case "1.0":
            case "1.25":
                leader = "1st Class Academic Leader";
                break;

            case "1.5":
                leader = "2nd Class Academic Leader";
                break

            case "1.75":
                leader = "3rd Class Academic Leader";
                break;

            default:
                leader = "-"
        }
        return leader;
}