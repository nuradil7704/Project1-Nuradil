// import React, {useState} from 'react';
// import Modals from "./modal/Modals";
//
// const Headers = () => {
//     const [open, setOpen] = useState(false);
//
//     const handleConfirm = (result) => {
//         if (result) {
//             console.log("Add Invoice ...");
//         }
//         setOpen(false);
//     };
//
//     return (
//         <>
//             <div className="new_invoice_btn">
//                 <button
//                     className="new_inv_btn"
//                     onClick={() => setOpen(true)}
//                 >
//                     <p className="new_inv_btn_p">Create new invoice +</p>
//                 </button>
//             </div>
//
//             <Modals open={open} handleConfirm={handleConfirm}/>
//         </>
//     );
// }
//
// export default Headers;