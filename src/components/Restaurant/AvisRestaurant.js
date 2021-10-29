import React, {Fragment} from 'react';

const AvisRestaurant = ({evaluations}) => {
    return (
        <Fragment>
            {evaluations.map((res,index) => (
                <div key={index} className="flex w-full mb-4 border-b-2 py-4">
                    <div className=" py-4 w-2/6 ">
                        <div className="flex items-center">
                            <div className="ml-12">
                                <div className="text-sm text-gray-500">
                                    {res.evaDate}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {res.evaNote} / 5
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" py-4 whitespace-nowrap border-l-2 p-4 w-4/6">
                        <div className="text-sm text-gray-900">{res.evaCommentaire}</div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default AvisRestaurant;