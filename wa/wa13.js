let HR = {

    "employees": [{
        "name": "Sam", 
        "department": "Tech",
        "designation": "manager",
        "salary": 40000, 
        "raise-eligible": true
    }, {
            "name": "mary", 
            "department": "finance",
            "designation": "trainee",
            "salary": 18500, 
            "raise-eligible": true
    }, {
            "name": "Bill", 
            "department": "HR",
            "designation": "Executive",
            "salary": 21200, 
            "raise-eligible": false
    } ]
}
let company = {
    "companyInfo":[
        {
            "companyName": "Tech Stars",
            "website": "www.techstars.site",
            "employees": HR["employees"]
        }

    ]
}
//Q1
console.log(HR["employees"]);

//Q2
console.log(company["companyInfo"]);

//Q3
HR["employees"].push(
    {
    "name": "Anna", 
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600, 
    "raise-eligible": false
    });
console.log(HR["employees"][3]);

//Q4
let totalSalary = 0;
for (let i = 0; i < HR["employees"].length; i++){
    //totalSalary = totalSalary + HR["employees"][i]["salary"];
    totalSalary += HR["employees"][i].salary;
}
console.log(totalSalary);

//Q5
function livingWage(){
    for (let i = 0; i< HR["employees"].length; i++){
    if (HR["employees"][i]["raise-eligible"] == true){
        HR["employees"][i]["salary"] = HR["employees"][i]["salary"]*1.1;
        HR["employees"][i]["raise-eligible"] = false;
        
    }
    console.log(HR["employees"]);
}}
livingWage();

//Q6
const wfh = ["Anna","Sam"]
for (let i = 0; i<HR["employees"].length; i++){
    if (wfh.includes(HR["employees"][i]["name"])){
        HR["employees"][i]["wfh"] = true;  
    } else {
        HR["employees"][i]["wfh"] = false;
    }
}
console.log(HR["employees"]);