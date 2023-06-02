//# server typescript program renderAnnotations for form annotatePdf

//# using reftab annotatedFiles;

Log(form);

const doc = pdf.FromFileref(form.myAnnotator.fileref);

const imageMediaId = null;
// TODO: implement image annotation here

const pdfMediaId = null;
// TODO: implement pdf annotation here

if (pdfMediaId || imageMediaId) {
    db.annotatedFiles.Insert({
        id: guid.Generate().ToStringN(),
        creationDate: dtl.Now().DtlToDtdb(),
        pdfMediaId: pdfMediaId,
        imageMediaId: imageMediaId
    });
}