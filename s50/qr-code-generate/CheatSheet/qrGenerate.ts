//#server typescript program qrCodeGenerate for form QrCodeGenerate
//#using reftab store;
{
    var myQrCode = qrcode.New();
    myQrCode.Text = form.input.text;
    let img = myQrCode.Generate();
    let mediaId = img.Store("png");
    Log("Generated QR code with mediaId: " + mediaId);
    db.store.Insert({mediaid: mediaId});
}
