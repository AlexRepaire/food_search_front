import {Fragment, useContext, useEffect, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {Link} from "react-router-dom";
import AuthContext from "../../store/auth-context";
import {getItem} from "../../services/LocalStorage/localeStorage";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const DropDownNavBar = (props) => {
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [url, setUrl] = useState('');

    const urlEspace = async () => {
        const data = new Object(JSON.parse(user));
        await setUserData(data);

        if (data.role === "ROLE_CLIENT") {
            await setUrl("/espaceClient");
        }
        if (data.role === "ROLE_RESTAURANT") {
            await setUrl("/espaceRestaurateur");
        }
        if (data.role === "ROLE_ADMIN") {
            await setUrl("/espaceAdmin");
        }
    }

    useEffect(async ()=>{
        const userData2 = setTimeout(() => {
            setUserData(new Object(JSON.parse(user)));
            console.log(userData)
            urlEspace();
        }, 1000)
    },[])

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>

                <Menu.Button className="rounded-full border border-gray-300
                shadow-sm p-2 bg-white ">
                    <ChevronDownIcon className=" ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to={url}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Mon Profil
                                </Link>
                            )}
                        </Menu.Item>
                        {userData.role === "ROLE_CLIENT" ?
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to={"/espaceClient/panier"}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Panier
                                    </Link>
                                )}
                            </Menu.Item>
                        : null}

                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={props.logout}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                    )}
                                >
                                    Déconnexion
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default DropDownNavBar;