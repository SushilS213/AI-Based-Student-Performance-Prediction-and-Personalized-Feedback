fetch("/api/student")
  .then(res => res.json())
  .then(data => {

    if (data.error) {
      alert(data.error);
      return;
    }
    let maths = Number(data.Maths);
    let ds = Number(data.DS);
    let os = Number(data.OS);
    let dbms = Number(data.DBMS);
    let ai = Number(data.AI);
    let branch = data.Branch;

    let avg = (maths + ds + os + dbms + ai) / 5;
    let result = "";

    if (avg >= 80) {
        result = "Excellent";
    } else if (avg >= 60) {
        result = "Good";
    } else if (avg >= 40) {
        result = "Average";
    } else {
        result = "Poor";
    }
    
    document.getElementById("roll").innerText = data.Roll_No;
    document.getElementById("name").innerText = data.Name;
    document.getElementById("Gender").innerText = data.Gender;
    document.getElementById("semester").innerText = data.Semester;
    document.getElementById("branch").innerText = data.Branch;
    document.getElementById("attandance").innerText = data.Attandance;


    document.getElementById("math").innerText = data.Maths;
    document.getElementById("ds").innerText = data.DS;
    document.getElementById("os").innerText = data.OS;
    document.getElementById("dbms").innerText = data.DBMS;
    document.getElementById("ai").innerText = data.AI;
    
    document.getElementById("FP").innerText = avg;
    document.getElementById("PP").innerText = result;
    

    document.getElementById("fname").innerText = data.Father_Name;
    document.getElementById("mname").innerText = data.Mother_Name;
    document.getElementById("DOB").innerText = data.Date_of_Birth;
    document.getElementById("BG").innerText = data.Blood_Group;

    document.getElementById("Age").innerText = data.Age;
    document.getElementById("City").innerText = data.City;
    document.getElementById("Pincode").innerText = data.Pincode;
    document.getElementById("State").innerText = data.State;
    document.getElementById("Country").innerText = data.Country;
    document.getElementById("mobile").innerText = data.Mobile_Number;
    document.getElementById("address").innerText = data.Address;
    document.getElementById("mail_ID").innerText = data.Email_ID;
    document.getElementById("Participant").innerText = data.Participant;
    document.getElementById("Game").innerText = data.Game;
    
    // CE = 318, ECE = 317, CSE = 298, IT = 292, ME = 275
    
  let keys = Object.keys(data);
  console.log(keys)
  document.getElementById("sub1").innerText = keys[16];
  document.getElementById("sub2").innerText = keys[9];
  document.getElementById("sub3").innerText = keys[20];
  document.getElementById("sub4").innerText = keys[8];
  document.getElementById("sub5").innerText = keys[0];
   
  
  });