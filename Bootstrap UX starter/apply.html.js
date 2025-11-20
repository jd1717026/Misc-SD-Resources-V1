
<div class="form-container">
            <form action="#" name = "enquire" onsubmit = "return(validate());">

                <h4 class="name">Name:</h4>
                <input class="textInput" type="text" name="name" required>

                <h4 class="email">E-mail Address:</h4>
                <input class="textInput" type="email" name="email" required><br />
                <br />

                <input type = "submit" value = "Submit" />
            </form>
        </div>
        
        <script>

            function validate() {

                if( document.enquire.name.value == "" )
                {
                    alert("Please provide your name.");
                    document.enquire.name.focus() ;
                    return false;
                }

                if( document.enquire.email.value == "" )
                {
                    alert("Please provide a valid email.");
                    document.enquire.email.focus() ;
                    return false;
                }

                var emailID = document.enquire.email.value;
                atpos = emailID.indexOf("@");
                dotpos = emailID.lastIndexOf(".");

                if (atpos < 1 || (dotpos - atpos < 2)) {
                    alert("Please provide a valid email in the format: name@example.com")
                    document.enquire.email.focus() ;
                    return false;
                    }
                }

      </script>
