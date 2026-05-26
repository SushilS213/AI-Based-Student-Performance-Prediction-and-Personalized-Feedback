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

    document.getElementById("name").innerText = data.Name;
    document.getElementById("roll").innerText = data.Roll_No;
    document.getElementById("branch").innerText = data.Branch;
    document.getElementById("semester").innerText = data.Semester;
    document.getElementById("Gender").innerText = data.Gender;
    document.getElementById("attandance").innerText = data.Attandance;

    document.getElementById("math").innerText = data.Maths;
    document.getElementById("ds").innerText = data.DS;
    document.getElementById("os").innerText = data.OS;
    document.getElementById("dbms").innerText = data.DBMS;
    document.getElementById("ai").innerText = data.AI;


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

      let keys = Object.keys(data);
  console.log(keys)
  document.getElementById("sub1").innerText = keys[16];
  document.getElementById("sub2").innerText = keys[9];
  document.getElementById("sub3").innerText = keys[20];
  document.getElementById("sub4").innerText = keys[8];
  document.getElementById("sub5").innerText = keys[0];

    document.getElementById("result").innerHTML =
      `Predicted Performance: <b style="color:green">${result}</b>
       <br> Expected Percentage: <b>${avg.toFixed(2)}%</b>`;

    let progressBars = document.querySelectorAll(".progress div")

progressBars[0].style.width = maths + "%"
progressBars[1].style.width = ds + "%"
progressBars[2].style.width = os + "%"   
progressBars[3].style.width = dbms + "%"
progressBars[4].style.width = ai + "%"
  });