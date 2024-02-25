import resume from "../assets/resume-final-resume-2024-02-24-12_20_31.pdf"
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


const CvPage = () => {

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();


    return (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Document file={resume}>
                <Page width={window.innerWidth} pageNumber={1} />
            </Document>
        </div>
    );
}

export default CvPage