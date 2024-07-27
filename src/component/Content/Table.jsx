import React, { useEffect, useState } from 'react';
import useStore from '../../service/store'; 

const statusTypes = {
  'รอตรวจสอบ': 'bg-yellow-200',
  'พิจารณาเอกสาร': 'bg-blue-200',
  'ขึ้นทะเบียน': 'bg-green-200',
  'ออกเอกสาร': 'bg-purple-200',
  'แก้ไข': 'bg-orange-200', 
};

const TableData = () => {
  const { data, loading, fetchData } = useStore();
  const [currentStatus, setCurrentStatus] = useState('รอตรวจสอบ');

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, [fetchData]);

  // Filter data based on the selected status
  const filteredData = data.filter(item => {
    if (currentStatus === 'แก้ไข') {
      return item.status.includes('แก้ไข'); // Include all "แก้ไข" types
    }
    return item.status === currentStatus; // For other statuses
  });

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="font-prompt p-4">
      <div className="flex mb-4 gap-3">
        {Object.keys(statusTypes).map((status, index) => (
          <button
            key={index}
            onClick={() => setCurrentStatus(status)}
            className={`p-2 rounded-md ${
              currentStatus === status
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className={`py-2`}>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ชื่อ</th>
              <th className="px-4 py-2 border-b">รหัส</th>
              <th className="px-4 py-2 border-b">วันที่สร้าง</th>
              <th className="px-4 py-2 border-b">ผู้ตรวจสอบ</th>
              <th className="px-4 py-2 border-b">วันที่ตรวจสอบ</th>
              <th className="px-4 py-2 border-b">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b text-center">{item.code}</td>
                  <td className="px-4 py-2 border-b text-center">{item.createDate}</td>
                  <td className="px-4 py-2 border-b text-center">{item.verifyBy}</td>
                  <td className="px-4 py-2 border-b text-center">{item.verifyDate}</td>
                  <td className={`m-3 rounded-xl border-b text-center ${statusTypes[item.status.includes('แก้ไข') ? 'แก้ไข' : item.status]}`}>
                    {item.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center">ไม่มีข้อมูล</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
