//# server typescript program annotate_pdf for form annotated_pdf

//# using reftab pdfs;

{
    db.pdfs.DeleteMany(map.New());

    let background = pdf.FromFileref(fileref.New("a2fda4b2fa1a4a1c8a9751e2733c5129", 0));

    // TODO: load the snowflake icon
    // TODO: add it to random places on the pdf

    let mediaId = background.Store("annotated.pdf");
    db.pdfs.Insert({ pdf: fileref.New(mediaId, 0) });
}