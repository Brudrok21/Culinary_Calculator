
let ObjectFastInputIngredients = {
    colorBnt: ["grey","green-dark","blue-white","orange","blue", "green", "red", "yellow", "purple", "blue-light", "orchid"],
    fonImg:["fon-biscuit" , "fon-biscuit2-human","fon_apricot_food_fruit_fruits_icon","fon_baker_bakery_cake_dessert_food_icon",
    "fon_baker_bakery_cupcake_dessert_food_icon","fon_baker_bakery_dessert_food_pie_icon","fon_baker_bakery_dessert_food_pretzel_icon",
    "fon_cake_dessert_sweet_food_christmas_icon","fon_food_fruit_fruits_pear_icon","fon_juicy",
     "fon-bonbon","fon-cake","fon-candy","fon-condy","fon-Croissant","fon-cupcake","fon-icecream","fon-icecream2","apple_icon","grape_icon","strawberry_icon"],
    fust_input_wet: [
        egg = {
            name: "Яйцо",
            url: "error.svg"
        },
        milk = {
            name: "Mолоко",
            url: "error.svg"
        },
        kefir = {
            name: "Кефир",
            url: "error.svg"
        },
        butter = {
            name: "Mасло сливочное",
            url: "error.svg"
        },
        vegetable_oil={
            name:  "Масло подсолнечное",
            url: "error.svg"
        },
        water ={
            name: "Вода",
            url: "error.svg"
        },
        cream = {
            name:"Cливки",
            url: "error.svg"
        },
        cream_cheese = {
            name: "Сливочное сыр",
            url: "error.svg"
        },
        liquid_vanillin = {
            name: "Bанилин жидкий",
            url: "error.svg"
        },
        condensed_milk = {
            name: "Mолоко сгущённое",
            url: "error.svg"
        },
        boiled_condensed_milk = {
            name: "Mолоко сгущённое вареное",
            url: "error.svg"
        }

    ],
    fust_input_dry: [ 
        flour = {
            name: "Мука",
            url: "error.svg"
        },
        dry_yeast ={
            name: "Дрожжи сухие",
            url: "error.svg"
        }, yeast_on_substrate ={
            name: "Дрожжи на субстрате",
            url: "error.svg"
        }, sugar ={
            name: "Сахар",
            url: "error.svg"
        }, salt = {
            name: "Соль",
            url: "error.svg"
        }, cocoa = {
            name: "Kакао",
            url: "error.svg"
        }, instant_coffee={
            name: "Кофе растворимый",
            url: "error.svg"
        }, vanilla_sugar={
            name:"Bанильный сахар",
            url: "error.svg"
        }, vanillin_powder={
            name:"Bанилин порошок",
            url: "error.svg"
        }, baking_powder ={
            name:"Pазрыхлитель",
            url: "error.svg"
        }, chocolate ={
            name:"Шоколад",
            url: "error.svg"
        } 
    ],
    fust_input_nut:[
        Almond={
            name:"Миндаль",
            url: "error.svg"
        }, sesame ={
            name:"Kунжут",
            url: "error.svg"
        }, walnut ={
            name:"Грецкий орех",
            url: "error.svg"
        }, cashew = {
            name:"Kешью",
            url: "error.svg"
        }, peanut ={
            name:"Aрахис",
            url: "error.svg"
        }, coconut ={
            name:"Кокос",
            url: "error.svg"
        }
    ],
    fust_input_fruits: [
        apple = {
            name: "Яблоко",
            url: "apple_icon.svg"
        },
        banana = {
            name: "Банан",
            url: "banana_icon.png"
        },
        grape = {
            name: "Виноград",
            url: "grape_icon.svg"
        },
        strawberry = {
            name: "Клубника",
            url: "strawberry_icon.svg"
        },
        pineapple={
            name:"Aнанас",
            url: "error.svg"
        }, lemon ={
            name:"Лимон",
            url: "error.svg"
        }, blueberry={
            name:"Черника",
            url: "error.svg"
        }, currant={
            name:"Cмородина",
            url: "error.svg"
        }, quince={
            name:"Aйва",
            url: "error.svg"
        } 
    ],
    fust_input_dried_fruits: [
        raisins={
            name:"Изюм",
            url: "error.svg"
        }, prunes ={
            name:"Чернослив",
            url: "error.svg"
        }, dried_apricots ={
            name:"Курага",
            url: "error.svg"
        }, figs ={
            name:"Инжир",
            url: "error.svg"
        }, dates ={
            name:"Финики",
            url: "error.svg"
        }, candied_fruit={
            name:"Цукаты",
            url: "error.svg"
        } 
    ],
    fust_input_other: [
        pumpkin={
            name:"Тыква",
            url: "error.svg"
        }, carrot={
            name:"Морковь",
            url: "error.svg"
        }, wasabi={
            name:"Васаби",
            url: "error.svg"
        }, red_pepper={
            name:"Красный перец",
            url: "error.svg"
        }, ginger={
            name:"Имбирь",
            url: "error.svg"
        }, mint={
            name:"Мята",
            url: "error.svg"
        }
    ], 
}; 

