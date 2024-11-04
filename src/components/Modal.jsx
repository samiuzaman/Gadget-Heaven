import Success from "../assets/success.png"
const Modal = () => {
  return (
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <figure>
      <img src={Success} alt="Payment Success" />
    </figure>
    <h3 className="font-bold text-lg">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing.</p>
    <p>Total:2449.969</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  );
};

export default Modal;