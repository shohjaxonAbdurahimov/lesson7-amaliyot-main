import React, { useRef } from "react"

function Search({setNewUrl}) {
    const searchText = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = (searchText.current.value);
        setNewUrl(query)
    }

    return (
        <div>
           
                <form onSubmit={handleSubmit} className=" mt-20 forma flex items-center gap-4">
                    <input
                        type="text"
                        ref={searchText}
                        placeholder="Search Any Images"
                        className="input  input-bordered input-neutral w-full max-w-xs"
                    />
                    <button className="btn btn-neutral ">Search</button>
                </form>
            </div>
    )
}

export default Search