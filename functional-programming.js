debugger;
function makeAdjectifier(adjective) {
	return function(string) {
		return adjective + " " + string;
	}
}

let coolifier = makeAdjectifier("cool");
coolifier("conference");

// another example

function addContact(id, refreshCallback) {
    // refreshCallback();
    // You can also pass arguments if you need to
    refreshCallback(10);
}

function refreshContactList(id) {
    alert(`Refreshed id: ${id}`);
}

// addContact(1, refreshContactList);
addContact(1, refreshContactList) 

