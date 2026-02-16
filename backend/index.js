const readline = require("readline");

// simple database (JS object)
let users = [
  {
    name: "Uttam",
    gmail: "uttam@gmail.com",
    password: "12345",
    textcontent: "hello"
  }
];

// terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// LOGIN
function login() {
  rl.question("Enter Gmail: ", (email) => {
    rl.question("Enter Password: ", (pass) => {

      const user = users.find(
        u => u.gmail === email && u.password === pass
      );

      if (!user) {
        console.log("❌ Login Failed");
        rl.close();
        return;
      }

      console.log("✅ Login Successful");
      menu(user);

    });
  });
}

// MENU
function menu(user) {
  console.log("\n1. Read");
  console.log("2. Update");
  console.log("3. Delete");

  rl.question("Choose option: ", (choice) => {

    if (choice === "1") {
      console.log(user);
      rl.close();
    }

    else if (choice === "2") {
      rl.question("New Name: ", (newName) => {
        user.name = newName;
        console.log("✅ Updated:", user);
        rl.close();
      });
    }

    else if (choice === "3") {
      users = users.filter(u => u.gmail !== user.gmail);
      console.log("✅ User Deleted");
      rl.close();
    }

  });
}

// start program
login();