let SAVEOBJ = new Object();
let cookieSAVEOBJ = new Object();
let SAVERECIPT = new Object();

let search_FastIngredients = document.querySelectorAll(".search_FastIngredients");
let fust_input_ingredients = document.querySelector("#fust_input_ingredients");
let fust_input_fruits = document.querySelector("#fust_input_fruits");

let addNewForm = document.querySelector("#addNewForm");
let enterForm = document.querySelector("#enterForm");
let mainInpIngredients = document.querySelector("#mainInpIngredients");

let mainInpGram = document.querySelector("#mainInpGram");
let mainInpGramPlus = document.querySelector("#mainInpGramPlus");


let GoCount = document.querySelector("#GoCount");
let AddR = document.querySelector("#AddR");

let fon = document.querySelectorAll(".fon");
function randomUrlForImg(){
    fon.forEach(function(item){
        let random = Math.floor(Math.random()*(fon.length)); 
        item.src = `../assets/Images/fon/`+ ObjectFastInputIngredients.fonImg[random] +`.svg`;
        console.log(item.has)
    });
}randomUrlForImg();
 

let btn_delete_text = document.querySelector("#btn_delete_text").onclick = function () {
    mainInpIngredients.value = "";
    mainInpGram.value = "";
    mainInpGramPlus.value = "";
}
let DeleteAll = document.querySelector("#DeleteAll").onclick = function () {
    enterForm.dataset.formlenght = "false";
    enterForm.innerHTML = "";
    mainInpIngredients.value = "";
    mainInpGram.value = "";
    mainInpGramPlus.value = "";
    deleteCookie();
};
let saveRecipe = document.querySelector("#saveRecipe").onclick = function () {
    let NameRecept = prompt('Назовите рецепт');
    let keys = Object.keys(SAVERECIPT);
    pushSaveObject();
    SAVERECIPT[keys.length] = SAVEOBJ;
    SAVERECIPT[keys.length].NameRecept = NameRecept;
 
    AddRecipe();
    saveCookieRecipe();
    use_UseThisR();
    click_DelThisR();
}





function saveCookieRecipe() {
    let date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = "SAVERECIPT" + "=" + JSON.stringify(SAVERECIPT) + expires + "; path=/";
}

function loadCookieRecipe() {
    let name = "SAVERECIPT=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            SAVERECIPT = JSON.parse(c.substring(name.length, c.length));

            return c.substring(name.length, c.length);
        }
    }
    return "";
} loadCookieRecipe();

function AddRecipe() {
    let AddR = document.querySelector("#AddR");
    let keys = Object.keys(SAVERECIPT);
    AddR.innerHTML = "";
    keys.forEach(function (element, i) {
        AddR.insertAdjacentHTML("beforeend", `  
        <div data-pass="${SAVERECIPT[element].pass}" class="thisRecipt">
            <div class="flex space-between styledivform2 wrap">
                <div>
                    <h3 class="R_name">${SAVERECIPT[element].NameRecept}</h3>
                </div>
                
                <div class="flex wrap">
                    <button data-id="${element}" data-pass="${SAVERECIPT[element].pass}" data-color="green" class="iconBtn UseThisR">Использовать</button>
                    <button data-id="${element}" data-pass="${SAVERECIPT[element].pass}" data-color="red" class="iconBtn DelThisR">Удалить</button>
                </div> 
            </div>
            
            <div class="flex column styleP">
                <p class="R_main"><span>${SAVERECIPT[element].Main.name}:</span> <span>${SAVERECIPT[element].Main.result}<i>грам</i></span></p> 
            </div>
            <div data-text="${SAVERECIPT[element].pass}" class="flex column styleP searchthiP"> 
            </div>
        </div>`
        );

        let keysTwo = Object.keys(SAVERECIPT[element]);
        let searchthiP = document.querySelectorAll(".searchthiP");
        searchthiP.forEach(function (el) {
            if (el.dataset.text === String(SAVERECIPT[element].pass)) {
                keysTwo.forEach(function (elementTwo) {
                    let keysNUM = Number(elementTwo);
                    if (Number.isNaN(keysNUM) == false) {
                        el.insertAdjacentHTML("beforeend",
                            `<p class="R_dop"><span>${SAVERECIPT[element][elementTwo].name}:</span> <span>${SAVERECIPT[element][elementTwo].result}<i>грам</i></span></p>`);
                    }
                });
            }
        });

    });
} AddRecipe()


