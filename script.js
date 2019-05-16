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
        } catch(err) {
            console.log(err);
        }
    });
}
