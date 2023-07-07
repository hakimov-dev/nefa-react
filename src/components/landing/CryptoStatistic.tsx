import React from "react";

const CryptoStatistic = (title: string, datasets: object[]) => {
    return (
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">{ title }</span>
          <button
            className="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
          >
            <span>More</span>
            {/* <ChevronRightIcon :size="16" /> */}
          </button>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left text-sm font-medium text-gray-500">Name</th>
                    <th className="text-left text-sm font-medium text-gray-500">Price</th>
                    <th className="hidden sm:block text-left text-sm font-medium text-gray-500">Chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in datasets" className="border-b border-gray-200">
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <img 
                        // :src="require(`~/assets/img/crypto-icon/${data.logo}`)"
                         alt="" />
                        <span>{ 
                            // data.name 
                            }</span>
                      </div>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {/* {/* <PlusThickIcon v-if="data.increase" :size="14" class="text-emerald-500" /> */}
                        {/* <MinusThickIcon v-else :size="14" class="text-red-500" /> */}
                        <span>${ 
                            // data.price 
                            }</span>
                      </div>
                    </td>
                    <td className="hidden sm:block whitespace-nowrap">
                      <div>
                        {/* <LineChart class="w-28 h-12 -mx-2" :datasets="data.data" :increase="data.increase" /> */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CryptoStatistic