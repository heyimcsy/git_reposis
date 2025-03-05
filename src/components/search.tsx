'use client'

import {useState} from "react";
import {useSearchStore} from "@/store/useSearchStore";

export default function Search() {
    const { setItem }= useSearchStore()
    const [search, setSearch] = useState<string>('')
    const inputHandler = (event):void => {
        setSearch(event.target.value)
    }

    const submitHandler = (event):void => {
        event.preventDefault();
        setItem(search)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                검색어 : <input type='text' value={search} onChange={inputHandler}/>
                <button type="submit">검색</button>
            </form>
        </div>
    )
}