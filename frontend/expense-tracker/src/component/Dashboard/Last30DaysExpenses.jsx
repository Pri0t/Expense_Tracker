import React, { useEffect, useState } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data = [] }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-lg font-semibold text-gray-800">
          Expenses in Last 30 Days
        </h5>
      </div>

      {chartData.length > 0 ? (
        <CustomBarChart data={chartData} />
      ) : (
        // Show fallback message if there's no data
        <p className="text-sm text-gray-500 text-center mt-4">
          No expense data available.
        </p>
      )}
    </div>
  );
};

export default Last30DaysExpenses;
