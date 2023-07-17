import styles from "@/styles/Home.module.scss"
import Layout from "@/components/layout"
import React from "react"
import "./toolspeedcalc.js"

export default function ToolSpeedCalc() {

  const [counter, setCounter] = useState(1);

  const toggleForm = () => {
    const form = document.getElementById("form");
    if (form) {
      form.style.display = form.style.display === "none" ? "block" : "none";
    }
  };

  const calculate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get the input values from the form
    const name = document.getElementById("name")?.value;
    const fz = document.getElementById("fz")?.value;
    const fn = document.getElementById("fn")?.value;
    const dc = document.getElementById("dc")?.value;
    const z = document.getElementById("z")?.value;
    const Vc = document.getElementById("Vc")?.value;

    // Clear the previous error message
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.innerHTML = "";
    }

    // Validate the input values
    if (!dc || !z || !Vc || (!fz && !fn)) {
      if (errorMessage) {
        errorMessage.innerHTML = "Please enter missing values.";
      }
      return false;
    }
    if (fz && fn) {
      document.getElementById("fn")!.value = "";
    }

    // Calculate n
    const n = (Number(Vc) * 1000) / (Math.PI * Number(dc));

    // Calculate Vf
    let Vf;
    if (fn) {
      Vf = Number(fn) * n;
    } else {
      Vf = Number(fz) * Number(z) * n;
    }

    // Round up the sum to two decimal places
    const roundedN = n.toFixed(2);
    const roundedVf = Vf.toFixed(2);

    // Create the table HTML
    const tableHTML = <table class="minimalistBlack">
      <thead><tr><th colspan="4">Tool #${counter}: ${name}</th></tr></thead>
      <tbody>
        ${
          fz == 0 && fn != 0
            ? <tr><td>Diameter (Dc) [mm]:</td><td>Cutting Speed (Vc) [mm/min]:</td><td>Number of Edges (z):</td><td>Feed-rate per Revolution (fn) [mm/rot]:</td></tr>
          <tr><td style="font-weight: bold">${dc}</td><td style="font-weight: bold">${Vc}</td><td style="font-weight: bold">${z}</td><td style="font-weight: bold">${fn}</td></tr>
            : fz != 0 && fn == 0
            ? <tr><td>Diameter (Dc) [mm]:</td><td>Cutting Speed (Vc) [mm/min]:</td><td>Number of Edges (z):</td><td>Feed-rate per Edge (fz) [mm/z]:</td></tr>
          <tr><td style="font-weight: bold">${dc}</td><td style="font-weight: bold">${Vc}</td><td style="font-weight: bold">${z}</td><td style="font-weight: bold">${fz}</td></tr>
            : ""
        }
        <tr><td colspan="2">RPM n [r/min]:</td><td colspan="2">Feed rate Vf [mm/min]:</td></tr>
        <tr><td colspan="2" style="font-weight: bold">= ${roundedN}</td><td colspan="2" style="font-weight: bold">= ${roundedVf}</td></tr>
      </tbody>
    </table>;

    // Insert the table HTML into the div
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
      resultDiv.innerHTML += tableHTML;
    }

    // Increment the counter
    setCounter((prevCounter) => prevCounter + 1);

    // Return false to prevent the form from being submitted
    return false;
  };


  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <p className={styles.description}>
            This WebApp is a work-in-progress Calculator that helps in preparing a Tool Sheet for programming and/or operating a Milling Machine. The Calculator computes each tool's details and specifications, which are consecutively displayed below the Calculator and are easily exported and/or printed out. This WebApp was programmed in cooperation with an artificial intelligence (AI).
          </p>
          <br />
            <button id="toggle-form" onClick={toggleForm}>
                Show/Hide Calculator
      	    </button>
	    <form id="form" onSubmit={calculate} style={{ display: 'block' }}>
		{/* Rest of the form */}
	    </form>
	    <div id="error-message"></div>
	    <div id="result"></div>
        </div>
      </div>
    </Layout>
  )
}
