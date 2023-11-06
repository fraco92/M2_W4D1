// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

// const findJob = function (title, location) {
//   let findJobs = [];
//   for (let i = 0; i < jobs.length; i++) {
//     if (
//       jobs[i].title.toLowerCase().includes(title.toLowerCase()) &&
//       jobs[i].location.toLowerCase().includes(location.toLowerCase())
//     ) {
//       findJobs.push(jobs[i]);
//     }
//   }
//   return { result: findJobs, count: findJobs.length };
// };

// console.log(findJob("dev", "US"));

// let inputJobValue = inputJob.toLowerCase();
// let inputLocationValue = inputLocation.toLowerCase();

const inputJob = document.querySelector("#job");
const inputLocation = document.querySelector("#location");
const ulList = document.querySelector("#searchList");

const findJob = function () {
  ulList.innerHTML = "";
  if (!inputJob.value && !inputLocation.value) {
    alert("Dati non inseriti. Inserisci uno o due parametri.");
  } else {
    let jobsFound = [];
    for (let i = 0; i < jobs.length; i++) {
      if (
        jobs[i].title.toLowerCase().includes(inputJob.value.toLowerCase()) &&
        jobs[i].location
          .toLowerCase()
          .includes(inputLocation.value.toLowerCase())
      ) {
        jobsFound.push(jobs[i]);
      }
    }
    for (let y = 0; y < jobsFound.length; y++) {
      ulList.innerHTML += `<li>
      <ion-icon name="arrow-redo-outline" title="Share"></ion-icon>
      <ion-icon onclick="addToFavourite(this)" name="heart-outline" class="add__job" title="Add to favorites"></ion-icon>
      <b>${jobsFound[y].title}</b> | ${jobsFound[y].location}
      </li>`;
    }
    if (jobsFound.length === 0) {
      alert("La ricerca non è andata a buon fine.");
    }
  }
};

const addToFavourite = function (element) {
  const currentNameOfIcon = element.getAttribute("name");
  if (currentNameOfIcon === "heart-outline") {
    element.setAttribute("name", "heart");
  } else if (currentNameOfIcon === "heart") {
    element.setAttribute("name", "heart-outline");
  }
};

// const listOfJobs = document.querySelectorAll("#searchList li");

// const selectJobs = function (jobs) {
// let jobsSelected = []
// if
// }

// let newList = document.createElement("li");
// newList.innerHTML += jobsFound[y].title;
// ulList.appendChild(newList);

// return;
// return { result: findJob, count: findJob.length };

// console.log(findJob());

// console.log(findJob(inputJobValue, inputLocation));
