		//  DO NOT CHANGE
		//prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         
         const userData = [
            { username: "foo", password: "0000" }
         ];
         var db;
         var request = window.indexedDB.open("UsersDB", 1);
         
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: " + db);
         };
         
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("user", {keyPath: "username"});
            
            for (var i in userData) {
               objectStore.add(userData[i]);
            }
         };
         
        function readAll() {
            var objectStore = db.transaction("user").objectStore("user");
            
            objectStore.openCursor().onsuccess = function(event) {
               var cursor = event.target.result;

               if (cursor) {
                  document.getElementById("showall").innerHTML += "Username: " + cursor.value.username + ", Password: " + cursor.value.password + "<br>";
				  //alert(cursor.value.username + ", password: " + cursor.value.password);
                  cursor.continue();
               }
               
            };
         }
         
        function add(un, pwd) {
            var request = db.transaction(["user"], "readwrite")
            .objectStore("user")
            .add({username: un, password: pwd});
            
            request.onsuccess = function(event) {
               alert(un + " has been added to your database.");
  window.location.href = "index.html";
            };
            
            request.onerror = function(event) {
               alert("Unable to add data\r\n" + un + " is aready exist in your database! ");
            }
         }
         
        function remove(un) {
            var request = db.transaction(["user"], "readwrite")
            .objectStore("user")
            .delete(un);
            
            request.onsuccess = function(event) {
               alert(un + "\'s entry has been removed from your database.");
            };
         }
 
			/*
			* the following function is retrieved from http://papermashup.com/read-url-get-variables-withjavascript/
			*  
			*/
		function getUrlVars() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
			});
			return vars;
		}

		function loadParams(){
			var username = getUrlVars()["username"];
			document.getElementById("Welcome").innerHTML = "Welcome, " + username;
		}

			 
		function register(){
			var un = document.registerForm.username.value;
			var pwd = document.registerForm.password.value;
			if(pwd.length >= 8 && pwd.length <= 16 && un.length >= 8 && un.length <= 16)
			{
				add(un, encrypt(pwd));
				window.location.href = "selection.html?username="+ un;
			}
			else
			{
				document.getElementById("answer").innerHTML = ("Please enter a password between 8-16 characters. <br>Please enter a username between 8-16 characters.");
			}
		}

		function contactAndShippingInformation (){
			var firstName = document.ContactandShippingInformation.firstname.value;
			var lastName = document.ContactandShippingInformation.lastname.value;
			var streetaddress1 = document.ContactandShippingInformation.streetaddress1.value;
			var streetaddress2 = document.ContactandShippingInformation.streetaddress2.value;
			var postalCode = document.ContactandShippingInformation.postalcode.value;
			var phoneNumber = document.ContactandShippingInformation.phonenumber.value;
		
			if (firstName != "" && lastName != "" && streetaddress1 != "" && streetaddress2 != "" && postalCode != "" && phoneNumber != "")
			{
				add(firstName, lastName, streetaddress1, streetaddress2, postalCode, phoneNumber)
			}
			else 
			{
				document.getElementById("answer").innerHTML = ("Please fill in all the starred information.");
			}
		}
	
 
			function login(){
				var un = document.loginForm.username.value; //getting username value from the loginForm
				var pwd = document.loginForm.password.value; //getting password value from the loginForm
				var username, password;
				var transaction = db.transaction(["user"]);
				var objectStore = transaction.objectStore("user");
				var request = objectStore.get(un);
							
				request.onerror = function(event) {
				alert("Unable to retrieve data from database!");
				};
							
				request.onsuccess = function(event) {
				// Do something with the request.result!
				  
				if(request.result) {
				username = request.result.username; //getting username from the database
				password = request.result.password; //getting password from the database
				/*
				check if the user provide the correct username and password that match with the database
				if they match
				direct the page to main.html
				else
				provide feedback at the tag with id answer
				*/
				if(un == username && encrypt(pwd) == password) 
				{
				window.location.href = "selection.html?username="+ un; //direct the page to selection.html
				}
				else
				document.getElementById("answer").innerHTML = "Wrong username or password";   //Ask Mr.Wong for help
							   }
               
               else {
                  document.getElementById("answer").innerHTML = "Wrong username or password";
               }
            }
		}
/* END of DO NOT CHANGE */ 
//TO DO***********************************************************************************  
				function encrypt(pwd)
				{
					var pwd;
					var encrypt;
					encrypt = "";
					
					for(var i = 0; i < pwd.length-1; i++) //This code encrypts the password of the user so no one can hack into their ac
					{
						encrypt = encrypt + String.fromCharCode(pwd.charCodeAt(i) + 3);
					}
					return encrypt;
					
				}
 
 
//END OF TO DO*************************************************************