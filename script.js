 function volume_sphere(event) {
            event.preventDefault(); // Prevent form submission

            let r = document.getElementById('radius').value;
            let v = (4/3) * Math.PI * (r * r * r);

            document.getElementById('volume').value = v.toFixed(4);
        } 

        window.onload = function() {
            document.getElementById('MyForm').addEventListener('submit', volume_sphere);
        };
