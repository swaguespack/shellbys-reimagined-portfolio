import Button from "react-bootstrap/Button";
import pdf from "../Miller_Shellby_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

  return (
    
    <div id="prof-list">
      <h1>Resume</h1>

          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            id="resume-button">
            <AiOutlineDownload />
            &nbsp;Download My Resume
          </Button>

    <h4>Front-End Proficiencies </h4>
      <ul >
        <li >HTML</li>
        <li >CSS</li>
        <li >JavaScript</li>
        <li >Responsive Web Design</li>
        <li >React</li>
        <li >Bootstrap</li>
      </ul>

    <h4>Back-End Proficiencies </h4>
      <ul >
        <li >API</li>
        <li >Node</li>
        <li >Express</li>
        <li >MySQL, Sequelize</li>
        <li >MongoDB, Mongoose</li>
        <li >REST</li>
        <li >GraphSQL</li>
      </ul>

    </div>
  );
}

export default Resume;