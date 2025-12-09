function validate() {
  let firstName = document.getElementById("name1").value;
  let surname = document.getElementById("name2").value;
  let emailAd = document.getElementById("email").value;
  let number = document.getElementById("phone").value;
  let educationName = document.getElementById("name3").value;
  let reason = document.getElementById("comment").value;
  let file = document.getElementById("myfile").value;
  let comment = document.getElementById("interest").value;
  let strengths = document.getElementById("skills").value;

  document.getElementById("finalmsg").innerHTML = "";

  document.getElementById("demo1").innerHTML = "";
  document.getElementById("demo2").innerHTML = "";
  document.getElementById("demo3").innerHTML = "";
  document.getElementById("demo4").innerHTML = "";
  document.getElementById("demo5").innerHTML = "";
  document.getElementById("demo6").innerHTML = "";
  document.getElementById("demo7").innerHTML = "";
  document.getElementById("demo8").innerHTML = "";
  document.getElementById("demo9").innerHTML = "";
  document.getElementById("demo10").innerHTML = "";
  document.getElementById("demo11").innerHTML = "";

  if (firstName === "") {
    document.getElementById("demo1").innerHTML = "* Please fill in this field";
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
  }

  if (surname === "") {
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
    document.getElementById("demo2").innerHTML = "* Please fill in this field";
  }

  if (emailAd === "") {
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
    document.getElementById("demo3").innerHTML = "* Please fill in this field";
  }

  atpos = emailAd.indexOf("@");
  dotpos = emailAd.lastIndexOf(".");

  if (atpos < 1 || (dotpos - atpos < 2)) {
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
    document.getElementById("demo8").innerHTML = "* Invalid input";
  }

  if (number === "") {
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
    document.getElementById("demo4").innerHTML = "* Please fill in this field";
  }

  if (!parseInt(number)) {
      document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
      document.getElementById("demo9").innerHTML = "* Invalid input";
  }

  if (educationName === "") {
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
    document.getElementById("demo5").innerHTML = "* Please fill in this field";
  }

  if (reason === "") {
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
    document.getElementById("demo6").innerHTML = "* Please fill in this field";
  }

  if (file === "") {
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
    document.getElementById("demo7").innerHTML = "* Please choose a file";
  }
  if (comment === "") {
    document.getElementById("demo10").innerHTML = "* Please fill in this field";
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
  }
  if (strengths === "") {
    document.getElementById("demo11").innerHTML = "* Please fill in this field";
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
  }
  else {
      
  }
}