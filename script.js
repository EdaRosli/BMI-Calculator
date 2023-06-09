const btn = document.getElementById('calculate');

btn.addEventListener('click', function()
{

    let name = document.querySelector('#name').value;
    let datetime = document.querySelector('#datetime').value;
    let categories = document.querySelector('#categories').value;
    let age = document.querySelector('#age').value;
    let gender = document.querySelector('#gender').value;
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let activity = document.querySelector('#activity').value

    if(name == ''|| datetime == '' || categories == '' || age == '' || gender == '' || height == '' || weight == '' || activity == ''){
        alert('Please fill in the blank ! ');
        return;
    }


    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5){
        status = "Underweight. You may develop respiratory and digestive disease.";
    }
    if(BMI >=18.5 && BMI < 25){
        status = "Normal / Healthy. Keep going. ";
    }
    if(BMI >=25 && BMI < 30){
        status = "Overweight. You may develop blood circulation disease, hypertension.";
    }
    if(BMI >=30){
        status = "Obese. You may develop diabetes, heart disease, and some cancers.";
    }

    document.getElementById("demo").innerHTML = "<strong>Information : </strong> " + name + "   ,   "  + gender + "   ,   "  + age +"   ,   " + categories + "   ,   " + datetime + "   ,   " + activity;  
    document.querySelector('.comment').innerHTML = `<strong>Comment : </strong> You are <span id="comment">${status}</span>`;
    
});