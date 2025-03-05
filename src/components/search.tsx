'use client'

import {useState} from "react";

export default function Search() {
    const [search, setSearch] = useState('')
    const inputHandler = (event):void => {
        setSearch(event.target.value)
    }
    return(
        <div>
            <form>
                검색어 : <input type='text' value={search} onChange={inputHandler}/>
                <button onClick={() => {console.log('qhsowla', search)}}>검색</button>
            </form>
        </div>
    )
}