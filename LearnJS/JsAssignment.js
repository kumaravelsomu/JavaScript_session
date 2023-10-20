// class Employee {
//     constructor(name, id, email) {
//       this.name = name;
//       this.id = id;
//       this.email = email;
//     }
//     getEmployeeDetail(params) {
//       return "Name: "+this.name + ", ID: " + this.id+", Mail: "+this.email;
//     }
//   }
  
//   const emp1 = new Employee(`Kumar`, 1234, `kumar@gmail.com`);
//   const emp2 = new Employee(`John`, 23123, `john@gmail.com`);
  
//   console.log(emp1.getEmployeeDetail());
//   console.log(emp2.getEmployeeDetail());



  //Array of Object
  // const arr = [{name: "Kumar", id: 1234, mail: "kumar@gmail.com"},
  // {name:"John", id: 2345, mail: "John@gmail.com"},
  // {name: "Antony", id: 6543, mail: "Antony@gmail.com"}];

  // for (const obj of arr) {
  //   console.log(`Name: ${obj.name}, ID: ${obj.id}, Mail: ${obj.mail}`)
  // }

  
  //Promise

  const Play = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("Playing completed!")}, 3000);
      
  });

  const work = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("Work completed!")
    }, 5000)
  });

  work.then((result) => {
    console.log(result);
    return Play;
}).then((result) => {
  console.log(result);
})
  