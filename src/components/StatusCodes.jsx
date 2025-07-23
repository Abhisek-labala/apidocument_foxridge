import React, { useState } from 'react';

function StatusCodes() {
  const [activeTab, setActiveTab] = useState('deposit');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Data arrays
  const depositStatuses = [
    { value: 1, type: 'string', status: 'Pending', description: 'The order is still waiting for user deposit' },
    { value: 2, type: 'string', status: 'Completed', description: 'User deposit successful, and the deposit amount matches' },
    // { value: 3, type: 'string', status: 'Amount Error', description: 'User deposit successful, but the deposit amount does not match, pending processing' },
    { value: 4, type: 'string', status: 'Transaction Failed', description: 'Order rejected or cancelled' },
    { value: 5, type: 'string', status: 'Expected Failure', description: 'Pending payment status for more than 1 day' },
    // { value: 6, type: 'string', status: 'Completed (Amount Error)', description: 'User deposit successful, but the deposit amount does not match' }
  ];
  
  const withdrawStatuses = [
    { value: 1, type: 'string', status: 'Pending' },
    { value: 2, type: 'string', status: 'Processing' },
    { value: 3, type: 'string', status: 'Completed' },
    { value: 4, type: 'string', status: 'Payment Failure' },
    // { value: 5, type: 'string', status: 'Reverse' }
  ];
  
 const bankCodes = [
  { name: 'Aditya Birla Payments Bank', code: 'IN0001' },
  { name: 'Airtel Payments Bank', code: 'IN0002' },
  { name: 'Allahabad Bank', code: 'IN0003' },
  { name: 'Andhra Bank', code: 'IN0004' },
  { name: 'Andhra Pradesh Grameena Vikas Bank', code: 'IN0005' },
  { name: 'Andhra Pragathi Grameena Bank', code: 'IN0006' },
  { name: 'Arunachal Pradesh Rural Bank', code: 'IN0007' },
  { name: 'Aryavart Bank', code: 'IN0008' },
  { name: 'Assam Gramin Vikash Bank', code: 'IN0009' },
  { name: 'AU Small Finance Bank', code: 'IN0010' },
  { name: 'Axis Bank', code: 'IN0011' },
  { name: 'Bandhan Bank', code: 'IN0012' },
  { name: 'Bangiya Gramin Vikash Bank', code: 'IN0013' },
  { name: 'Bank DBS Indonesia', code: 'IN0014' },
  { name: 'Bank of America', code: 'IN0015' },
  { name: 'Bank Of Bahrain And Kuwait', code: 'IN0016' },
  { name: 'Bank Of Baroda', code: 'IN0017' },
  { name: 'Bank Of India', code: 'IN0018' },
  { name: 'Bank of Maharashtra', code: 'IN0019' },
  { name: 'Barclays Bank Plc.', code: 'IN0020' },
  { name: 'Baroda Gujarat Gramin Bank', code: 'IN0021' },
  { name: 'Baroda Rajasthan Kshetriya Gramin Bank', code: 'IN0022' },
  { name: 'Baroda Uttar Pradesh Gramin Bank', code: 'IN0023' },
  { name: 'Bassein Catholic Co-Operative Bank', code: 'IN0024' },
  { name: 'Bharat Co-op Bank', code: 'IN0025' },
  { name: 'BharatPE', code: 'IN0026' },
  { name: 'BNP Paribas India', code: 'IN0027' },
  { name: 'Canara Bank', code: 'IN0028' },
  { name: 'Capital Small Finance Bank Ltd', code: 'IN0029' },
  { name: 'Catholic Syrian Bank', code: 'IN0030' },
  { name: 'Central Bank Of India', code: 'IN0031' },
  { name: 'Chaitanya Godavari Grameena Bank', code: 'IN0032' },
  { name: 'Chhattisgarh Rajya Gramin Bank', code: 'IN0033' },
  { name: 'Citibank N.A. India', code: 'IN0034' },
  { name: 'City Union Bank', code: 'IN0035' },
  { name: 'Coastal Local Area Bank Limited', code: 'IN0036' },
  { name: 'Corporation Bank', code: 'IN0037' },
  { name: 'Cosmos Bank', code: 'IN0038' },
  { name: 'Dakshin Bihar Gramin Bank', code: 'IN0039' },
  { name: 'DBS Bank LTD', code: 'IN0040' },
  { name: 'DCB Bank', code: 'IN0041' },
  { name: 'Dena Bank', code: 'IN0042' },
  { name: 'Deutsche Bank', code: 'IN0043' },
  { name: 'Dhanlaxmi Bank', code: 'IN0044' },
  { name: 'Dnlm', code: 'IN0045' },
  { name: 'Ellaquai Dehati Bank', code: 'IN0046' },
  { name: 'Equitas Bank', code: 'IN0047' },
  { name: 'Esaf Small Finance Bank', code: 'IN0048' },
  { name: 'Exim Bank', code: 'IN0049' },
  { name: 'Federal Bank', code: 'IN0050' },
  { name: 'FINCARE SMALL FINANCE BANK', code: 'IN0051' },
  { name: 'Fino Payment Bank', code: 'IN0052' },
  { name: 'Gopinath Patil Parsik Janata Sahakari Bank Ltd', code: 'IN0054' },
  { name: 'HDFC Bank', code: 'IN0055' },
  { name: 'Himachal Pradesh Gramin Bank', code: 'IN0056' },
  { name: 'HSBC Bank', code: 'IN0057' },
  { name: 'ICICI Bank', code: 'IN0058' },
  { name: 'ICICI Corporate Bank', code: 'IN0059' },
  { name: 'IDBI Bank', code: 'IN0060' },
  { name: 'IDFC Bank', code: 'IN0061' },
  { name: 'India Post Payments Bank', code: 'IN0062' },
  { name: 'Indian Bank', code: 'IN0063' },
  { name: 'Indian Overseas Bank', code: 'IN0064' },
  { name: 'IndusInd Bank', code: 'IN0065' },
  { name: 'J&K Grameen Bank', code: 'IN0066' },
  { name: 'Jammu And Kashmir Bank', code: 'IN0067' },
  { name: 'Jana Small Finance Bank', code: 'IN0068' },
  { name: 'Janata Sahakari Bank Ltd Pune', code: 'IN0069' },
  { name: 'Jharkhand Rajya Gramin Bank', code: 'IN0070' },
  { name: 'Jio Payments Bank', code: 'IN0071' },
  { name: 'Kalyan Janata Sahakari Bank', code: 'IN0072' },
  { name: 'Karnataka Bank', code: 'IN0073' },
  { name: 'Karnataka Gramin Bank', code: 'IN0074' },
  { name: 'Karnataka Vikas Grameena Bank', code: 'IN0075' },
  { name: 'Karur Vysya Bank', code: 'IN0076' },
  { name: 'Kashi Gomti Samyut Gramin Bank', code: 'IN0077' },
  { name: 'Kerala Gramin Bank', code: 'IN0078' },
  { name: 'Kotak Bank', code: 'IN0079' },
  { name: 'Kotak Mahindra Bank', code: 'IN0080' },
  { name: 'Lakshmi Vilas Bank', code: 'IN0081' },
  { name: 'Madhya Bihar Gramin Bank', code: 'IN0082' },
  { name: 'Madhya Pradesh Gramin Bank', code: 'IN0083' },
  { name: 'Madhyanchal Gramin Bank', code: 'IN0084' },
  { name: 'MAHARASHTRA GRAMIN BANK', code: 'IN0085' },
  { name: 'Manipur Rural Bank', code: 'IN0086' },
  { name: 'Meghalaya Rural Bank', code: 'IN0087' },
  { name: 'Mizoram Rural Bank', code: 'IN0088' },
  { name: 'Nagaland Rural Bank', code: 'IN0089' },
  { name: 'Nainital Bank Ltd', code: 'IN0090' },
  { name: 'National Bank for Agricultureand Rural Development', code: 'IN0091' },
  { name: 'National Housing Bank', code: 'IN0092' },
  { name: 'North East Small Finance Bank', code: 'IN0093' },
  { name: 'NSDL Payments Bank', code: 'IN0094' },
  { name: 'Odisha Gramya Bank', code: 'IN0095' },
  { name: 'Oriental Bank Of Commerce', code: 'IN0096' },
  { name: 'Paschim Banga Gramin Bank', code: 'IN0097' },
  { name: 'Paytm Payments Bank', code: 'IN0098' },
  { name: 'Pragathi Krishna Gramin Bank', code: 'IN0099' },
  { name: 'Prathama UP Gramin Bank', code: 'IN0100' },
  { name: 'Puduvai Bharathiar Grama Bank', code: 'IN0101' },
  { name: 'Punjab and Sind Bank', code: 'IN0102' },
  { name: 'Punjab Gramin Bank', code: 'IN0103' },
  { name: 'Punjab National Bank', code: 'IN0104' },
  { name: 'Purvanchal Bank', code: 'IN0105' },
  { name: 'Rajasthan Marudhara Gramin Bank', code: 'IN0106' },
  { name: 'RBL Bank Ltd', code: 'IN0107' },
  { name: 'Reserve Bank of India', code: 'IN0108' },
  { name: 'Royal Bank of Scotland', code: 'IN0109' },
  { name: 'Saptagiri Grameena Bank', code: 'IN0110' },
  { name: 'Saraswat Bank', code: 'IN0111' },
  { name: 'Sarva Haryana Gramin Bank', code: 'IN0112' },
  { name: 'Saurashtra Gramin Bank', code: 'IN0113' },
  { name: 'Small Industries Development Bank of India', code: 'IN0114' },
  { name: 'South Indian Bank', code: 'IN0115' },
  { name: 'Standard Chartered Bank', code: 'IN0116' },
  { name: 'State Bank of Hyderabad', code: 'IN0117' },
  { name: 'State Bank of India', code: 'IN0118' },
  { name: 'Subhadra Local Area Bank Ltd', code: 'IN0119' },
  { name: 'Suryoday Small Finance Bank Ltd', code: 'IN0120' },
  { name: 'SVC Cooperative Bank Ltd', code: 'IN0121' },
  { name: 'Syndicate Bank', code: 'IN0122' },
  { name: 'Tamil Nadu Grama Bank', code: 'IN0123' },
  { name: 'Tamilnad Mercantile Bank Ltd', code: 'IN0124' },
  { name: 'Telangana Grameena Bank', code: 'IN0125' },
  { name: 'Tripura Gramin Bank', code: 'IN0126' },
  { name: 'UCO Bank', code: 'IN0127' },
  { name: 'Ujjivan Small Finance Bank', code: 'IN0128' },
  { name: 'Union Bank of India', code: 'IN0129' },
  { name: 'United Bank of India', code: 'IN0130' },
  { name: 'Utkal Grameen Bank', code: 'IN0131' },
  { name: 'Utkarsh Small Finance Bank', code: 'IN0132' },
  { name: 'Uttar Banga Kshetriya Gramin Bank', code: 'IN0133' },
  { name: 'Uttar Bihar Gramin Bank', code: 'IN0134' },
  { name: 'Uttarakhand Gramin Bank', code: 'IN0135' },
  { name: 'Vananchal Gramin Bank', code: 'IN0136' },
  { name: 'Vidharbha Konkan Gramin Bank', code: 'IN0137' },
  { name: 'Vijaya Bank', code: 'IN0138' },
  { name: 'Yes Bank', code: 'IN0139' },
  { name: 'OTHERS', code:"If you can't find the corresponding bank name, please select OTHERS"}
];


  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm('');
  };

  const filteredBanks = bankCodes.filter(bank => 
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-2 sm:p-6 font-sans">
      <div className="max-w-6xl mx-auto p-4 rounded-lg shadow-lg bg-gray-800 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-white">Transaction Reference</h2>
        
        {/* Tab navigation */}
        <div className="flex border-b border-gray-700 mb-4">
          <button 
            className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'deposit' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            onClick={() => handleTabChange('deposit')}
          >
            Deposit Status Codes
          </button>
          <button 
            className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'withdraw' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            onClick={() => handleTabChange('withdraw')}
          >
            Withdraw Status Codes
          </button>
          <button 
            className={`px-4 py-2 rounded-t-lg ${activeTab === 'bank' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            onClick={() => handleTabChange('bank')}
          >
            Bank Codes
          </button>
        </div>

        {/* Content for Deposit Status */}
        {activeTab === 'deposit' && (
          <div className="overflow-x-auto">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Deposit Status Enumeration List</h3>
            <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-600">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Sl No.</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Status Correlation</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Type</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                {depositStatuses.map((status, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'}>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{status.value}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{status.status}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{status.type}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{status.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Content for Withdraw Status */}
        {activeTab === 'withdraw' && (
          <div className="overflow-x-auto">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Withdraw Status Enumeration List</h3>
            <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-600">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Sl No.</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Status Correlation</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Type</th>
                </tr>
              </thead>
              <tbody>
                {withdrawStatuses.map((status, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'}>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{status.value}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{status.status}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{status.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Content for Bank Codes */}
        {activeTab === 'bank' && (
          <div className="overflow-x-auto">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Withdraw BankCode List</h3>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Search bank..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-600 rounded w-full mb-2 bg-gray-700 text-white"
              />
            </div>
            <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-600">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Bank Name</th>
                  <th className="py-2 px-4 border-b border-gray-600 text-left text-gray-200">Bank Code</th>
                </tr>
              </thead>
              <tbody>
                {filteredBanks.map((bank, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'}>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{bank.name}</td>
                    <td className="py-2 px-4 border-b border-gray-600 text-gray-200">{bank.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredBanks.length === 0 && (
              <p className="mt-4 text-gray-300">No banks found matching your search.</p>
            )}
            <p className="mt-2 text-sm text-gray-400">Note: This is the list of banks. Use search to find specific banks.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatusCodes;