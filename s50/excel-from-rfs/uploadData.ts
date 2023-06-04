//#server typescript program storeExcelContent for form upload
//#using reftab Tabs;
//#using reftab Gyumolcs;
{
    var i = 0;
    for (let file of form.uploadXlsx.files) {
        let xlsxfile = fileref.New(file.mediaId, 0);
        let workbook = excel.FromFileref(xlsxfile);
        let sheets = workbook.SheetNames();
        for (let sheet of sheets) {
            let colCount = workbook.ColumnCount(sheet)
            let rowCount = workbook.RowCount(sheet)
            db.Tabs.Insert({tab_id: i, tab_name: sheet, tab_col_num: rowCount, tab_row_num: colCount});
            for (let r = 0; r < rowCount; r++) {
                    let id = i;
                    let nev = workbook.GetValue(sheet, r, 0);
                    let tipus = workbook.GetValue(sheet, r, 1);
                    let ar = workbook.GetValue(sheet, r, 2);
                    let suly = workbook.GetValue(sheet, r, 3);
                    let szallitas = workbook.GetValue(sheet, r, 4);

                    let parsedint = int.Parse(ar);
                    let parsedfloat = float.Parse(suly);

                    //let exeldtdb = excel.ExcelDateToDtdb(szallitas) ;
                    let exeldtdb = dtl.Now().DtlToDtdb()
                    Log("id: "+id);
                    Log("gy_nev: "+nev);
                    Log("gy_tipus: "+tipus);
                    Log("gy_ar: "+parsedint);
                    Log("gy_suly: "+parsedfloat);
                    Log("gy_szalitas: "+exeldtdb);
                    if(r!=0){
                        db.Gyumolcs.Insert({gy_id: id, gy_nev: nev, gy_tipus: tipus, gy_ar: parsedint, gy_suly: parsedfloat})
                    }
            }
            i = i+1;
        }
	}
}