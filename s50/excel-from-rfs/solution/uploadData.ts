//#server typescript program storeExcelContent for form upload
//#using reftab Tabs;
//#using reftab exelData;
{
    var i = db.Tabs.Read({}).Count();
    for (let file of form.uploadXlsx.files) {
        let xlsxfile = fileref.New(file.mediaId, 0);
        let workbook = excel.FromFileref(xlsxfile);
        let sheets = workbook.SheetNames();
        for (let sheet of sheets) {
            let colCount = workbook.ColumnCount(sheet)
            let rowCount = workbook.RowCount(sheet)
            db.Tabs.Insert({tab_id: i, tab_name: sheet+i, tab_col_num: rowCount, tab_row_num: colCount});
            for (let r = 1; r < rowCount; r++) {
                    let id = i;
                    let nev = workbook.GetValue(sheet, r, 0);
                    let tipus = workbook.GetValue(sheet, r, 1);
                    let ar = workbook.GetValue(sheet, r, 2);
                    let suly = workbook.GetValue(sheet, r, 3);
                    let szallitas = workbook.GetValue(sheet, r, 4);
                    
                    let parsedint = int.Parse(ar);
                    if(nev != null && tipus != null){
                        Log("id:" +id+"nev: "+ nev +", tipus: "+tipus+", ar:  "+ ar +", suly:  "+ suly+", szallit:  "+ szallitas)
                        db.exelData.Insert({gy_id: id, gy_nev: nev, gy_tipus: tipus, gy_ar: parsedint, gy_suly: suly, gy_szallitas: szallitas})
                    }
                }
            i = i+1;
            Log("Done "+i)
        }
	}
}