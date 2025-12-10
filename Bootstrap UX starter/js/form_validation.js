function openTextBox2() {
  var checkBox = document.getElementById("opt1");
  var text = document.getElementById("box1");
  var text2 = document.getElementById("box2");

  if (checkBox.checked == true){
    text.style.display = "block";
    text2.style.display = "block";
  } else {
    text.style.display = "none";
    text2.style.display = "none";
  }
}

function openTextBox() {

  var checkBox = document.getElementById("1");
  var text3 = document.getElementById("box3");
  var text4 = document.getElementById("box4");

  if (checkBox.checked == true){
    text3.style.display = "block";
    text4.style.display = "block";
  } else {
    text3.style.display = "none";
    text4.style.display = "none";
  }
}

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
  let learning = document.getElementById("achieve").value;
  let test = document.getElementById("try").value;

  document.getElementById("finalmsg").innerHTML = "";
  document.getElementById("testing").innerHTML = "";

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
  document.getElementById("demo12").innerHTML = "";
  document.getElementById("demo13").innerHTML = "";
  document.getElementById("demo14").innerHTML = "";
  document.getElementById("demo15").innerHTML = "";
  document.getElementById("demo16").innerHTML = "";
  document.getElementById("demo17").innerHTML = "";
  document.getElementById("demo18").innerHTML = "";

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checked = false;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
        checked = true;
        console.log("test 1 true")
    }
  });

  const inputs = document.querySelectorAll('input[type="radio"]');
  let rad = false;

  inputs.forEach(radio => {
    if (radio.checked) {
        rad = true;
    }
  });

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
  if (learning === "") {
    document.getElementById("demo12").innerHTML = "* Please fill in this field";
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
  }
  if (test === "") {
    document.getElementById("demo13").innerHTML = "* Please fill in this field";
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
  }

  if (!checked) {
    document.getElementById("demo18").innerHTML = "* Please check this box";
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
  }

  if (!rad) {
    document.getElementById("demo14").innerHTML = "* Please select an option";
    document.getElementById("demo15").innerHTML = "* Please select an option";
    document.getElementById("demo16").innerHTML = "* Please select an option";
    document.getElementById("demo17").innerHTML = "* Please select an option";
    document.getElementById("finalmsg").innerHTML = "* There are errors in your form. Please review them before submission.";
  }

  if (document.getElementById("finalmsg").innerHTML === "") {
    document.getElementById("testing").innerHTML = "yes";
  } else {
    document.getElementById("testing").innerHTML = "";
  }
}