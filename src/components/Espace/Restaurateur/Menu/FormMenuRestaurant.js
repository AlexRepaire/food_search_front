import React, {Fragment, useState} from 'react';
import {Transition, Dialog, Disclosure, Menu} from "@headlessui/react";
import {ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon} from '@heroicons/react/solid'
import FieldForm from "../../../../UI/FieldForm";

const FormMenuRestaurant = () => {

    const menu = [
        {
            id: 'entrees',
            name: 'Entrées',
            options: [
                {value: 'entree1', label: 'entrée 1', checked: false},
                {value: 'entree2', label: 'entrée 2', checked: false},
                {value: 'entree3', label: 'entrée 3', checked: false},
                {value: 'entree4', label: 'entrée 4', checked: false},
                {value: 'entree5', label: 'entrée 5', checked: false},

            ],
        },
        {
            id: 'plats',
            name: 'Plats',
            options: [
                {value: 'plat1', label: 'plat 1', checked: false},
                {value: 'plat2', label: 'plat 2', checked: false},
                {value: 'plat3', label: 'plat 3', checked: true},
                {value: 'plat4', label: 'plat 4', checked: false},
                {value: 'plat5', label: 'plat 5', checked: false},
            ],
        },
        {
            id: 'desserts',
            name: 'Desserts',
            options: [
                {value: 'dessert1', label: 'dessert 1', checked: false},
                {value: 'dessert2', label: 'dessert 2', checked: false},
                {value: 'dessert3', label: 'dessert 3', checked: false},
                {value: 'dessert4', label: 'dessert 4', checked: false},
                {value: 'dessert5', label: 'dessert 5', checked: false},
            ],
        },
        {
            id: 'boissons',
            name: 'Boissons',
            options: [
                {value: 'boisson1', label: 'boisson 1', checked: false},
                {value: 'boisson2', label: 'boisson 2', checked: false},
                {value: 'boisson3', label: 'boisson 3', checked: true},
                {value: 'boisson4', label: 'boisson 4', checked: false},
                {value: 'boisson5', label: 'boisson 5', checked: false},
            ],
        }
    ]

    const  classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-white flex justify-center">


            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                    <h5 className="text-xl font-extrabold tracking-tight text-gray-900">Ajouter un menu</h5>
                </div>

                <section aria-labelledby="products-heading" className="pt-6 pb-24">

                    <div >
                        {/* Filters */}
                        <form className="hidden lg:block justify-center w-full">

                            <p className="font-medium text-gray-900">Nom du menu</p>
                            <FieldForm/>

                            {menu.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                    {({open}) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button
                                                    className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                            <span
                                                                className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                                 {open ? (
                                                                     <MinusSmIcon className="h-5 w-5" aria-hidden="true"/>
                                                                 ) : (
                                                                     <PlusSmIcon className="h-5 w-5" aria-hidden="true"/>
                                                                 )}
                                                            </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                defaultChecked={option.checked}
                                                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="ml-3 text-sm text-gray-600"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                            <br/>
                            <button className="btnUpdate rounded-full  ">AJOUTER MENU</button>
                        </form>

                        {/* Product grid */}
                        {/*<div className="lg:col-span-3">*/}
                        {/*    /!* Replace with your content *!/*/}
                        {/*    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full"/>*/}
                        {/*    /!* /End replace *!/*/}
                        {/*</div>*/}
                    </div>
                </section>
            </main>

        </div>
    )
}


export default FormMenuRestaurant;
