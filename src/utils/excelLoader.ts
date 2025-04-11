import ExcelJS from 'exceljs';

export interface ExcelData {
  [key: string]: any;
}

export const loadExcelFile = async (fileName: string): Promise<ExcelData[]> => {
  try {
    console.log('Attempting to load Excel file:', fileName);
    
    // Fetch the file from the public folder
    const response = await fetch(`/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Excel file: ${response.status} ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    console.log('Successfully loaded array buffer');
    
    // Create a new workbook and load the file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer);
    console.log('Workbook loaded, sheets:', workbook.worksheets.map(ws => ws.name));
    
    // Get the first worksheet
    const worksheet = workbook.worksheets[0];
    if (!worksheet) {
      throw new Error('No worksheets found in the Excel file');
    }
    
    // Convert to JSON
    const jsonData: ExcelData[] = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header row
      const rowData: ExcelData = {};
      row.eachCell((cell, colNumber) => {
        const header = worksheet.getRow(1).getCell(colNumber).value?.toString() || `column${colNumber}`;
        rowData[header] = cell.value;
      });
      jsonData.push(rowData);
    });
    
    console.log('Converted to JSON, rows:', jsonData.length);
    return jsonData;
  } catch (error) {
    console.error('Error loading Excel file:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to load Excel file: ${error.message}`);
    }
    throw error;
  }
};

// Function to load specific sheet from Excel file
export const loadExcelSheet = async (fileName: string, sheetName: string): Promise<ExcelData[]> => {
  try {
    console.log('Attempting to load Excel sheet:', sheetName, 'from file:', fileName);
    
    const response = await fetch(`/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Excel file: ${response.status} ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    console.log('Successfully loaded array buffer');
    
    // Create a new workbook and load the file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer);
    console.log('Workbook loaded, sheets:', workbook.worksheets.map(ws => ws.name));
    
    // Get the specified worksheet
    const worksheet = workbook.getWorksheet(sheetName);
    if (!worksheet) {
      throw new Error(`Sheet "${sheetName}" not found in the Excel file`);
    }
    
    // Convert to JSON
    const jsonData: ExcelData[] = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header row
      const rowData: ExcelData = {};
      row.eachCell((cell, colNumber) => {
        const header = worksheet.getRow(1).getCell(colNumber).value?.toString() || `column${colNumber}`;
        rowData[header] = cell.value;
      });
      jsonData.push(rowData);
    });
    
    console.log('Converted to JSON, rows:', jsonData.length);
    return jsonData;
  } catch (error) {
    console.error('Error loading Excel sheet:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to load Excel sheet: ${error.message}`);
    }
    throw error;
  }
}; 