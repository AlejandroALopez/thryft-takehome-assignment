"use client";
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

interface IDetails {
    fullName: string,
    addr1: string,
    addr2: string,
    addr3: string,
    email: string,
    product: string
}

export default function ConfirmationModal(
    { isConfirmOpen, setConfirmOpen, details }: {
        isConfirmOpen: boolean;
        setConfirmOpen: Dispatch<SetStateAction<boolean>>;
        details: IDetails;
    }) {

    const router = useRouter();

    const closeModal = () => {
        setConfirmOpen(false);
    }

    // Execute function passed to modal
    const handleConfirm = () => {
        closeModal();
        router.push('/confirmation');
    };

    if (!isConfirmOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div onClick={closeModal} className="absolute inset-0 bg-[#8388EDBF] bg-opacity-75"></div>
            <div className="relative bg-white rounded-2xl shadow-lg w-[90vw] max-w-xl mx-auto p-6">
                <p className="text-xl font-bold text-center">Confirm Shipping Details</p>
                <div className='flex flex-col items-center my-12'>
                    <p>{details.fullName}</p>
                    <p>{details.addr1}</p>
                    <p>{details.addr2}</p>
                    <p>{details.addr3}</p>
                    <p>{details.email}</p>
                    <p>{details.product}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <button
                        onClick={closeModal}
                        className={`py-2 px-6 rounded-lg bg-white border-2 border-primary
                        text-primary font-bold transition hover:scale-105 duration-300`}>
                        Cancel and Edit
                    </button>
                    <button
                        onClick={handleConfirm}
                        className={`py-2 px-6 border-none rounded-md bg-primary 
                        text-white font-bold transition hover:scale-105 duration-300`}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}