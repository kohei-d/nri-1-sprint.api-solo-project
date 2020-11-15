

function addPrefecture() {
    const additionalPref = document.getElementById("additionalPref").value
    const additionalPrefJson = { name: additionalPref };
    const element = document.getElementById("tableB")
    const trTitle = document.createElement("tr")
    const titleId = document.createElement("th")
    const titleName = document.createElement("th")
    titleId.textContent = "ID";
    titleName.textContent = "NAME";
    trTitle.appendChild(titleId);
    trTitle.appendChild(titleName);
    element.appendChild(trTitle);
    console.log(additionalPrefJson)
    fetch('http://localhost:3000/prefs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(additionalPrefJson),
        mode: "cors"
    }).then(value => value.json())
        .then(value => {
            const tdElement1 = document.createElement("td")
            tdElement1.textContent = value.id
            element.appendChild(tdElement1);
            const tdElement2 = document.createElement("td")
            tdElement2.textContent = value.name
            element.appendChild(tdElement2);
        })
}
function getPrefectures() {
    const element = document.getElementById("tableA")
    const trTitle = document.createElement("tr")
    const titleId = document.createElement("th")
    const titleName = document.createElement("th")
    titleId.textContent = "ID";
    titleName.textContent = "NAME";
    trTitle.appendChild(titleId);
    trTitle.appendChild(titleName);
    element.appendChild(trTitle);
    fetch('http://localhost:3000/prefs')
        .then(value => value.json())
        .then(value => {
            value.forEach((value) => {
                const trElement = document.createElement("tr")
                const tdElement1 = document.createElement("td")
                const tdElement2 = document.createElement("td")
                tdElement1.textContent = value.id
                trElement.appendChild(tdElement1);
                tdElement2.textContent = value.name
                trElement.appendChild(tdElement2);
                element.appendChild(trElement);
            })
        })
}
function updatePrefecture() {
    const updatePrefId = Number(document.getElementById("updatePrefId").value)
    const updatePrefName = document.getElementById("updatePrefName").value
    const updatePrefJson = { id:updatePrefId, name: updatePrefName };
    const element = document.getElementById("tableC")
    const trTitle = document.createElement("tr")
    const titleId = document.createElement("th")
    const titleName = document.createElement("th")
    titleId.textContent = "ID";
    titleName.textContent = "NAME";
    trTitle.appendChild(titleId);
    trTitle.appendChild(titleName);
    element.appendChild(trTitle);
    fetch('http://localhost:3000/prefs', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatePrefJson),
        mode: "cors"
    }).then(value => value.json())
        .then(value => {
            const tdElement1 = document.createElement("td")
            tdElement1.textContent = value.id
            element.appendChild(tdElement1);
            const tdElement2 = document.createElement("td")
            tdElement2.textContent = value.name
            element.appendChild(tdElement2);
        })
}
function deletePrefecture() {
    const updatePrefId = document.getElementById("deletePrefId").value
    fetch('http://localhost:3000/prefs/'+ updatePrefId, {
        method: "DELETE",
        mode: "cors"
    }).then(value => {
        console.log(value.status)
        console.log(typeof value.status) 
            if(value.status===200){
                const pElement = document.getElementById("deleteMessage")
                pElement.textContent="削除完了しました。"
            }else{
                const pElement = document.getElementById("deleteMessage")
                pElement.textContent="削除失敗しました。"
            }
        })
}