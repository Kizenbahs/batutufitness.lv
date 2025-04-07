import React, { useEffect, useState } from 'react';
import { loadExcelFile, ExcelData } from '../utils/excelLoader';

interface ExcelDataDisplayProps {
  fileName: string;
}

export const ExcelDataDisplay: React.FC<ExcelDataDisplayProps> = ({ fileName }) => {
  const [data, setData] = useState<ExcelData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const excelData = await loadExcelFile(fileName);
        setData(excelData);
        setError(null);
      } catch (err) {
        setError('Failed to load Excel file');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fileName]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-white">No data found</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-white">
        <thead>
          <tr>
            {Object.keys(data[0]).map((header) => (
              <th key={header} className="px-4 py-2 text-left border-b border-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-700">
              {Object.values(row).map((value, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 border-b border-gray-700">
                  {value?.toString() || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 