function click_DelThisR() {
    let DelThisR = document.querySelectorAll(".DelThisR");
    let thisRecipt = document.querySelectorAll(".thisRecipt");
    DelThisR.forEach(function (el, i) {
        el.addEventListener("click", function () {
            if (el.dataset.pass == thisRecipt[i].dataset.pass) {
                thisRecipt[i].remove();
                delete SAVERECIPT[el.dataset.id];
                saveCookieRecipe();
            }
        });
    });
} click_DelThisR();

function use_UseThisR() {
    let UseThisR = document.querySelectorAll(".UseThisR");
    UseThisR.forEach(function (el, i) {
        el.addEventListener("click", function () {
            enterForm.innerHTML = "";
            mainInpIngredients.value = SAVERECIPT[el.dataset.id].Main.name;
            mainInpGram.value = SAVERECIPT[el.dataset.id].Main.result;
            mainInpGramPlus.value = "";
            let keys = Object.keys(SAVERECIPT[el.dataset.id]);
            keys.forEach(function (element, i) {
                let keysNUM = Number(element);
                if (Number.isNaN(keysNUM) == false) {
                    enterForm.insertAdjacentHTML("beforeend", `
                    <div class="flex space-between styledivform2">
                        <div class="formStyle">
                            <input type="text" placeholder="Название ингредиента" value="${SAVERECIPT[el.dataset.id][element].name}" class="ValueInpName">
                            <input type="text" placeholder="грам" value="${SAVERECIPT[el.dataset.id][element].result}" class="InpGram checkNumber">
                            <span class="result">??</span>
                        </div> 
                        <div class="div_btn_delete"> 
                            <button class="btn_delete">
                                <?xml version="1.0" ?><svg style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit"/></g></svg>
                            </button>
                        </div> 
                    </div>`);
                }
            });
            click_deleteForm();

        });
    });
} use_UseThisR();
 

function forEachFastIngredients() {

    search_FastIngredients.forEach(function (element) {
        let dataID = element.dataset.id;
        let key = Object.keys(ObjectFastInputIngredients);
        key.forEach(function (keyEl) {
            if (keyEl == dataID) {
                ObjectFastInputIngredients[keyEl].forEach(function (el) {
                    let random = Math.floor(Math.random() * ObjectFastInputIngredients.colorBnt.length);
                    element.insertAdjacentHTML("beforeend", `
                     <button data-name="${el.name}" data-color="${ObjectFastInputIngredients.colorBnt[random]}" class="iconBtn fastinpbtn"><img data-url="${el.url}" class="fastimg_icon" src="./assets/Images/icon/${keyEl}/${el.url}"><span>${el.name}</span></button>
                     `);
                });
            }
        });

    });

    click_fastinpbtn();
} forEachFastIngredients();


function click_fastinpbtn() {
    let fastinpbtn = document.querySelectorAll(".fastinpbtn");
    fastinpbtn.forEach(function (element) {
        element.addEventListener("click", function (e) {
            if (mainInpIngredients.value == "") {
                mainInpIngredients.value = element.dataset.name;
            } else {
                enterForm.dataset.formlenght = "true";
                enterForm.insertAdjacentHTML('beforeend', `
                <div class="flex space-between styledivform2">
                    <div class="formStyle">
                        <input type="text" class="ValueInpName" value="${element.dataset.name}" placeholder="Название ингредиента">
                        <input type="text" class="InpGram checkNumber" placeholder="грам">
                        <span class="result">??</span>
                    </div>
                    <div class="div_btn_delete"> 
                        <button class="btn_delete">
                            <?xml version="1.0" ?><svg style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit"/></g></svg>
                        </button>
                    </div> 
                </div>
                `);
            }
            click_deleteForm();
        });
    });
};



