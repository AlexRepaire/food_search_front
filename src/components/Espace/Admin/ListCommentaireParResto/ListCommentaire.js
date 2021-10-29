import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import restaurantService from "../../../../services/restaurantService";
import {comment} from "postcss";
import evaluationService from "../../../../services/evaluationService";
import commandeService from "../../../../services/commandeService";

const ListCommentaire = () => {
    const {id} = useParams();
    const [dataResto, setDataResto] = useState({
        restNom : '',
        fsCommandesByRestId: [{

            fsEvaluationByCmdIdEva:{
                evaCommentaire : ''
            }
        }],
        });
    const recupDataRest = async() => {
        //const response = await restaurantService.get(id);
        //const data = await response.data;
        //await setDataResto(data);
        const response = await commandeService.getListByRest(id);
        console.log(response.data);
    }

    const suppDonne = async(e) => {
        const id = e.target.value;
        const response = await evaluationService.remove(id);
        console.log(response);
    }

    useEffect(async()=>{
        await recupDataRest();
    },[])

    return (
        <div>
            <div>
                <p className="text-6xl text-center">{dataResto.restNom}</p>
            </div>
            {
                dataResto.fsCommandesByRestId.map((res)=>{
                    const response = res.fsEvaluationByCmdIdEva;
                    return(
                        <div className="flex py-8 w-full mt-8">
                            <div className="px-12 w-9/12">
                                <p>{response.evaCommentaire}</p>
                            </div>
                            <div className="px-12 w-3/12 flex items-center justify-center">
                                <button className="btnDanger" value={response.evaId} onClick={suppDonne}>Supprimer</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ListCommentaire;