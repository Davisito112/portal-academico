const USERNAME = "Dayita2121";
const PASSWORD = "Dayita2121";


/*
  NOTAS

  Ponderación utilizada:

  Par1 = 20%
  Par2 = 20%
  Pra  = 20%
  Con  = 10%
  Fin  = 30%

  Las notas están distribuidas para que
  el resultado final sea exactamente el
  indicado.
*/

const subjects = [

  {
    name: "TOXICOLOGÍA I",
    scores: [87, 93, 91, 88, 90]
  },

  {
    name: "BROMATOLOGÍA",
    scores: [83, 87, 86, 83, 85]
  },

  {
    name: "ANÁLISIS CLÍNICO II",
    scores: [65, 71, 69, 66, 68]
  },

  {
    name: "FARMACOLOGÍA II",
    scores: [62, 68, 66, 63, 65]
  },

  {
    name: "MICROBIOLOGÍA INDUSTRIAL",
    scores: [79, 85, 83, 80, 82]
  }

];


function calculateFinal(scores) {

  const [
    par1,
    par2,
    pra,
    con,
    fin
  ] = scores;

  return Math.round(
    par1 * 0.20 +
    par2 * 0.20 +
    pra  * 0.20 +
    con  * 0.10 +
    fin  * 0.30
  );

}


const gradesBody =
  document.getElementById(
    "gradesBody"
  );


subjects.forEach(subject => {

  const row =
    document.createElement("tr");

  const final =
    calculateFinal(
      subject.scores
    );

  row.innerHTML = `

    <td>
      <strong>
        ${subject.name}
      </strong>
    </td>

    ${subject.scores
      .map(
        score =>
          `<td>${score}</td>`
      )
      .join("")
    }

    <td class="final">
      ${final}
    </td>

  `;

  gradesBody.appendChild(row);

});


/* LOGIN */

document
  .getElementById("loginForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      const user =
        document
          .getElementById("username")
          .value
          .trim();

      const pass =
        document
          .getElementById("password")
          .value;

      const error =
        document
          .getElementById("loginError");


      if (
        user === USERNAME &&
        pass === PASSWORD
      ) {

        document
          .getElementById("loginView")
          .classList
          .add("hidden");

        document
          .getElementById("panel")
          .classList
          .remove("hidden");

        error.textContent = "";

      }

      else {

        error.textContent =
          "Usuario o contraseña incorrectos.";

      }

    }
  );


/* CERRAR SESIÓN */

document
  .getElementById("logoutBtn")
  .addEventListener(
    "click",
    function() {

      document
        .getElementById("panel")
        .classList
        .add("hidden");

      document
        .getElementById("loginView")
        .classList
        .remove("hidden");

      document
        .getElementById("loginForm")
        .reset();

    }
  );
