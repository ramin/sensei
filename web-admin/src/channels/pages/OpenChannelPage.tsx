import OpenChannelForm from "../components/OpenChannelForm";
import { Link } from "react-router-dom";

const OpenChannelPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-5 border-b border-gray-400 sm:flex sm:items-center sm:justify-between">
          <h3 className="text-2xl leading-6 font-medium text-light-plum">
            Open Channel
          </h3>

          <div className="mt-3 sm:mt-0 sm:ml-4">
            <Link
              to="/admin/channels"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-light-plum bg-plum-50 hover:bg-plum-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="bg-plum-100 text-light-plum shadow p-4 rounded-lg">
            <OpenChannelForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenChannelPage;
