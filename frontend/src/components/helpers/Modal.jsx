import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import Button from "../global/Button";

const Modal = ({ message,title, onAccept, onReject, Icons }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm ">
      <div className="flex max-h-[90vh] w-[35rem] flex-col gap-4 overflow-y-auto rounded-2xl  bg-white px-4 py-6 shadow-2xl">
        
         <div className="flex gap-3">
            <div className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center bg-rose-200">
                <RxCrossCircled  className="text-2xl text-rose-500 font-bold"/>
            </div>
            <div className="flex flex-col gap-3 w-[28rem]">
                <p className="text-2xl font-bold">{title}</p>
                <p className="text-gray-400 text-[16px]">{message}</p>
            </div>
         </div>

         <div className="flex gap-2 justify-end mt-4 px-5 ">
            <div className="h-[2rem]">
               <Button
                          type="button"
                          text={
                            <>
                             Cancel
                            </>
                          }
                          btnType="secondary"
                          classname="text-gray-600!"
                        />
            </div>
            <div className="w-[15rem] h-[2rem]">
                 <Button
                          type="button"
                          text={
                            <>
                              Yes, Reject Company
                            </>
                          }
                          classname="inline-flex items-center justify-center gap-1.5 border border-rose-200 bg-rose-50! text-sm font-medium text-rose-700! hover:border-rose-300 hover:bg-rose-100!"
                        />
            </div>
             
           
         </div>
      </div>
    </div>
  );
};

export default Modal;
