var stateObject = {
"Delhi": ["new Delhi", "North Delhi"],
"Kerala": ["Thiruvananthapuram", "Palakkad"],
"Goa": ["North Goa", "South Goa"],
"Maharashtra": ["abc","xyz"],

}
window.onload = function () {

/*istate = document.getElementById("istate"),
idistrict = document.getElementById("idistrict");*/
/*for (var state in stateObject) {
istate.options[istate.options.length] = new Option(state, state);
}*/
stateSel.onchange = function () {
stateSel.length = 1; // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
}
 // reset in case page is reloaded
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[countySel.value][this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}