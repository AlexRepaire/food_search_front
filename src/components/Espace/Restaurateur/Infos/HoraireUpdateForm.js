import React, {Fragment} from 'react';
import FieldForm from "../../../../UI/FieldForm";

const HoraireUpdateForm = ({horraireSelectedToUpdate, toggleShowModalUpdate, semaine, handleChangeHoraireUpdate, validerHoraireUpdateForm, handleChangeHoraireOuvertureUpdateForm}) => {
    return (
        <Fragment>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h2 className="text-3xl text-center text-gray-700 mb-4">Ajouter horaire</h2>
                        </div>
                        {/*body*/}
                        <form className="lg:block justify-center w-full" onSubmit={validerHoraireUpdateForm}>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span className="font-medium text-gray-700">Jour de la semaine</span>
                                <select className="form-select border rounded-md block w-full mb-2 mt-1 py-2"
                                        name="jour" onChange={handleChangeHoraireUpdate}>
                                    {semaine.map((res, index) => (
                                        <option className='text-center' key={index} value={res} selected={res === horraireSelectedToUpdate.jour}>{res}</option>
                                    ))}
                                </select>
                            </label>
                            <div className="flex text-center">
                                <FieldForm className="w-6/12" label="ouvert"  type="radio" name="ouvert" value={true}  checked={horraireSelectedToUpdate.ouvert === true} onChange={handleChangeHoraireOuvertureUpdateForm}/>
                                <FieldForm className="w-6/12" label="fermé"  type="radio" name="ouvert" value={false} checked={horraireSelectedToUpdate.ouvert === false} onChange={handleChangeHoraireOuvertureUpdateForm}/>
                            </div>

                            {horraireSelectedToUpdate.ouvert ?
                                <div>
                                    <FieldForm label="ouverture matin" type="time" name="ouvertureMatin" value={horraireSelectedToUpdate.ouvertureMatin} onChange={handleChangeHoraireUpdate}/>
                                    <FieldForm label="fermeture matin" type="time" name="fermetureMatin" value={horraireSelectedToUpdate.fermetureMatin} onChange={handleChangeHoraireUpdate}/>
                                    <FieldForm label="ouverture apres-midi (soir)"  type="time" name="ouvertureApresMidi" value={horraireSelectedToUpdate.ouvertureApresMidi} onChange={handleChangeHoraireUpdate}/>
                                    <FieldForm label="fermeture apres-midi (soir)"  type="time" name="fermetureApresMidi" value={horraireSelectedToUpdate.fermetureApresMidi} onChange={handleChangeHoraireUpdate}/>
                                </div>
                                : null
                            }

                            <div className="flex items-center justify-end p-6 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={toggleShowModalUpdate}
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

export default HoraireUpdateForm;