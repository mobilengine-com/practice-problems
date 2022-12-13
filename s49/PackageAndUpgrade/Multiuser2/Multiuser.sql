INSERT INTO multiuser (data1, data2) VALUES ("asd", "asd");
INSERT INTO multiuser_multiuser (RowIdParent, data3) (SELECT RowId, "Körte" FROM multiuser WHERE data1 = "asd");
INSERT INTO multiuser_multiuser (RowIdParent, data3) (SELECT RowId, "Dinye" FROM multiuser WHERE data1 = "asd");