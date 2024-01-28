import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

// eslint-disable-next-line react/prop-types
function FormButton({ isValid, isSubmitting, linkText, link, buttonText, submitText }) {
  return (
    <>
      <div className="w-11/12 lg:min-w-96 mb-3 flex justify-between items-center">
        <button
          className={`border-none text-base lg:text-lg py-1 px-5 lg:px-7 transition-all ${
            isValid
              ? 'bg-cyan-500/50 text-white hover:bg-white hover:text-cyan-500 group'
              : 'bg-white text-gray-500 cursor-no-drop'
          }`}
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? (
            <p className="flex gap-1 items-center group:hover:text-cyan-500 ">
              {submitText}
              <SyncLoader className="transition-all" size={5} />
            </p>
          ) : (
            buttonText
          )}
        </button>
        <Link
          className="block underline text-base lg:text-lg hover:text-cyan-500/50 transition-all"
          to={link}
        >
          {linkText}
        </Link>
      </div>
    </>
  );
}

export default FormButton;
