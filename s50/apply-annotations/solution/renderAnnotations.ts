//# server typescript program renderAnnotations for form annotatePdf

//# using reftab annotatedFiles;

Log(form);

const newPoint = form.myAnnotator.newPoint;
if (newPoint == null) {
    ThrowError("No new point on form");
}

const doc = pdf.FromFileref(form.myAnnotator.fileref);

const pdfMediaId = null;
// TODO: implement pdf annotation here

const imageMediaId = null;
// TODO: implement image annotation here

if (pdfMediaId || imageMediaId) {
    db.annotatedFiles.Insert({
        id: guid.Generate().ToStringN(),
        creationDate: dtl.Now().DtlToDtdb(),
        pdfMediaId: pdfMediaId,
        imageMediaId: imageMediaId
    });
}