import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('myMm').offsetHeight * mm;
};

const range = (start, end) => {
  return Array(end - start).join(0).split(0).map(function (val, id) {
    return id + start
  });
};

const PrintButton = ({ invoiceId, label, handleProgress }) => (
  <div className="tcmb4 mt2">
    <div id="myMm" style={{ height: "1mm" }} />

    <button
      className="bg-warning"
      onClick={() => {
        const input = document.getElementById(invoiceId);
        const inputHeightMm = pxToMm(input.offsetHeight);
        const a4WidthMm = 210;
        const a4HeightMm = 297;
        const a4HeightPx = mmToPx(a4HeightMm);
        const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm / a4HeightMm) + 1;
        handleProgress(true);

        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            let pdf;

            if (inputHeightMm > a4HeightMm) {
              pdf = new jsPDF('p', 'mm', [inputHeightMm + 16, a4WidthMm]);
            } else {
              pdf = new jsPDF();
            }

            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save(`${invoiceId}.pdf`);
            handleProgress(false);
          });
      }}
    >
      {label}
    </button>
  </div>
);

export default PrintButton;
