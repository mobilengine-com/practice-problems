//# server typescript program annotate_image for form annotated_image

//# using reftab images;

{
    db.images.DeleteMany(map.New());

    let background = image.FromFileref(fileref.New("0369e28d9c184f12b0e5c8686af683da", 0));
    
    // TODO: load the snowflake icon
    // TODO: draw it somewhere on the background

    let mediaId = background.Store("jpg");
    db.images.Insert({ image: fileref.New(mediaId, 0) });
}