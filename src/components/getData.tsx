'use client'

import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";

export default function GetData(){
    const [totalCount, setTotalCount] = useState<number>(0);
    const [results, setResults] = useState<any[]>([]);
    const getResults = async () => {
        return await axios.get(`https://api.github.com/search/repositories?q={map}`)
    }
    const {data, isSuccess} = useQuery({
        queryKey:['github'],
        queryFn: getResults,
    })

    useEffect(():void => {
        if (!isSuccess) return
        setTotalCount(data?.data.total_count)
        setResults(data?.data.items)
        console.log(results)
    }, [data]);

    return (
        <div style={{width: '900px', height: '100%',border: '1px solid pink' }}>
            <p>Total Counts : <span>{totalCount}</span></p>
            <div style={{width: '700px', height: '700px', border:'1px solid red',
            display: 'flex',overflow: 'auto' }}>
                {results.map((data) => (
                    <div key={data.id} style={{width: '400px', height: ' 350px', border: '1px solid orange'}}>
                        <p style={{width: '400px', fontSize: '26px'}}>name: {data.name}</p>
                        <p style={{width: '400px'}}>description: {data.description}</p>
                        <p style={{width: '400px'}}>owner: {data.owner.login}</p>
                        <p style={{width: '400px'}}>language: {data.language}</p>
                        {/*<a href={data.downloads_url}>downloads_url: {data.downloads_url} </a>*/}
                    </div>
                ))
                }
            </div>
        </div>
    )
}