//# server typescript program renderAnnotations for form annotatePdf

//# using reftab annotatedFiles;

Log(form);

const doc = pdf.FromFileref(form.myAnnotator.fileref);

let imageMediaId = null;

// #2. Render a pdf
const pageImage = doc.Render(0, 3);
imageMediaId = pageImage.Store("jpg");

// #3.1. Add the point on the image
if (form.myAnnotator.newPoint.shape === "point") {
    const pageImage = doc.Render(0, 3);
    const x = form.myAnnotator.newPoint.xFraction * pageImage.Width;
    const y = form.myAnnotator.newPoint.yFraction * pageImage.Height;
    pageImage.DrawShape(x, y, 30, { color: "F00" });

    // #4.1. Crop the image
    pageImage.Crop(x - 150, y - 150, 300, 300);

    imageMediaId = pageImage.Store("jpg");
}

// #3.2. Add the shape to the image
if (form.myAnnotator.newPoint.shape === "cloud") {
    const ptdscr = JSON.parse(form.myAnnotator.newPoint.ptdscr);
    const points = ptdscr.points;

    // #4.2. Making sure the annotation is 600x600 pixels
    const ptPoints = doc.AnnotatorToPdfCoordinates(0, points);
    const ptXCoords = ptPoints.map(p => p.x);
    const ptYCoords = ptPoints.map(p => p.y);
    const ptPointsMinX = Math.min(...ptXCoords);
    const ptPointsMinY = Math.min(...ptYCoords);
    const ptPointsMaxX = Math.max(...ptXCoords);
    const ptPointsMaxY = Math.max(...ptYCoords);
    const ptShapeSize = Math.max(ptPointsMaxX - ptPointsMinX, ptPointsMaxY - ptPointsMinY);
    const scale = 600 / ptShapeSize;
    // ---

    const pageImage = doc.Render(0, scale);
    const pxPoints = points.map(p => ({
        x: p.x * pageImage.Width,
        y: p.y * pageImage.Height
    }));
    pageImage.DrawPolygon(pxPoints, { shape: "cloud", color: "F00", lineWidth: 2, radius: 20 });

    // # 4.2. Getting the a 700x700 image
    const pxXCoords = pxPoints.map(p => p.x);
    const pxYCoords = pxPoints.map(p => p.y);
    const pxPointsMinX = Math.min(...pxXCoords);
    const pxPointsMinY = Math.min(...pxYCoords);
    const pxPointsMaxX = Math.max(...pxXCoords);
    const pxPointsMaxY = Math.max(...pxYCoords);
    const pxShapeWidth = pxPointsMaxX - pxPointsMinX;
    const pxShapeHeight = pxPointsMaxY - pxPointsMinY;
    pageImage.Crop(pxPointsMinX - 50, pxPointsMinY - 50, pxShapeWidth + 100, pxShapeHeight + 100);
    // ---

    imageMediaId = pageImage.Store("jpg");
}

let pdfMediaId = null;

// #5.1. Place the point on the PDF
if (form.myAnnotator.newPoint.shape === "point") {
    let coords = doc.AnnotatorToPdfCoordinates(0, [{
        x: form.myAnnotator.newPoint.xFraction,
        y: form.myAnnotator.newPoint.yFraction
    }])
    doc.AddShapeAnnotation(0, coords[0].x, coords[0].y, 10, { color: "F00" });
    pdfMediaId = doc.Store("annotated-floorplan.pdf");
}

// #5.2. Place the cloud on the PDF
if (form.myAnnotator.newPoint.shape === "cloud") {
    const ptdscr = JSON.parse(form.myAnnotator.newPoint.ptdscr);
    const points = doc.AnnotatorToPdfCoordinates(0, ptdscr.points);
    doc.AddPolygonAnnotation(0, points, { shape: "cloud", color: "F00" });
    pdfMediaId = doc.Store("annotated-floorplan.pdf");
}

if (pdfMediaId || imageMediaId) {
    db.annotatedFiles.Insert({
        id: guid.Generate().ToStringN(),
        creationDate: dtl.Now().DtlToDtdb(),
        pdfMediaId: pdfMediaId,
        imageMediaId: imageMediaId
    });
}