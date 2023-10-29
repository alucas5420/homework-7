var LISTS = [
    {
    name: "Generation 1",
    Listitems: [
        {
            name: "Pokèmon Red",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Blue",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Yellow",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 2",
    Listitems: [
        {
            name: "Pokèmon Gold",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Silver",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Crystal",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 3",
    Listitems: [
        {
            name: "Pokèmon Ruby",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Sapphire",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Emerald",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 4",
    Listitems: [
        {
            name: "Pokèmon Diamond",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Pearl",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Platinum",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 5",
    Listitems: [
        {
            name: "Pokèmon Black",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon White",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Black 2",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon White 2",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 6",
    Listitems: [
        {
            name: "Pokèmon X",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Y",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 7",
    Listitems: [
        {
            name: "Pokèmon Sun",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Moon",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Ultra Sun",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Ultra Moon",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 8",
    Listitems: [
        {
            name: "Pokèmon Sword",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Shield",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Generation 9",
    Listitems: [
        {
            name: "Pokèmon Scarlet",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon Violet",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
{
    name: "Spin-offs",
    Listitems: [
        {
            name: "Pokèmon Colosseum",
            checked: false,
            category: "Pokèmon",
        },
        {
            name: "Pokèmon XD: Gale of Darkness",
            checked: false,
            category: "Pokèmon",
        },
    ],
},
];

function itemChecked (element, listIndex, itemIndex) {
    $(element).parent().toggleClass("strike");
    let checkedValue = !LISTS[listIndex].Listitems[itemIndex].checked;
    LISTS[listIndex].Listitems[itemIndex].checked = checkedValue;
    // console.log("checked ", LISTS);
}

function addItem(listIndex) {
    let newItemName = $("#addItem").val();
    let newItemObj = {
        name: newItemName,
        checked: false,
        category: "",
    };
    LISTS[listIndex].Listitems.push(newItemObj);
    loadListItems(listIndex);
}

function deleteItem (listIndex, index) {
    LISTS[listIndex].Listitems.splice(index, 1);
    loadListItems(listIndex);

}

function loadListItems (listIndex) {
    let listString = `<div class="back" onclick="loadLists()">BACK</div><br><ul>`;
    $.each(LISTS[listIndex].Listitems, function (index, ListItem){
        listString += `<li id="${index}" class="${ListItem.checked ? "strike": ""}"><input ${ListItem.checked ? (checked = "checked"): ""
    } type = "checkbox" id="${index}" name="" onclick="itemChecked(this, ${listIndex}, ${index} )">
    
    <span>${ListItem.name}</span>
    <span class="delete" onclick = "deleteItem(${listIndex}, ${index})">Delete</span>
    
    </li>`;

    });
    listString += `<br></ul>
    <div class="addItemInput">
    <input id="addItem" type="text">
    <div class="back" onclick="addItem(${listIndex})">Add</div>
    </div>`;
    $("#app2").html(listString);

}

function loadLists() {
    let listString = "<ul>";
    $.each(LISTS, function (index, list){
        listString += `<li id="${index}" onclick="loadListItems(${index})">${list.name}
        <span class="right">Items: ${list.Listitems.length}</span></li>`;
    });
    listString += "</ul>";
    $("#app2").html(listString);
}

function initListeners() {

}

var CAMP = [
    {
        campTitle: "Generation 1",
        campThumbImg: "yellow.webp",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Red/Blue/Yellow",
        campDescription: "",
    },
    {
        campTitle: "Generation 2",
        campThumbImg: "cry.jpg",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Gold/Silver/Crystal",
        campDescription: "",
    },
    {
        campTitle: "Generation 3",
        campThumbImg: "emerald.jpg",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Ruby/Sapphire/Emerald",
        campDescription: "",
    },
    {
        campTitle: "Generation 4",
        campThumbImg: "platinum_150.jpg",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Diamond/Pearl/Platinum",
        campDescription: "",
    },

    {
        campTitle: "Generation 5",
        campThumbImg: "bw2.jpg",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Black/White/Black 2/White 2",
        campDescription: "",
    },
    {
        campTitle: "Generation 6",
        campThumbImg: "xy.jpg",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon X/Y",
        campDescription: "",
    },
    {
        campTitle: "Generation 7",
        campThumbImg: "ultra.webp",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Sun/Moon/Ultra Sun/Ultra Moon",
        campDescription: "",
    },
    {
        campTitle: "Generation 8",
        campThumbImg: "swsh.jpg",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Sword/Shield",
        campDescription: "",
    },
    {
        campTitle: "Generation 9",
        campThumbImg: "sv.png",
        campFullImg: "",
        campBriefDescription: "This generation introduced the world to Pokèmon Scarlet/Violet",
        campDescription: "",
    },
    {
        campTitle: "Spin-offs",
        campThumbImg: "xd.png",
        campFullImg: "",
        campBriefDescription: "These games introduced the world to Pokèmon Colosseum and XD: Gale of Darkness",
        campDescription: "",
    },

];

function loadData() {
    $.each(CAMP, function(index, camp){
    $("#app").append(`
    <div id="${index}" class="camp-holder">
    <br>
    <h4>${camp.campTitle}</h4>
    <div class="camp-image">
        <img src="images/games_thumb/${camp.campThumbImg}" 
        alt="${camp.campTitle}"/>
    </div>
        <div class="brief-rating">
        <br>
            <div class="brief-des">
                ${camp.campBriefDescription}
            </div>
        </div>
</div>`);
    });
     initListeners();
}

function initListeners() {
    $(".camp-holder").click(function(e){
        let campIndex = e.currentTarget.id;
        $("#app").html(`<div class="camp-holder">
        <br>
        <h4>${CAMP[campIndex].campTitle}</h4>
        <div class="camp-image">
            <img src="images/games_thumb/${CAMP[campIndex].campThumbImg}" 
            alt="${CAMP[campIndex].campThumbImg}"/>
        </div>
            <div class="brief-rating">
            <br>
                <div class="brief-des">
                    ${CAMP[campIndex].campBriefDescription}
                </div>
            </div>
            <br>
            <div class="close">CLOSE</div>
            <br>
            </div>`);

            addCloseListener();

    });
}

function addCloseListener(){
    $(".close").click(function(){
        $("#app").html("");
        loadData();
    });
};

$(document).ready(function(){
    loadData();

});

$(document).ready(function(){
    initListeners();
});