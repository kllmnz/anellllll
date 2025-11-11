const students = [
  { 
    id: 1,
    name: "Tom", 
    age: 18, 
    city: "Bishkek",
    grades: [5, 4, 3, 5],
    hobbies: ["football", "gaming"],
    isGraduated: false
  },
  { 
    id: 2,
    name: "Anna", 
    age: 20, 
    city: "Osh",
    grades: [3, 2, 4, 3],
    hobbies: ["reading", "painting", "yoga"],
    isGraduated: true
  },
  { 
    id: 3,
    name: "Bob", 
    age: 19, 
    city: "Karakol",
    grades: [5, 5, 5, 4],
    hobbies: [],
    isGraduated: false
  },
  { 
    id: 4,
    name: "Lisa", 
    age: 22, 
    city: "Bishkek",
    grades: [4, 5, 5, 5],
    hobbies: ["volleyball", "travel"],
    isGraduated: true
  },
  { 
    id: 5,
    name: "John", 
    age: 21, 
    city: "Talas",
    grades: [2, 3, 2, 4],
    hobbies: ["movies", "football"],
    isGraduated: false
  },
  { 
    id: 6,
    name: "Mila", 
    age: 23, 
    city: "Osh",
    grades: [5, 4, 4, 5],
    hobbies: ["reading", "cooking"],
    isGraduated: true
  },
  { 
    id: 7,
    name: "Alex", 
    age: 19, 
    city: "Naryn",
    grades: [3, 3, 4, 3],
    hobbies: ["music", "football"],
    isGraduated: false
  },
  { 
    id: 8,
    name: "Kate", 
    age: 20, 
    city: "Bishkek",
    grades: [4, 4, 5, 5],
    hobbies: ["dance", "photography"],
    isGraduated: true
  },
  { 
    id: 9,
    name: "Nick", 
    age: 18, 
    city: "Talas",
    grades: [5, 5, 4, 5],
    hobbies: ["gaming", "reading"],
    isGraduated: false
  },
  { 
    id: 10,
    name: "Sara", 
    age: 21, 
    city: "Osh",
    grades: [4, 5, 3, 4],
    hobbies: ["travel", "yoga"],
    isGraduated: true
  }
];


    students.forEach(student => {
      const card = document.createElement('div');
      card.classList.add('student-card');

      // Заголовок (имя + статус)
      const header = document.createElement('div');
      header.classList.add('student-header');

      const nameEl = document.createElement('div');
      nameEl.classList.add('name');
      nameEl.textContent = student.name;

      const status = document.createElement('div');
      status.classList.add('not-graduaated');
      status.classList.add(student.isGraduated ? 'graduated' : 'not-graduated');

      header.appendChild(nameEl);
      header.appendChild(status);
      card.appendChild(header);

      // Информация о студенте
      const info = document.createElement('div');
      info.classList.add('student-info');
      info.innerHTML = `
        <p><strong>age:</strong> ${student.age}</p>
        <p><strong>city:</strong> ${student.city}</p>
      `;
      card.appendChild(info);

      // Хобби
      const hobbiesBlock = document.createElement('div');
      hobbiesBlock.classList.add("football","gaming");
      hobbiesBlock.innerHTML = "<strong>Хобби:</strong><br>";
      student.hobbies.forEach(h => {
        const hobby = document.createElement('span');
        hobby.textContent = h;
        hobbiesBlock.appendChild(hobby);
      });
      card.appendChild(hobbiesBlock);

      document.body.append(card)

    });







const names = students.map(student => student.name);
console.log(names);

const youngStudents = students.filter(student => student.age <= 19);
console.log(youngStudents)

const shortStudents = students.map(student => {
  const avgGrade = student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
  return {
    id: student.id,
    name: student.name,
    grade: avgGrade.toFixed(2) 
  };
});


console.log("commit")



