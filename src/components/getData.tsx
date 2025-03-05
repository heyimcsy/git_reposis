'use client'

import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";

export default function GetData(){
    const [totalCount, setTotalCount] = useState<number>(0);
    const [results, setResults] = useState<any[]>([]);
    const getResults = async () => {
        return await axios.get(`https://api.github.com/search/repositories?q={next}`)
    }
    const {data, isSuccess} = useQuery({
        queryKey:['github'],
        queryFn: getResults,
    })

    useEffect(():void => {
        if (!isSuccess) return
        setTotalCount(data?.data.total_count)
        setResults(data?.data.items)
        console.log(totalCount,'dataaa',results)
    }, [data]);

    return (
        <div style={{width: '900px', height: '900px',border: '1px solid pink' }}>

        </div>
    )
}