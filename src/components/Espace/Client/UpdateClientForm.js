import React, {Fragment} from 'react';
import FieldForm from "../../../UI/FieldForm";

const UpdateClientForm = ({toggleShowModalUpdateUser,handleChangeUpdateClient,formValideUpdateClient,userDataUpdated}) => {
    return (
        <Fragment>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h2 className="text-3xl text-center text-gray-700 mb-4">Modifier ses informations</h2>
                        </div>
                        {/*body*/}
                        <form className="lg:block justify-center w-full" onSubmit={formValideUpdateClient}>
                            <FieldForm label="Adresse mail :" type="mail" value={userDataUpdated.utiMail} name="utiMail" onChange={handleChangeUpdateClient}/>
                            <FieldForm label="Numéro :"  type="number" value={userDataUpdated.utiTel} name="utiTel" onChange={handleChangeUpdateClient}/>

                            <div className="flex items-center justify-end p-6 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={toggleShowModalUpdateUser}
                                >
                                    Annuler
                                </button>
                                <button
                                    className="bg-green-700 text-white active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Valider
                                </button>
                            </div>
                        </form>
                        {/*footer*/}
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </Fragment>
    );
};

export default UpdateClientForm;