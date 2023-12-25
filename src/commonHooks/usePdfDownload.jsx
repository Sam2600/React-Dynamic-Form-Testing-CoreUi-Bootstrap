/* eslint-disable no-unused-vars */
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { PdfDownload } from "../pages/PDF/PdfDownload";

export const usePdfDownload = () => {
  const pdfRef = useRef();
  //
  const input = pdfRef.current;
  //
  html2canvas(input).then((canvas) => {
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4", true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    pdf.addImage(data, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save("Contract Detail.pdf");
  });

  return <PdfDownload pdfRef={pdfRef} />;
};
