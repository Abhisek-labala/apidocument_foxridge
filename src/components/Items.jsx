import React, { useState } from 'react';

const apiData = [
  {
    title: '1. Deposit',
    description: 'API endpoint for initiating a deposit transaction',
    method: 'POST',
    url: 'https://gamesforapi.foxridge.fun/api/order/deposit',
    authorization: 'Bearer Token',
    parameters: [
      { name: 'client_transaction_id', type: 'string', required: true, description: 'Unique transaction identifier' },
      { name: 'amount', type: 'string', required: true, description: 'Deposit amount' },
      { name: 'return_url', type: 'string', required: true, description: 'URL to redirect after payment' },
      { name: 'callback_url', type: 'string', required: true, description: 'Webhook URL for payment notifications' }
    ],
    requestExample: `{
    "client_transaction_id": "FTC2H12752598311",
    "amount": "500",
    "return_url": "https://gamesforapi.foxridge.fun/",
    "callback_url": "https://gamesforapi.foxridge.fun/api/callback"
}`,
    curlExample: `curl --location 'https://gamesforapi.foxridge.fun/api/order/deposit' \\
--data '{
    "client_transaction_id": "FTC2H12752598311",
    "amount": "500",
    "return_url": "https://gamesforapi.foxridge.fun/",
    "callback_url": "https://gamesforapi.foxridge.fun/api/callback"
}'`,
    returnExample: `{
  "code": "00",
  "data": {
    "orderId": "2505121226ykpl06",
    "paymentLink": "https://gamefourtest.tigersmouse.com/m?orderNo=ee2P",
    "payeeName": "--",
    "payeeBankName": "--",
    "payeeBranchName": "--",
    "payeeAccount": "--",
    "applyAmount": "500"
  }
}`
  },
  {
    title: '2. Withdraw UPI',
    description: 'API endpoint for processing UPI withdrawal requests',
    method: 'POST',
    url: 'https://gamesforapi.foxridge.fun/api/order/withdraw',
    authorization: 'Bearer Token',
    parameters: [
      { name: 'client_transaction_id', type: 'string', required: true, description: 'Unique transaction identifier' },
      { name: 'applyAmount', type: 'string', required: true, description: 'Withdrawal amount' },
      { name: 'applyUserName', type: 'string', required: true, description: 'Beneficiary name' },
      { name: 'applyAccount', type: 'string', required: true, description: 'UPI ID' },
      { name: 'return_url', type: 'string', required: true, description: 'URL to redirect after processing' },
      { name: 'callback_url', type: 'string', required: true, description: 'Webhook URL for withdrawal notifications' },
      { name: 'cust_name', type: 'string', required: true, description: 'Customer name' },
      { name: 'cust_email', type: 'string', required: true, description: 'Customer email' },
      { name: 'cust_phone', type: 'string', required: true, description: 'Customer phone number' },
      { name: 'payment_mode', type: 'string', required: true, description: 'Payment mode (upi)' }
    ],
    requestExample: `{
    "client_transaction_id": "GT101722057077",
    "applyAmount": "1000",
    "applyUserName": "ABHISEK",
    "applyAccount": "798746597987@ybl",
    "return_url": "https://foxridge.fun",
    "callback_url": "https://gamesforapi.foxridge.fun/api/callback",
    "cust_name": "Abhisek",
    "cust_email": "dskvub@Bkhdj.com",
    "cust_phone": "78979798987",
    "payment_mode": "upi"
}`,
    curlExample: `curl --location 'https://gamesforapi.foxridge.fun/api/order/withdraw' \\
--data-raw '{
    "client_transaction_id": "GT121722057077",
    "applyAmount": "1000",
    "applyUserName": "ABHISEK",
    "applyAccount": "798746597987@ybl",
    "return_url": "https://foxridge.fun",
    "callback_url": "https://gamesforapi.foxridge.fun/api/callback",
    "cust_name": "Abhisek",
    "cust_email": "dskvub@Bkhdj.com",
    "cust_phone": "78979798987",
    "payment_mode": "upi"
}'`,
    returnExample: `{
  "success": "Withdrawal processed successfully",
  "data": {
    "order_id": "FWTWTRJX-1747068398",
    "status": "pending",
    "amount_inr": "1000",
    "transaction_type": "debited",
    "transaction_id": "FX20250512221637",
    "credited_time_date": "2025-05-12T16:46:38+00:00",
    "merchant_name": "ft-intent1830",
    "channel": "UPI",
    "account_details": null,
    "cust_name": "Abhisek",
    "cust_email": "dskvub@Bkhdj.com",
    "cust_phone": "78979798987"
  }
}`
  },
  {
    title: '3. Withdraw Netbanking',
    description: 'API endpoint for processing Netbanking withdrawal requests',
    method: 'POST',
    url: 'https://gamesforapi.foxridge.fun/api/order/withdraw',
    authorization: 'Bearer Token',
    parameters: [
      { name: 'client_transaction_id', type: 'string', required: true, description: 'Unique transaction identifier' },
      { name: 'applyAmount', type: 'string', required: true, description: 'Withdrawal amount' },
      { name: 'applyUserName', type: 'string', required: true, description: 'Beneficiary name' },
      { name: 'applyAccount', type: 'string', required: true, description: 'Bank account number' },
      { name: 'applyIfsc', type: 'string', required: true, description: 'IFSC code' },
      { name: 'applyBankName', type: 'string', required: true, description: 'Bank name' },
      { name: 'applyBankCode', type: 'string', required: true, description: 'Bank code' },
      { name: 'return_url', type: 'string', required: true, description: 'URL to redirect after processing' },
      { name: 'callback_url', type: 'string', required: true, description: 'Webhook URL for withdrawal notifications' },
      { name: 'cust_name', type: 'string', required: true, description: 'Customer name' },
      { name: 'cust_email', type: 'string', required: true, description: 'Customer email' },
      { name: 'cust_phone', type: 'string', required: true, description: 'Customer phone number' },
      { name: 'payment_mode', type: 'string', required: true, description: 'Payment mode (netbanking)' }
    ],
    requestExample: `{
    "client_transaction_id": "FXT155282057077",
    "applyAmount": "500",
    "applyUserName": "ABHISEK LABALA",
    "applyAccount": "50100429771928",
    "applyIfsc": "HDFC0002821",
    "applyBankName": "HDFC BANK",
    "applyBankCode": "IN0055",
    "return_url": "https://foxridge.fun",
    "callback_url": "https://gamesforapi.foxridge.fun/api/callback",
    "cust_name": "Abhisek",
    "cust_email": "dskvub@Bkhdj.com",
    "cust_phone": "78979798987",
    "payment_mode": "netbanking"
}`,
    curlExample: `curl --location 'https://gamesforapi.foxridge.fun/api/order/withdraw' \\
--data-raw '{
    "client_transaction_id": "FXT25282057077",
    "applyAmount": "1000",
    "applyUserName": "ABHISEK LABALA",
    "applyAccount": "50100429771928",
    "applyIfsc": "HDFC0002821",
    "applyBankName": "HDFC BANK",
    "applyBankCode": "IN0055",
    "return_url": "https://foxridge.fun",
    "callback_url": "https://gamesforapi.foxridge.fun/api/callback",
    "cust_name": "Abhisek",
    "cust_email": "dskvub@Bkhdj.com",
    "cust_phone": "78979798987",
    "payment_mode": "netbanking"
}'`,
    returnExample: `{
  "code": "00",
  "data": {
    "orderId": "250512164555bvisu2",
    "merchantOrderId": "FX20250512221555"
  }
}`
  },
  {
    title: '4. Deposit Callback',
    description: 'API endpoint for checking the status of a deposit transaction',
    method: 'POST',
    url: 'https://gamesforapi.foxridge.fun/api/order/deposit_status',
    authorization: 'Bearer Token',
    parameters: [
      { name: 'client_transaction_id', type: 'string', required: true, description: 'Unique transaction identifier' }
    ],
    requestExample: `{
    "client_transaction_id": "FTC2H12752598311"
}`,
    curlExample: `curl --location 'https://gamesforapi.foxridge.fun/api/order/deposit_callback' \\
--data '{
    "client_transaction_id":"FTC2H12752598311"
}'`,
    returnExample: `{
    "status": "Completed",
    "orderId": "FX202505201614440",
    "createdAt": "2025-05-20 10:44:50",
    "updatedAt": "2025-05-20 16:15:13",
    "realAmount": "500.00",
    "applyAmount": "500.00",
    "merchantOrderId": "GVI893498140698"
}`
  },
  {
    title: '5. Withdraw Callback',
    description: 'API endpoint for checking the status of a withdrawal transaction',
    method: 'POST',
    url: 'https://gamesforapi.foxridge.fun/api/order/withdraw_status',
    authorization: 'Bearer Token',
    parameters: [
      { name: 'client_transaction_id', type: 'string', required: true, description: 'Unique transaction identifier' }
    ],
    requestExample: `{
    "client_transaction_id": "GT101722057077"
}`,
    curlExample: `curl --location 'https://gamesforapi.foxridge.fun/api/order/withdraw_callback' \\
--data '{
    "client_transaction_id":"GT101722057077"
}'`,
    returnExample: `{
    "orderId": "FX20250521134838",
    "merchantOrderId": "GT101722057077",
    "status": "Pending",
    "applyAmount": "1000.00",
    "remittanceAmount": "1000.00",
    "createdAt": "2025-05-21 13:48:38",
    "updatedAt": "2025-05-21 13:54:38"
}`
  }
];

