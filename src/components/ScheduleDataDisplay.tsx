import React, { useEffect, useState } from 'react';
import { loadExcelFile, ExcelData } from '../utils/excelLoader';
import { useLanguage } from '../context/LanguageContext';

interface ScheduleData extends ExcelData {
  Day?: string;
  Time?: string;
  Location?: string;
  Trainer?: string;
}

interface ScheduleDataDisplayProps {
  fileName: string;
}

export const ScheduleDataDisplay: React.FC<ScheduleDataDisplayProps> = ({ fileName }) => {
  const [data, setData] = useState<ScheduleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const excelData = await loadExcelFile(fileName);
        setData(excelData as ScheduleData[]);
        setError(null);
      } catch (err) {
        setError('Failed to load schedule data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fileName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-white">
          {language === 'lv' ? 'Ielādē...' : 'Loading...'}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-red-500">
          {language === 'lv' ? 'Kļūda ielādējot datus' : 'Error loading data'}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-white">
          {language === 'lv' ? 'Nav atrasti dati' : 'No schedule data found'}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {data.map((schedule, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex flex-col space-y-2">
                  {/* Day */}
                  <div className="text-yellow-400 font-semibold text-lg">
                    {schedule.Day}
                  </div>
                  
                  {/* Time */}
                  <div className="text-white">
                    <span className="text-gray-400">
                      {language === 'lv' ? 'Laiks: ' : 'Time: '}
                    </span>
                    {schedule.Time}
                  </div>
                  
                  {/* Location */}
                  <div className="text-white">
                    <span className="text-gray-400">
                      {language === 'lv' ? 'Vieta: ' : 'Location: '}
                    </span>
                    {schedule.Location}
                  </div>
                  
                  {/* Trainer */}
                  <div className="text-white">
                    <span className="text-gray-400">
                      {language === 'lv' ? 'Treneris: ' : 'Trainer: '}
                    </span>
                    {schedule.Trainer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 