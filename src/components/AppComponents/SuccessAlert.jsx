const SuccessAlert = ({ title, description }) => {
  return (
    <dialog className="fixed flex items-start md:items-center bottom-1 right-2 bg-green-200 rounded-lg p-3 w-72 max-w-3xl mb-3 md:w-full animate-slideDown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#41934d"
        ariaHidden="true"
        className="nz sb axw max-w-[25px] md:max-w-[30px]"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div className="flex flex-col ml-1 md:ml-2">
        <h3 className="text-base text-green-950 md:text-lg font-semibold">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-green-800 mt-1">{description}</p>
      </div>
    </dialog>
  );
};

export default SuccessAlert;
