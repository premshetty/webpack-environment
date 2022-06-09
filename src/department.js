import { departmentData } from "./departmentdata";

const department = departmentData
  .map((department, index) => {
    return `<div key=${index} class="department">
                <h2>${department.name}</h2>
                <p>${department.description}</p>
                <div class="doctors">
                    ${department.doctors
                      .map((doctor, index) => {
                        return `<div key=${index} class="doctor">
                                <img src=${doctor.image} alt=${doctor.name} />
                                <h3>${doctor.name}</h3>
                                <p>${doctor.description}</p>
                            </div>`;
                      })
                      .join("")}
                </div>
            </div>`;
  })
  .join("");

const container = document.getElementById("departmentContainer");
container.innerHTML = department;
