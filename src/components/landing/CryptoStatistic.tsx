import React from "react";
// import LineChart from "../LineChart";

interface cryptoData {
    id: number,
    name: string,
    price: number,
    logo: string,
    increase: boolean,
    data: number[]
}

const CryptoStatistic = (props: any) => {
    
  return (
    <div
      className={`w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6 ${props.style}`}
      v-bind="$attrs"
    >
      <div className="w-full flex items-center justify-between">
        <span className="font-medium">{props.title}</span>
        <button className="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300">
          <span>More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-gray-500">
                    Name
                  </th>
                  <th className="text-left text-sm font-medium text-gray-500">
                    Price
                  </th>
                  <th className="hidden sm:block text-left text-sm font-medium text-gray-500">
                    Chart
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.datasets.map(function(data: cryptoData, i: number) {
                 return (
                    <tr
                    key={i}
                    className="border-b border-gray-200"
                  >
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <img
                          src={require(`../../assets/img/crypto-icon/${data.logo}`)}
                          alt=""
                        />
                        <span>{data.name}</span>
                      </div>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {data.increase ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 text-emerald-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18 12H6"
                            />
                          </svg>
                        )}
                        <span>${data.price}</span>
                      </div>
                    </td>
                    <td className="hidden sm:block whitespace-nowrap">
                      <div className="w-28 h-12 -mx-2">
                        <img draggable="false" src={require(`../../assets/img/${data.increase ? 'chart.png' : 'red-chart.png'}`)} alt="" />
                      </div>
                    </td>
                  </tr>
                 )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoStatistic;
