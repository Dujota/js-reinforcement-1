project = {
  committee: ["Stella", "Salma", "Kai"],
  title: "Very Important Project",
  dueDate : "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}

// check to see how many tasks there are to be assigned
console.log(`\ntotal tasks to assign ${project.steps.length}\n`);

// check to see how many members there are
console.log(`total number of members ${project.committee.length}\n`);

// 3 taks per committee member, loop through the object and add a committee member to the steps each time and move on to the next member after 3 taks have been assigned

// tried filter, map and forEach -- they all yield the same result for the hash
project.steps.filter((task, count) => {
  if (count < 3) {
    task.committee = project.committee[2]
  } else if (count >= 3 && count < 6) {
    task.committee = project.committee[1]
  } else if (count >= 6 && count <= project.steps.length)
    {task.committee = project.committee[0]
  }
});

console.log(project);
