var names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];
for (var i = 0; i < names.length; i++) {
  var temp = names[i].charAt(0);
  if (temp == "J") {
    saygoodBye(names[i]);
  } else {
    sayHello(names[i]);
  }
}
