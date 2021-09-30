import React from 'react';

const Panier = () => {
    return (
        <div>

            <div className="h-screen bg-blend-luminosity">
                <div className="py-12">
                    <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                        <div className="md:flex ">
                            <div className="w-full p-4 px-5 py-5">
                                <div className="md:grid md:grid-cols-3 gap-2 ">
                                    <div className="col-span-2 p-5">
                                        <h1 className="text-xl font-medium ">Panier</h1>
                                        <div className="flex justify-between items-center mt-6 pt-6">
                                            <div class="flex items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width="60" class="rounded-full "/>
                                                <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">Le wrap à Momo</span> <span class="text-xs font-light text-gray-400">#41551</span> </div>
                                            </div>
                                            <div class="flex justify-center items-center">
                                                <div class="pr-8 flex "> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/> <span class="font-semibold">+</span> </div>
                                                <div class="pr-8 "> <span class="text-xs font-medium">10.50€</span> </div>
                                                <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center pt-6 mt-6 border-t">
                                            <div className="flex items-center"><img
                                                src="https://i.imgur.com/Uv2Yqzo.jpg" width="60"
                                                className="rounded-full "/>
                                                <div className="flex flex-col ml-3 "><span
                                                    className="text-md font-medium w-auto">Potatoes Mexicaine épicée</span>
                                                    <span className="text-xs font-light text-gray-400">#66999</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <div className="pr-8 flex"><span className="font-semibold">-</span>
                                                    <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/> <span className="font-semibold">+</span></div>
                                                <div className="pr-8"><span
                                                    className="text-xs font-medium">10.50€</span></div>
                                                <div><i className="fa fa-close text-xs font-medium"></i></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div className="flex items-center"><img src="https://i.imgur.com/xbTAITF.jpg" width="60" className="rounded-full "/>
                                                <div className="flex flex-col ml-3 "><span className="text-md font-medium">Petit-déj</span> <span
                                                    className="text-xs font-light text-gray-400">#86577</span></div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <div className="pr-8 flex"><span className="font-semibold">-</span>
                                                    <input type="text"
                                                           className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                                           value="1"/> <span className="font-semibold">+</span></div>
                                                <div className="pr-8"><span
                                                    className="text-xs font-medium">10.50€</span></div>
                                                <div><i className="fa fa-close text-xs font-medium"></i></div>
                                            </div>
                                        </div>
                                        <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div class="flex items-center"> <i class="fa fa-arrow-left text-sm pr-2"></i> <span class="text-md font-medium text-blue-500">Continuer vos achats</span> </div>
                                            <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Total:</span> <span class="text-lg font-bold text-gray-800 ">24.90€</span> </div>
                                        </div>
                                    </div>
                                    <div class=" p-5 bg-gray-800 rounded overflow-visible"> <span class="text-xl font-medium text-gray-100 block pb-3">Détails de la carte</span> <span class="text-xs text-gray-400 ">Type de carte</span>
                                        <div class="overflow-visible flex justify-between items-center mt-2">
                                            <div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10"> <span class="italic text-lg font-medium text-gray-200 underline">VISA</span>
                                                <div class="flex justify-between items-center pt-4 "> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> </div>
                                                <div class="flex justify-between items-center mt-3"> <span class="text-xs text-gray-200">Giga Tamarashvili</span> <span class="text-xs text-gray-200">12/22</span> </div>
                                            </div>
                                            <div class="flex justify-center items-center flex-col"> <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" class="relative right-5"/> <span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span> </div>
                                        </div>
                                        <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Nom de la carte</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Giga Tamarashvili"/> </div>
                                        <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Numéro de carte</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="**** **** **** ****"/> </div>
                                        <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                                            <div class="col-span-2 "> <label class="text-xs text-gray-400">Date d'expiration</label>
                                                <div class="grid grid-cols-2 gap-2"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm"/>
                                                    <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="aaaa"/> </div>
                                            </div>
                                            <div class=""> <label class="text-xs text-gray-400">Cryptogramme</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX"/> </div>
                                        </div> <button class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Valider</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Panier;