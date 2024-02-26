/**
 * 
 * @param {String} elem css селектор, в котром будет рисоваться календарь 
 * @param {Number} year год календаря
 * @param {i} mounth обрабатывается циклом с 1 до 10
 */
function createCalendar(elem, year, mounth) {
    elem = document.querySelector(elem);
    
    let mon = mounth - 1;
    let d = new Date(year, mon);

    let table = `
    <table>
    <caption>${mounth}.${year}</caption>
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th style="color:red">сб</th>
            <th style="color:red">вс</th>
        </tr>
    <tr>
    `;
    
    for(let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while(d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
             
            if(getDay(d) % 7 == 6) {
                table += '</tr><tr>';
            }
        d.setDate(d.getDate() + 1);
    }

    if(getDay(d) != 0) {
        for(let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML += table;
}

function getDay(date) {
    let day = date.getDay();
    if(day == 0) day = 7;
    return day - 1;
}

for(let i = 1; i < 13; i++) {
    createCalendar('.container', 2024, i);
}