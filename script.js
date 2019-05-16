window.onload = function () {
    document.getElementById("foodSubmit").addEventListener("click", async function(event) {
        event.preventDefault();
        const value = document.getElementById("foodInput").value;
        if (value === "") {
            return;
        }
        console.log(value);
        const url = "https://trackapi.nutritionix.com/v2/natural/nutrients";

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': '0c5f02ac',
                'x-app-key': 'a8e50eaa95fa830cd8bdd2697f1ebbae'
            },
            body:' {"query":"' + value + '"}'
        };
        try {
            const response = await fetch(url, settings);
            const json = await response.json();
            console.log(json);
            let results = "";
            results += "<h2 class='underline'>Nutrition Information</h2>";
            results += '<div class="d-flex flex-wrap">';
            for (let i=0; i < json.foods.length; i++) {
                
                results += "<div class=\"p-flex\"><h4>" + json.foods[i].serving_qty + " " + json.foods[i].serving_unit + " " +
                    json.foods[i].food_name + ":</h4>";
                results += "<table>";
                if (json.foods[i].nf_calories) {
                    results += "<tr><td><b>Calories:</b></td> <td class='rightalign'><b>" + json.foods[i].nf_calories + "</b></td></tr>";
                }
                if (json.foods[i].nf_total_fat) {
                    results += "<tr><td>Total Fat:</td> <td class='rightalign'>" + json.foods[i].nf_total_fat + "g</td></tr>";
                }
                if (json.foods[i].nf_saturated_fat) {
                    results += "<tr><td class='tab'>Saturated Fat:</td> <td class='rightalign'>" + json.foods[i].nf_saturated_fat + "g</td></tr>";
                }
                if (json.foods[i].nf_cholesterol) {
                    results += "<tr><td>Cholesterol:</td> <td class='rightalign'>" + json.foods[i].nf_cholesterol + "mg</td></tr>";
                }
                if (json.foods[i].nf_sodium) {
                    results += "<tr><td>Sodium:</td> <td class='rightalign'>" + json.foods[i].nf_sodium + "mg</td></tr>";
                }
                if (json.foods[i].nf_total_carbohydrate) {
                    results += "<tr><td>Total Carbohydrate:</td> <td class='rightalign'>" + json.foods[i].nf_total_carbohydrate + "g</td></tr>";
                }
                if (json.foods[i].nf_dietary_fiber) {
                    results += "<tr><td class='tab'>Dietary Fiber:</td> <td class='rightalign'>" + json.foods[i].nf_dietary_fiber + "g</td></tr>";
                }
                if (json.foods[i].nf_sugars) {
                    results += "<tr><td class='tab'>Sugars:</td> <td class='rightalign'>" + json.foods[i].nf_sugars + "g</td></tr>";
                }
                if (json.foods[i].nf_protein) {
                    results += "<tr><td>Protein:</td> <td class='rightalign'>" + json.foods[i].nf_protein + "g</td></tr>";
                }
                if (json.foods[i].nf_potassium) {
                    results += "<tr><td>Potassium:</td> <td class='rightalign'>" + json.foods[i].nf_potassium + "mg</p></td></tr>";
                }
                results += "</table></div>";
            }
            results += "</div>";
            document.getElementById("nutritionResults").innerHTML = results;
        } catch(err) {
            console.log(err);
        }
    });
}

var currentBackground = "background1";
function clickedButton() {
    if(currentBackground == "background1") {
        document.body.style.backgroundImage = "url()";
        document.body.style.backgroundColor = "rgba(188, 241, 181, 0.93)";
        currentBackground = "background2";
    }
    else {
        document.body.style.backgroundImage = "url('Images/healthyFoods.jpeg')";
        currentBackground = "background1";
        document.body.style.backgroundColor = "rgba(255, 255, 255, 0.91)";
    }
}

