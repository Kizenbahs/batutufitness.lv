import * as XLSX from 'xlsx';

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
    
    // Read the Excel file
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    console.log('Workbook loaded, sheets:', workbook.SheetNames);
    
    // Get the first worksheet
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    
    // Convert to JSON with type assertion since we know the structure
    const jsonData = XLSX.utils.sheet_to_json(worksheet) as ExcelData[];
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
    
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    console.log('Workbook loaded, sheets:', workbook.SheetNames);
    
    // Check if the requested sheet exists
    if (!workbook.SheetNames.includes(sheetName)) {
      throw new Error(`Sheet "${sheetName}" not found in the Excel file`);
    }
    
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet) as ExcelData[];
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