// body.style.overflow = (body.style.overflow == "hidden" ? "auto" : "hidden"); children
function click_addNewForm() {
    addNewForm.addEventListener("click", function (e) {
        enterForm.dataset.formlenght = "true";
        enterForm.insertAdjacentHTML('beforeend', `
        <div class="flex space-between styledivform2">
            <div class="formStyle">
                <input class="ValueInpName" type="text" placeholder="Название ингредиента">
                <input class="InpGram checkNumber"  type="text" placeholder="грам">
                <span class="result">??</span>
            </div>
            <div class="div_btn_delete"> 
                <button class="btn_delete">
                    <?xml version="1.0" ?><svg style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit"/></g></svg>
                </button>
            </div> 
        </div> 
        `);

        click_deleteForm();
    });
} click_addNewForm()

function click_deleteForm() {
    if (enterForm.dataset.formlenght === "true") {
        let btn_delete = document.querySelectorAll(".btn_delete");
        btn_delete.forEach(function (element) {
            element.addEventListener("click", function (e) {
                element.parentElement.parentElement.remove();
                pushSaveObject();
                if (enterForm.children.length == 0) {
                    enterForm.dataset.formlenght = "false";
                }
                saveCookie()
            });
        });
    }
}


function click_GoCount() {
    GoCount.addEventListener("click", function (e) {

        let checkNumber = document.querySelectorAll(".checkNumber");

        checkNumber.forEach(function (element, index) {
            elem = Number(element.value);
            if (Number.isNaN(elem) == false) {
                pushSaveObject()
            } else {
                element.value = "";
            }
        });
        saveCookie();
    });
} click_GoCount();

function pushSaveObject() {
    let ValueInpName = document.querySelectorAll(".ValueInpName");
    let result = document.querySelectorAll(".result");
    let InpGram = document.querySelectorAll(".InpGram");
    let procent = (mainInpGramPlus.value / mainInpGram.value);
    SAVEOBJ = {};
    SAVEOBJ["Main"] = {
        "name": mainInpIngredients.value,
        "gram": mainInpGram.value,
        "result": mainInpGramPlus.value
    }
    SAVEOBJ["pass"] = Math.floor(Math.random() * 10000);

    InpGram.forEach(function (element, i) {
        result[i].textContent = Math.floor(element.value * procent);
        SAVEOBJ[i] = {
            "name": ValueInpName[i].value,
            "gram": InpGram[i].value,
            "result": result[i].textContent
        }
    }); 
};

// function save cookie SAVEOBJ
function saveCookie() {
    let date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = "SAVEOBJ" + "=" + JSON.stringify(SAVEOBJ) + expires + "; path=/";
}

// function delete cookie SAVEOBJ
function deleteCookie() {
    document.cookie = "SAVEOBJ" + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


// function load cookie SAVEOBJ
function loadCookie() {
    let name = "SAVEOBJ=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            cookieSAVEOBJ = JSON.parse(c.substring(name.length, c.length));
            SAVEOBJ = cookieSAVEOBJ;
            return c.substring(name.length, c.length);
        }
    }
    return "";
} loadCookie()


if (Object.keys(cookieSAVEOBJ).length !== 0) {

    let keys = Object.keys(cookieSAVEOBJ);
    keys.forEach(function (element, index) {
        if (element === "Main") {
            mainInpIngredients.value = cookieSAVEOBJ[element].name;
            mainInpGram.value = cookieSAVEOBJ[element].gram;
            mainInpGramPlus.value = cookieSAVEOBJ[element].result;
        } else if (element === "pass") { }
        else {
            enterForm.insertAdjacentHTML('beforeend', `
                <div class="flex space-between styledivform2">
                    <div class="formStyle">
                        <input class="ValueInpName" type="text" placeholder="Название ингредиента" value="${cookieSAVEOBJ[element].name}">
                        <input class="InpGram checkNumber" type="text" placeholder="грам" value="${cookieSAVEOBJ[element].gram}">
                        <span class="result">${cookieSAVEOBJ[element].result}</span>
                    </div> 
                    <div class="div_btn_delete"> 
                    <button class="btn_delete">
                        <?xml version="1.0" ?><svg style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit"/></g></svg>
                    </button>
                    </div>
                </div>
                `);
        }
    });
    if (enterForm.children.length !== 0) {
        enterForm.dataset.formlenght = "true";
    }
    click_deleteForm();
}
