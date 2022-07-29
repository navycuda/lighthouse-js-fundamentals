const organizeInstructors = function(instructors) {
  // Put your solution here
  const courses = {};

  for (let i = 0; i < instructors.length; i++) {
    const bob = instructors[i];
    if (!courses.hasOwnProperty(bob.course))
      courses[bob.course] = [];
    courses[bob.course].push(bob.name);
  }
  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));