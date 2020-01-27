function ListNamedFilesandFolders() {
/* Adapted from Code written by @hubgit https://gist.github.com/hubgit/3755293
Updated since DocsList is deprecated  https://ctrlq.org/code/19854-list-files-in-google-drive-folder
*/


  var app = SpreadsheetApp;
  var sheet = app.getActiveSpreadsheet().getSheetByName("Files");
  var foldername = 'HVPQ files';
  var i = 2;
 
  // clear any existing contents
 sheet.getRange(2, 1, 200, 4).clear();
  // append a header row
  // This is full array
  // sheet.appendRow(["Folder","Name", "Date Last Updated", "Size", "URL", "ID", "Description", "Type"]);
 
  // If you need to refresh headers every time, use this:
  //  sheet.appendRow(["Folder","Name", "Date Last Updated", "ID"])


  // getFoldersByName = Gets a collection of all folders in the user's Drive that have the given name.
  // folders is a "Folder Iterator" but there is only one unique folder name called, so it has only one value (next)
  var folders = DriveApp.getFoldersByName(foldername);
  var foldersnext = folders.next();
  // Logger.log("THE FOLDER IS "+foldersnext);// DEBUG

  // declare an array to push data into the spreadsheet
  var data = [];

  // list files in this folder
  // myfiles is a File Iterator
  var myfiles = foldersnext.getFiles();

  // Logger.log("FILES IN THIS FOLDER"); DEBUG

  // loop through files in this folder
  while (myfiles.hasNext()) {
    var myfile = myfiles.next();
    var fname = myfile.getName();
    var fdate = myfile.getLastUpdated(); 
    var fid = myfile.getId();
   
    //Logger.log("File Name is "+myfile.getName()); //Logger.log("Date is "+myfile.getLastUpdated()); //Logger.log("Size is "+myfile.getSize());
    //Logger.log("URL is "+myfile.getUrl()); //Logger.log("ID is "+myfile.getId()); //Logger.log("Description is "+myfile.getDescription());
    //Logger.log("File Type is "+myfile.getMimeType());

    // Populate the array for this file
    data = [ 
      foldersnext,
      fname,
      fdate,
      fid,
    ];
    //Logger.log("data = "+data); //DEBUG
  //   sheet.appendRow(data);
  sheet.getRange(i, 1, 1, 4).setValues([data])
       i ++;
      
      } // Completes listing of the files in the named folder
}
        
        
        