"use client";

import Image from "next/image";
import { useState } from "react";
import { packageInfo, packageOptions, states } from "./constants";
import Header from "@/components/Header";
import ConfirmationModal from "@/components/ConfirmationModal";
import LogoSmall from "../../public/icons/logoSmall.svg";
import PathVector from "../../public/icons/pathVector.svg";

interface PackageProps {
  id: number;
  removePackage: (id: number) => void;
}

// Single Package component
export const Package: React.FC<PackageProps> = ({ id, removePackage }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [style, setStyle] = useState<string>("");
  const [pkgName, setPackageName] = useState<string>("");

  return (
    <div className="flex flex-col p-4 border-[1px] border-gray-400 rounded-lg gap-2">
      {/* Package Selector */}
      <p className='font-semibold'>Package</p>
      <select
        className={`w-full px-4 py-[9px] border-[#808080] border-[1px] rounded-lg
                 disabled:text-[#B2B2B2]'}`}
        value={pkgName}
        onChange={e => setPackageName(e.target.value)}
      >
        <option value="" disabled>Select</option>
        {packageOptions.map((pkgOption: string) => (
          <option key={pkgOption} value={pkgOption}>{pkgOption} (${packageInfo[pkgOption].price} per unit)</option>
        ))}
      </select>
      {/* Quantity and Styles selectors */}
      {pkgName && (
        <>
          <p className='font-semibold'>Quantity</p>
          <input
            type="number"
            min={1}
            className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
            value={quantity}
            onChange={e => setQuantity(parseInt(e.target.value))}
            required
          />
          <p className='font-semibold'>Style</p>
          <select
            className={`w-full px-4 py-[9px] border-[#808080] border-[1px] rounded-lg
                 disabled:text-[#B2B2B2]'}`}
            value={style}
            onChange={e => setStyle(e.target.value)}
          >
            <option value="" disabled>Select</option>
            {packageInfo[pkgName].styles.map((styleOption: string) => (
              <option key={styleOption} value={styleOption}>{styleOption}</option>
            ))}
          </select>
        </>
      )}
       <button className="w-full text-right text-gray-500" onClick={() => removePackage(id)}>Remove</button>
    </div>
  );
};

export default function Home() {
  // Form input states
  const [igHandle, setIngHandle] = useState<string>("@");
  const [productDetails, setProductDetails] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [addr1, setAddr1] = useState<string>("");
  const [addr2, setAddr2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zip, setZip] = useState<string>("");

  // Modal and error states
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Package state
  const [pkgList, setPkgList] = useState<{ id: number }[]>([]);

  // Check for errors and show modal
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (igHandle === "" || igHandle === "@") {
      setErrorMsg("Please enter your instagram handle");
      return;
    }

    if (email !== confirmEmail) {
      setErrorMsg("Please make sure your email and confirmation email match");
      return;
    }

    setConfirmOpen(true);
  };

  const addPackage = () => {
    setPkgList([...pkgList, { id: Date.now() }]);
  };

  const removePackage = (id: number) => {
    setPkgList(pkgList.filter(pkg => pkg.id !== id));
  };

  return (
    <div>
      <ConfirmationModal
        isConfirmOpen={isConfirmOpen}
        setConfirmOpen={setConfirmOpen}
        details={{
          fullName: firstName + " " + lastName,
          addr1: addr1,
          addr2: addr2,
          addr3: city + ", " + state + ", " + zip,
          email: email,
          product: productDetails,
        }}
      />
      <main className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="w-full flex justify-center mt-8">
          <p className="text-2xl font-bold max-w-md text-right">Thank you for purchasing from
            {" "}
            <span className="text-primary">[thryfter]</span>
          </p>
        </div>
        <div className="flex flex-row justify-center mt-12">
          <Image src={PathVector} alt="path vector" />
          <Image src={LogoSmall} alt="logo small" />
        </div>
        {/* Content */}
        <div className="flex flex-col items-center justify-between p-12">
          {/* Heading text */}
          <div className="flex flex-col w-full max-w-2xl gap-2">
            <p className="text-2xl font-bold">Your Shipping Information</p>
            <p>Your Instagram Handle helps us match your address to your purchase.
              We will send your shipment tracking information to your email.</p>
          </div>
          {/* Error Message */}
          {errorMsg && (
            <div className="flex justify-center bg-red-100 w-full max-w-md mt-8 p-2 border-[1px] border-red-400 rounded-sm">
              <p className="text-red-500 text-sm w-full text-center">{errorMsg}</p>
            </div>
          )}
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-2 my-12'
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Instagram Handle</p>
                <input
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder=""
                  value={igHandle}
                  onChange={e => setIngHandle(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Product(s) Description</p>
                <input
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder="ex.funky rat"
                  value={productDetails}
                  onChange={e => setProductDetails(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Email</p>
                <input
                  type="email"
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder=""
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Confirm Email</p>
                <input
                  type="email"
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder=""
                  value={confirmEmail}
                  onChange={e => setConfirmEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>First Name</p>
                <input
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder=""
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Last Name</p>
                <input
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder=""
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className='font-semibold'>Address Line 1</p>
              <input
                className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                placeholder=""
                value={addr1}
                onChange={e => setAddr1(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className='font-semibold'>Apartment, Suite, Etc. (opt)</p>
              <input
                className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                placeholder=""
                value={addr2}
                onChange={e => setAddr2(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>City</p>
                <input
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder="City"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>State</p>
                <select
                  className={`w-full px-4 py-[9px] border-[#808080] border-[1px] rounded-lg
                 disabled:text-[#B2B2B2] ${!state && 'text-[#B2B2B2]'}`}
                  value={state}
                  onChange={e => setState(e.target.value)}
                  required
                >
                  <option value="" disabled>State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Zip Code</p>
                <input
                  className="w-full px-4 py-2 border-[#808080] border-[1px] rounded-lg"
                  placeholder="XXXXX"
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Packages: Add button and List */}
            <button
              className={`py-3 px-6 mt-4 w-fit border-none rounded-lg bg-primary transition hover:scale-105 duration-300`}
              onClick={() => addPackage()}
            >
              <p className='text-white font-bold'>+ Add new Package</p>
            </button>
            {pkgList.map((pkg) => (
              <Package key={pkg.id} id={pkg.id} removePackage={removePackage} />
            ))}
            {/* Submit button */}
            <div className="flex items-center justify-center mt-12">
              <button
                className={`py-3 px-6 w-fit border-none rounded-lg bg-primary transition hover:scale-105 duration-300`}
                type="submit"
              >
                <p className='text-white font-bold'>Submit</p>
              </button>
            </div>
          </form >
          <p className="font-medium text-[#878787]">powered by Thryft Ship</p>
        </div>
      </main >
    </div>
  );
}
