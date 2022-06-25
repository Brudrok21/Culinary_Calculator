
let ObjectFastInputIngredients = {
    colorBnt: ["grey","green-dark","blue-white","orange","blue", "green", "red", "yellow", "purple", "blue-light", "orchid"],
    fonImg:["fon-biscuit" , "fon-biscuit2-human","fon_apricot_food_fruit_fruits_icon","fon_baker_bakery_cake_dessert_food_icon",
    "fon_baker_bakery_cupcake_dessert_food_icon","fon_baker_bakery_dessert_food_pie_icon","fon_baker_bakery_dessert_food_pretzel_icon",
    "fon_cake_dessert_sweet_food_christmas_icon","fon_food_fruit_fruits_pear_icon","fon_juicy",
     "fon-bonbon","fon-cake","fon-candy","fon-condy","fon-Croissant","fon-cupcake","fon-icecream","fon-icecream2","apple_icon","grape_icon","strawberry_icon"],
    fust_input_wet: [
        egg = {
            name: "Яйцо",
            url: "egg.svg"
        },
        milk = {
            name: "Mолоко",
            url: "milk.svg"
        },
        kefir = {
            name: "Кефир",
            url: "kefir.svg"
        },
        butter = {
            name: "Mасло сливочное",
            url: "butter.svg"
        },
        vegetable_oil={
            name:  "Масло подсолнечное",
            url: "oil.svg"
        },
        water ={
            name: "Вода",
            url: "water.svg"
        },
        cream = {
            name:"Cливки",
            url: "cream.png"
        },
        cream_chees = {
            name: "Сливочный сыр",
            url: "cheese-balls.png"
        },
        liquid_vanillin = {
            name: "Bанилин жидкий",
            url: "vanilla_liqiud.svg"
        },
        condensed_milk = {
            name: "Mолоко сгущённое",
            url: "milk_sgus.svg"
        },
        boiled_condensed_milk = {
            name: "Mолоко сгущённое вареное",
            url: "milk_sgus_var.svg"
        },
        cream = {
            name:"Крем",
            url:"cream.svg"
        },
        cream_cheese = {
            name:"Крем Чиз",
            url:"cream_cheese.svg"
        }

    ],
    fust_input_dry: [ 
        flour = {
            name: "Мука",
            url: "flour.svg"
        },
        dry_yeast ={
            name: "Дрожжи сухие",
            url: "yeasts.svg"
        }, yeast_on_substrate ={
            name: "Дрожжи на субстрате",
            url: "yeast.png"
        }, sugar ={
            name: "Сахар",
            url: "sugar.svg"
        }, salt = {
            name: "Соль",
            url: "salt.svg"
        }, cocoa = {
            name: "Kакао",
            url: "cacao.svg"
        }, instant_coffee={
            name: "Кофе растворимый",
            url: "coffee.svg"
        }, vanilla_sugar={
            name:"Bанильный сахар",
            url: "vanilla_sugar.svg"
        }, vanillin_powder={
            name:"Bанилин порошок",
            url: "syrup.png"
        }, baking_powder ={
            name:"Pазрыхлитель",
            url: "baking_powder.svg"
        }, chocolate ={
            name:"Шоколад",
            url: "chocolate.svg"
        } 
    ],
    fust_input_nut:[
        Almond={
            name:"Миндаль",
            url: "almond.svg"
        }, sesame ={
            name:"Kунжут",
            url: "sesame_seeds.svg"
        }, walnut ={
            name:"Грецкий орех",
            url: "walnut.svg"
        }, cashew = {
            name:"Kешью",
            url: "cashew.png"
        }, peanut ={
            name:"Aрахис",
            url: "peanut.png"
        }, coconut ={
            name:"Кокос",
            url: "coconut.png"
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
            url: "pineapple.png"
        }, lemon ={
            name:"Лимон",
            url: "lemon.png"
        }, blueberry={
            name:"Черника",
            url: "blueberries.png"
        }, currant={
            name:"Cмородина",
            url: "currant.png"
        }, quince={
            name:"Aйва",
            url: "quince.png"
        } 
    ],
    fust_input_dried_fruits: [
        raisins={
            name:"Изюм",
            url: "raisins.png"
        }, prunes ={
            name:"Чернослив",
            url: "prunes.png"
        }, dried_apricots ={
            name:"Курага",
            url: "dried_apricots.png"
        }, figs ={
            name:"Инжир",
            url: "figs.png"
        }, dates ={
            name:"Финики",
            url: "dates.png"
        }, candied_fruit={
            name:"Цукаты",
            url: "candied_fruit.png"
        } 
    ],
    fust_input_other: [
        pumpkin={
            name:"Тыква",
            url: "pumpkin.png"
        }, carrot={
            name:"Морковь",
            url: "carrot.png"
        }, wasabi={
            name:"Васаби",
            url: "wasabi.png"
        }, red_pepper={
            name:"Красный перец",
            url: "red_pepper.png"
        }, ginger={
            name:"Имбирь",
            url: "ginger.png"
        }, mint={
            name:"Мята",
            url: "mint.png"
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

let checkSave =document.querySelector("#checkSave");
 

let GoCount = document.querySelector("#GoCount");
let AddR = document.querySelector("#AddR");

let fon = document.querySelectorAll(".fon");
function randomUrlForImg(){
    fon.forEach(function(item){
        let random = Math.floor(Math.random()*(fon.length)); 
        item.src = `./assets/Images/fon/`+ ObjectFastInputIngredients.fonImg[random] +`.svg`;
 
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
    let description = prompt('Краткое описание');
    let keys = Object.keys(SAVERECIPT);
    pushSaveObject();
    SAVERECIPT[keys.length] = SAVEOBJ;
    SAVERECIPT[keys.length].NameRecept = NameRecept;
    SAVERECIPT[keys.length].description = description;
 
    AddRecipe();
    saveCookieRecipe();
    use_UseThisR();
    click_DelThisR();
    showRecipe();
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
            <div class="flex space-between styledivform2 wrap align-i-c">
                <div>
                    <h3 class="R_name">${SAVERECIPT[element].NameRecept}</h3>
                </div>
                
                <div class="flex wrap">
                    <button data-id="${element}" data-pass="${SAVERECIPT[element].pass}" data-color="green" class="iconBtn UseThisR">Использовать</button>
                    <button data-id="${element}" data-pass="${SAVERECIPT[element].pass}" data-color="red" class="iconBtn DelThisR">Удалить</button>
                </div> 
            </div>
            <div>
                <p>${SAVERECIPT[element].description = (SAVERECIPT[element].description == undefined ? "" : SAVERECIPT[element].description)}</p>
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
                showRecipe();
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
            enterForm.dataset.formlenght = "true";
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
                     <button data-name="${el.name}" data-color="${ObjectFastInputIngredients.colorBnt[random]}" class="iconBtn fastinpbtn px-5"><img data-url="${el.url}" class="fastimg_icon" src="./assets/Images/icon/${keyEl}/${el.url}"><span>${el.name}</span></button>
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
        console.log(btn_delete);
        btn_delete.forEach(function (element) { 
            element.addEventListener("click", function (e) { 
                console.log(element)
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
        result[i].textContent = Math.fround(element.value * procent ).toFixed(1) ;
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

function showRecipe(){
    let keyRecipe = Object.keys(SAVERECIPT);
    if(keyRecipe.length == 0){
        checkSave.style.display = "none";
    }else{
        checkSave.style.display = "flex";
    } 
}showRecipe();


// let testSVG = document.getElementById("testSVG");
// let child = testSVG.children;
 
// for(let i = 0; i < child.length; i++){
//   let elem = child[i];
//   if(elem.tagName === "path"){
    
//     console.dir(i+ "---" +  Math.round(elem.getTotalLength()));
//     console.log(elem);
//   }
// }