const Items = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeTab, setActiveTab] = useState('parameters');

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-2 sm:p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 border-b border-gray-700 pb-4">
          <h1 className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            FoxRidge Payment API Documentation
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Complete reference for payment gateway integration
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar Navigation */}
          <div className="lg:w-1/4 bg-gray-800 rounded-lg p-3 shadow-lg mb-4 lg:mb-0">
            <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-300 border-b border-gray-700 pb-2">
              Endpoints
            </h2>
            <nav className="space-y-1">
              {apiData.map((section, index) => (
                <div key={index} className="mb-2">
                  <button
                    onClick={() => setActiveSection(activeSection === index ? null : index)}
                    className={`w-full text-left px-2 py-2 rounded flex justify-between items-center text-sm sm:text-base ${
                      activeSection === index ? 'bg-blue-900 bg-opacity-30 text-blue-400' : 'hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    <span className="truncate">{section.title}</span>
                    <span className="text-xs sm:text-sm flex-shrink-0 ml-1">{activeSection === index ? '−' : '+'}</span>
                  </button>
                  
                  {activeSection === index && (
                    <ul className="ml-3 mt-1 space-y-1 text-xs sm:text-sm text-gray-400 border-l border-gray-700 pl-2">
                      <li 
                        className={`cursor-pointer hover:text-blue-400 px-2 py-1 ${activeTab === 'description' ? 'text-blue-400' : ''}`}
                        onClick={() => setActiveTab('description')}
                      >
                        Description
                      </li>
                      <li 
                        className={`cursor-pointer hover:text-blue-400 px-2 py-1 ${activeTab === 'parameters' ? 'text-blue-400' : ''}`}
                        onClick={() => setActiveTab('parameters')}
                      >
                        Parameters
                      </li>
                      <li 
                        className={`cursor-pointer hover:text-blue-400 px-2 py-1 ${activeTab === 'request' ? 'text-blue-400' : ''}`}
                        onClick={() => setActiveTab('request')}
                      >
                        Request Example
                      </li>
                      <li 
                        className={`cursor-pointer hover:text-blue-400 px-2 py-1 ${activeTab === 'response' ? 'text-blue-400' : ''}`}
                        onClick={() => setActiveTab('response')}
                      >
                        Response Example
                      </li>
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4 bg-gray-800 rounded-lg p-3 sm:p-6 shadow-lg">
            {activeSection !== null ? (
              <div>
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <span className="px-2 py-1 rounded text-xs sm:text-sm font-bold bg-blue-900 text-blue-400">
                    {apiData[activeSection].method}
                  </span>
                  <span className="text-gray-300 font-mono text-xs sm:text-sm break-all">{apiData[activeSection].url}</span>
                </div>
                
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-100">
                    {apiData[activeSection].title}
                  </h2>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                    Authorization: {apiData[activeSection].authorization}
                  </span>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <p className="text-gray-300 text-sm sm:text-base">
                    {apiData[activeSection].description}
                  </p>
                </div>

                {activeTab === 'parameters' && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-200 border-b border-gray-700 pb-2">Request Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-gray-900 text-gray-400">
                            <th className="text-left py-2 px-2 sm:px-4 rounded-tl-lg">Parameter</th>
                            <th className="text-left py-2 px-2 sm:px-4">Type</th>
                            <th className="text-left py-2 px-2 sm:px-4">Required</th>
                            <th className="text-left py-2 px-2 sm:px-4 rounded-tr-lg">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {apiData[activeSection].parameters.map((param, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
                              <td className="py-2 px-2 sm:px-4 font-mono break-all">{param.name}</td>
                              <td className="py-2 px-2 sm:px-4">
                                <span className="px-1 sm:px-2 py-1 rounded text-xs bg-gray-700">
                                  {param.type}
                                </span>
                              </td>
                              <td className="py-2 px-2 sm:px-4">
                                {param.required ? (
                                  <span className="text-green-400">Yes</span>
                                ) : (
                                  <span className="text-gray-500">No</span>
                                )}
                              </td>
                              <td className="py-2 px-2 sm:px-4 text-gray-300">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'request' && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-200 border-b border-gray-700 pb-2">Request Example</h3>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">JSON Payload</h4>
                      <div className="bg-gray-900 p-2 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                        <pre className="text-gray-300 whitespace-pre">{apiData[activeSection].requestExample}</pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">cURL Example</h4>
                      <div className="bg-gray-900 p-2 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                        <pre className="text-gray-300 whitespace-pre">{apiData[activeSection].curlExample}</pre>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'response' && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-200 border-b border-gray-700 pb-2">Response Example</h3>
                    <div className="bg-gray-900 p-2 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                      <pre className="text-gray-300 whitespace-pre">{apiData[activeSection].returnExample}</pre>
                    </div>
                  </div>
                )}

                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-200 border-b border-gray-700 pb-2">API Details</h3>
                    <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                      <div>
                        <h4 className="font-semibold text-gray-200">Endpoint</h4>
                        <p className="font-mono bg-gray-900 p-2 rounded mt-1 text-xs sm:text-sm break-all">{apiData[activeSection].url}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Method</h4>
                        <p className="font-mono bg-gray-900 p-2 rounded mt-1 text-xs sm:text-sm">{apiData[activeSection].method}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Authorization</h4>
                        <p className="font-mono bg-gray-900 p-2 rounded mt-1 text-xs sm:text-sm">{apiData[activeSection].authorization}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Description</h4>
                        <p className="bg-gray-900 p-2 rounded mt-1 text-xs sm:text-sm">{apiData[activeSection].description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center px-4">
                <div className="text-4xl sm:text-5xl text-gray-600 mb-3 sm:mb-4">💸</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-400">Select an endpoint from the sidebar</h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">View detailed API documentation for FoxRidge payment gateway</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Items;