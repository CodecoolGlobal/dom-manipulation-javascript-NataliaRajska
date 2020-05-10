function main() {
    let addButton = document.getElementById("add_row");
    addButton.addEventListener('click', myFunction);

    function myFunction(event) {
        addRow();
    }

    let elements = document.getElementsByTagName("label");

    function addRow() {
        if (elements.length >= 10) {
            alert("You can add only  10.")
        } else {
            let maxID = 1;
            let temp_number;
            for (element of elements) {
                let elementID;
                temp_number = element.innerText.slice(5);
                if (temp_number.slice(1) === ":") {
                    elementID = temp_number.slice(0, 1);
                } else if (temp_number.slice(2) === ":") {
                    elementID = temp_number.slice(0, 2);
                }
                if (parseInt(elementID) > parseInt(maxID)) {
                    maxID = parseInt(elementID);
                }
            }
            

            let rowID = parseInt(maxID) + 1;
            let f = document.createElement("form");
            f.setAttribute('method', 'GET');
            f.setAttribute('id', `form_item_${rowID}`);
            f.innerHTML = `<label for="item_${rowID}">Item ${rowID}:</label><input type="text" name="item_${rowID}" id="item_${rowID}"/> <button type="button" class="remover" id="_${rowID}">Remove</button> <br/>`

            document.querySelector(".container").appendChild(f);

            let buttons = document.querySelectorAll(".remover");
            for (button of buttons) {
                button.addEventListener('click', handleRemove);
            }

            function handleRemove(event) {
                this.parentNode.remove();
            }

        }
    }

}

main();
