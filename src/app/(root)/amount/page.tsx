import HeaderName from "@/components/HeaderName";
import {CiSquarePlus} from "react-icons/ci";
import AddAmountModal from "@/components/amount/AddAmountModal";

function AmountPage() {
	return (
		<div className={'container py-10'}>
			<HeaderName/>
			<div className={'card flex items-center justify-between w-1/3 border px-3 py-5 rounded-md'}>
				<div className={'flex flex-col'}>
					<h1 className={'text-2xl font-bold'}>Add Amount</h1>
					<p>Total Amount: 150/-</p>
				</div>

				<AddAmountModal/>
			</div>
		</div>
	);
}

export default AmountPage;
