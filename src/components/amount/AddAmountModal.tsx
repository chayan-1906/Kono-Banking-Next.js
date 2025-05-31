'use client';

import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {CiSquarePlus} from "react-icons/ci";
import {IoClose} from "react-icons/io5";
import {FaRupeeSign} from "react-icons/fa";
import {SiRazorpay} from "react-icons/si";
import {Field, Formik, FormikHelpers} from "formik";
import * as yup from 'yup';
import {toast} from "react-toastify";

function AddAmountModal() {
	const [isOpen, setIsOpen] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const initialState = {
		amount: 0,
	};
	const validationSchema = yup.object({
		amount: yup.number().min(1, 'Minimum amount is ₹1').required('Amount is required'),
	});

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const onSubmitHandler = async (values: typeof initialState, {resetForm}: FormikHelpers<typeof initialState>) => {
		console.log(values);
		try {
			setIsLoading(true);
			resetForm();
			toast.success('Amount added');
		} catch (error: any) {
			console.error('Error in addAmount onSubmitHandler:', error);
			toast.error(error.response?.data?.error?.message || error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<button type={'button'} onClick={openModal} className={'text-3xl text-rose-700 cursor-pointer'}>
				<CiSquarePlus/>
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as={'div'} className={'relative z-10'} onClose={closeModal}>
					<Transition.Child as={Fragment} enter={'ease-out duration-300'} enterFrom={'opacity-0'} enterTo={'opacity-100'}
					                  leave={'ease-in duration-200'} leaveFrom={'opacity-100'} leaveTo={'opacity-0'}>
						<div className={'fixed inset-0 bg-black/25'}/>
					</Transition.Child>

					<div className={'fixed inset-0 overflow-y-auto'}>
						<div className={'flex min-h-[50vh] items-center justify-center p-4 text-center'}>
							<Transition.Child as={Fragment}
							                  enter={'ease-out duration-300'} enterFrom={'opacity-0 scale-95'} enterTo={'opacity-100 scale-100'}
							                  leave={'ease-in duration-200'} leaveFrom={'opacity-100 scale-100'} leaveTo={'opacity-0 scale-95'}>
								<Dialog.Panel className={'w-full max-w-xl rounded-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all'}>
									<Dialog.Title as={'h3'} className={'flex justify-between items-center text-lg font-medium leading-6 text-gray-900'}>
										<span>Add Payment</span>
										<button className={'p-2 bg-slate-100 rounded-full cursor-pointer'} onClick={closeModal}>
											<IoClose className={'text-2xl'}/>
										</button>
									</Dialog.Title>


									<Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
										{({values, handleSubmit}) => (
											<form onSubmit={handleSubmit} className={'w-[96%] lg:w-[80%] mx-auto'}>
												<div className={'flex items-center w-full gap-x-2 mb-3 border px-2'}>
													<FaRupeeSign className={'text-xl text-black/40'}/>
													<Field name={'amount'} type={'text'} inputMode={'numeric'} placeholder={'Enter amount  (in INR)'} className={'w-full py-2 outline-none border-none'}
													       onInput={(e: React.ChangeEvent<HTMLInputElement>) => e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^0+/, '')}/>
												</div>

												<div className={'flex w-full items-center justify-end mb-3'}>
													<button disabled={values.amount < 1 || isLoading}
													        className={'flex items-center gap-x-2 px-3 py-1 rounded-sm bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300 cursor-pointer text-white'}>
														<span>Pay</span>
														<SiRazorpay className={''}/>
													</button>
												</div>
											</form>
										)}
									</Formik>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default AddAmountModal;
