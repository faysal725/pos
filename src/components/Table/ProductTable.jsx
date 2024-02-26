import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  PencilSquareIcon,
  PlusCircleIcon,
  ClockIcon,
  PaperAirplaneIcon,
  TrashIcon,
  XCircleIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  HandRaisedIcon
} from "@heroicons/react/20/solid";


import IconBtnLg from "../Button/IconBtnLg";
import ItemCounter from "../Counter/ItemCounter";

export default function ProductTable({ tableData }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-10">
      <div className=" flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="">
                {tableData.map((product) => (
                  <tr key={product.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <PencilSquareIcon className="h-6 w-6 text-slate-500" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500 font-semibold border">
                      {product.title.length > 20
                        ? product.title.slice(0, 20) + ". . ."
                        : product.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500 font-semibold border">
                      ${product.price}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500 font-semibold border">
                      <ItemCounter />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500 font-semibold border">
                      ${product.discount_price}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 flex justify-center">
                      <TrashIcon className="h-6 w-6 text-red-500" />
                    </td>
                  </tr>
                ))}

                <tr>
                  <td
                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                    colspan="3"
                  ></td>
                  <td className="whitespace-nowrap px-3 py-4 text-base text-gray-500 font-semibold ">
                    Sub Total
                  </td>
                  <td
                    className="whitespace-nowrap px-3 py-4 text-base text-gray-800 font-semibold text-end"
                    colspan="2"
                  >
                    $5000
                  </td>
                </tr>

                <tr className="border-none">
                  <td
                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                    colspan="3"
                  ></td>
                  <td className="whitespace-nowrap px-3 py-4 text-base text-gray-500 font-semibold border-t">
                    Tax
                  </td>
                  <td
                    className="whitespace-nowrap px-3 py-4 text-base text-gray-800 font-semibold text-end border-t"
                    colspan="2"
                  >
                    $50.00
                  </td>
                </tr>

                <tr className="border-none">
                  <td
                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                    colspan="3"
                  ></td>
                  <td className="whitespace-nowrap px-3 py-4 text-base text-gray-500 font-semibold border-t">
                    Shipping
                  </td>
                  <td
                    className="whitespace-nowrap px-3 py-4 text-base text-gray-800 font-semibold text-end border-t"
                    colspan="2"
                  >
                    $50.00
                  </td>
                </tr>

                <tr className="border-none">
                  <td
                    className="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-0"
                    colspan="3"
                  ></td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-500 font-semibold border-t">
                    Discount on Cart
                  </td>
                  <td
                    className="whitespace-nowrap px-3 py-4 text-base text-gray-800 font-semibold text-end border-t"
                    colspan="2"
                  >
                    $10.00
                  </td>
                </tr>

                <tr className="text-blue-500 bg-blue-100">
                  <td
                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-0"
                    colspan="3"
                  >
                    <p className="text-sm px-5 ">Products Count(13)</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-2xl  font-semibold ">
                    Total
                  </td>
                  <td
                    className="whitespace-nowrap px-3 py-4 text-2xl  font-semibold text-end"
                    colspan="2"
                  >
                    $5000
                  </td>
                </tr>
              </tbody>
            </table>

            <div className=" py-2 flex justify-start gap-2 md:gap-0 md:justify-between flex-wrap ">
              <IconBtnLg icon={<XCircleIcon className="h-10 w-10" />} classes="bg-red-100 text-red-500 hover:bg-red-500" title="Cancel"/>
              <IconBtnLg icon={<HandRaisedIcon className="h-10 w-10" />} classes="bg-indigo-100 text-indigo-500 hover:bg-indigo-500" title="Hold"/>
              <IconBtnLg icon={<ReceiptPercentIcon className="h-10 w-10" />} classes="bg-indigo-100 text-indigo-500 hover:bg-indigo-500" title="Discount"/>
              <IconBtnLg icon={<BanknotesIcon className="h-10 w-10" />} classes="bg-blue-100 text-blue-500 hover:bg-blue-500" title="Pay Now"/>

                      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
