"use client";
import React, { useState } from "react";
import { UserCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import Modal from "../Modal/Modal";
import FormInput from "../Inputs/FormInput";

export default function ProfileSection() {
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState({});

  const handleChildClick = () => {
    setOpenModal(false); // Update parent state
  };

  const submitData = async () => {
    console.log(userData);
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
        <div className="py-10  flex flex-col gap-y-3">
          <label className="block">
            <FormInput
              changedValue={(phone_number) =>
                setUserData({ ...userData, phone_number: phone_number })
              }
              type="number"
              label="phone"
              placeholder="Enter your phone"
            />
          </label>

          <label className="block">
            <FormInput
              changedValue={(password) =>
                setUserData({ ...userData, password: password })
              }
              type="password"
              label="password"
              errorMsg=''
              placeholder="Enter your password"
            />
          </label>
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
