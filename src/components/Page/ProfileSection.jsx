"use client";
import React, { useState } from "react";
import { UserCircleIcon, PlusCircleIcon, PlusIcon } from "@heroicons/react/20/solid";
import Modal from "../Modal/Modal";
import FormInput from "../Inputs/FormInput";
import Dropdown from "../Inputs/Dropdown";

export default function ProfileSection() {
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState({});


  const options = [
    { value: 'taka', label: 'Taka' },
    { value: 'doller', label: 'Doller' },
    { value: 'pound', label: 'Pound' },
  ];


  const handleChildClick = () => {
    setOpenModal(false); // Update parent state
  };

  const submitData = async () => {
    console.log(userData);
  };

  const handleSelect = (value) => {
    console.log('Selected value:', value);
  };

  return (
    <div className="px-16 pr-24 py-8 flex items-center justify-between">
      <div className="flex items-center gap-x-3  text-indigo-500">
        <UserCircleIcon className="h-10 w-10 " />
        <p className="text-xl font-semibold ">Steve Jobs</p>
      </div>
      <PlusCircleIcon
        onClick={() => setOpenModal(true)}
        className="h-10 w-10 text-indigo-500"
      />

      {/* modal  */}
      <Modal
        onClick={handleChildClick}
        shouldModalOpen={openModal}
        title="Add New Customer"
      >
        <div className="pb-6 flex flex-col gap-y-6 ">
          <label className="block">
            <FormInput
              changedValue={(name) => setUserData({ ...userData, name: name })}
              type="text"
              label="Name"
              placeholder=""
            />
          </label>

          <label className="block">
            <FormInput
              changedValue={(email) =>
                setUserData({ ...userData, email: email })
              }
              type="email"
              label="Email"
              placeholder="Enter your Email"
            />
          </label>

          <label className="block">
            <FormInput
              changedValue={(phone) =>
                setUserData({ ...userData, phone: phone })
              }
              type="phone"
              label="Phone"
              placeholder="Enter your phone"
            />
          </label>

          {/* <label className="block">
            <FormInput
              changedValue={(currency) =>
                setUserData({ ...userData, currency: currency })
              }
              type="currency"
              label="Currency"
              placeholder="Enter your currency"
            />
          </label> */}
          <div>
          <Dropdown label="Currency" options={options} onSelect={handleSelect} />

          </div>

          <label className="block">
            <FormInput
              changedValue={(Tax_ID) =>
                setUserData({ ...userData, Tax_ID: Tax_ID })
              }
              type="Tax_ID"
              label="Tax_ID"
              placeholder="Enter your Tax_ID"
            />
          </label>

          <div className="flex items-center gap-x-2 text-blue-600">
            <PlusIcon className="h-6 w-6" />
            <p className="text-sm font-semibold">Add More Details</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 w-full h-14 rounded text-white text-xl">
            Update
          </button>
        </div>
      </Modal>
    </div>
  );
}
